import * as fs from "fs";
import { promisify } from "util";
import path from "path";
import { Country, FormerCountry, Subdivision } from "../src/types";

const fsMkdir = promisify(fs.mkdir);
const fsWriteFile = promisify(fs.writeFile);
const fsReadFile = promisify(fs.readFile);

const srcPath = path.join(".", "src");

async function generateCountriesJSON() {
  const rawCountries = await fsReadFile(
    "./iso-codes/data/iso_3166-1.json",
    "utf-8"
  );
  const countries: { "3166-1": Country[] } = JSON.parse(rawCountries);

  await fsWriteFile(
    path.join(srcPath, "countries.ts"),
    `
import type { Country } from "./types";
export type { Country } from "./types";

const countries: Array<Country> = ${JSON.stringify(countries["3166-1"], null, 2)};
export default countries;
`
  );
}

async function generateSubdivisionsJSONs() {
  const rawSubdivisionsData = await fsReadFile(
    "./iso-codes/data/iso_3166-2.json",
    "utf-8"
  );
  const subdivisionsData: { "3166-2": Subdivision[] } =
    JSON.parse(rawSubdivisionsData);

  await fsMkdir(path.join(srcPath, "subdivisions"), { recursive: true });

  const knownSubdivisions = Object.entries(
    subdivisionsData["3166-2"].reduce(
      (
        subdivisionsByCountry: { [key: string]: Subdivision[] },
        subdivision
      ) => {
        const [countryCode, subdivisionCode] = subdivision.code.split("-");
        if (!subdivisionsByCountry[countryCode]) {
          subdivisionsByCountry[countryCode] = [];
        }
        subdivisionsByCountry[countryCode].push({
          ...subdivision,
          code: subdivisionCode,
        });
        return subdivisionsByCountry;
      },
      {}
    )
  );

  // Generate subdivisions/<Country>.json from iso_3166-2.json
  for (let country of knownSubdivisions) {
    await fsWriteFile(
      path.join(srcPath, "subdivisions", `${country[0]}.ts`),
      `
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = ${JSON.stringify(country[1], null, 2)};
export default subdivisions;
`
    );
  }

  await fsWriteFile(
    path.join(srcPath, "subdivisions", "index.ts"),
    knownSubdivisions
      .map(
        ([countryCode, _]) => `import ${countryCode} from "./${countryCode}";`
      )
      .join("\n") +
      "\n" +
      "\n" +
      "export default {\n  " +
      knownSubdivisions.map(([countryCode, _]) => countryCode).join(",\n  ") +
      "\n};"
  );
}

async function generateFormerCountriesJSON() {
  const rawCountries = await fsReadFile(
    "./iso-codes/data/iso_3166-3.json",
    "utf-8"
  );
  const countries: { "3166-3": FormerCountry[] } = JSON.parse(rawCountries);

  await fsWriteFile(
    path.join(srcPath, "former_countries.ts"),
    `
import type { FormerCountry } from "./types";
export type { FormerCountry } from "./types";

const former_countries: Array<FormerCountry> = ${JSON.stringify(countries["3166-3"], null, 2)};
export default former_countries;
`
  );
}

async function run() {
  await generateCountriesJSON();
  await generateSubdivisionsJSONs();
  await generateFormerCountriesJSON();
}

run();
