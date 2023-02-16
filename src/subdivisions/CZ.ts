
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = [
  {
    "code": "10",
    "name": "Praha, Hlavní město",
    "type": "Capital city"
  },
  {
    "code": "20",
    "name": "Středočeský kraj",
    "type": "Region"
  },
  {
    "code": "201",
    "name": "Benešov",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "202",
    "name": "Beroun",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "203",
    "name": "Kladno",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "204",
    "name": "Kolín",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "205",
    "name": "Kutná Hora",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "206",
    "name": "Mělník",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "207",
    "name": "Mladá Boleslav",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "208",
    "name": "Nymburk",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "209",
    "name": "Praha-východ",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "20A",
    "name": "Praha-západ",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "20B",
    "name": "Příbram",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "20C",
    "name": "Rakovník",
    "parent": "20",
    "type": "District"
  },
  {
    "code": "31",
    "name": "Jihočeský kraj",
    "type": "Region"
  },
  {
    "code": "311",
    "name": "České Budějovice",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "312",
    "name": "Český Krumlov",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "313",
    "name": "Jindřichův Hradec",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "314",
    "name": "Písek",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "315",
    "name": "Prachatice",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "316",
    "name": "Strakonice",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "317",
    "name": "Tábor",
    "parent": "31",
    "type": "District"
  },
  {
    "code": "32",
    "name": "Plzeňský kraj",
    "type": "Region"
  },
  {
    "code": "321",
    "name": "Domažlice",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "322",
    "name": "Klatovy",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "323",
    "name": "Plzeň-město",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "324",
    "name": "Plzeň-jih",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "325",
    "name": "Plzeň-sever",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "326",
    "name": "Rokycany",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "327",
    "name": "Tachov",
    "parent": "32",
    "type": "District"
  },
  {
    "code": "41",
    "name": "Karlovarský kraj",
    "type": "Region"
  },
  {
    "code": "411",
    "name": "Cheb",
    "parent": "41",
    "type": "District"
  },
  {
    "code": "412",
    "name": "Karlovy Vary",
    "parent": "41",
    "type": "District"
  },
  {
    "code": "413",
    "name": "Sokolov",
    "parent": "41",
    "type": "District"
  },
  {
    "code": "42",
    "name": "Ústecký kraj",
    "type": "Region"
  },
  {
    "code": "421",
    "name": "Děčín",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "422",
    "name": "Chomutov",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "423",
    "name": "Litoměřice",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "424",
    "name": "Louny",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "425",
    "name": "Most",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "426",
    "name": "Teplice",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "427",
    "name": "Ústí nad Labem",
    "parent": "42",
    "type": "District"
  },
  {
    "code": "51",
    "name": "Liberecký kraj",
    "type": "Region"
  },
  {
    "code": "511",
    "name": "Česká Lípa",
    "parent": "51",
    "type": "District"
  },
  {
    "code": "512",
    "name": "Jablonec nad Nisou",
    "parent": "51",
    "type": "District"
  },
  {
    "code": "513",
    "name": "Liberec",
    "parent": "51",
    "type": "District"
  },
  {
    "code": "514",
    "name": "Semily",
    "parent": "51",
    "type": "District"
  },
  {
    "code": "52",
    "name": "Královéhradecký kraj",
    "type": "Region"
  },
  {
    "code": "521",
    "name": "Hradec Králové",
    "parent": "52",
    "type": "District"
  },
  {
    "code": "522",
    "name": "Jičín",
    "parent": "52",
    "type": "District"
  },
  {
    "code": "523",
    "name": "Náchod",
    "parent": "52",
    "type": "District"
  },
  {
    "code": "524",
    "name": "Rychnov nad Kněžnou",
    "parent": "52",
    "type": "District"
  },
  {
    "code": "525",
    "name": "Trutnov",
    "parent": "52",
    "type": "District"
  },
  {
    "code": "53",
    "name": "Pardubický kraj",
    "type": "Region"
  },
  {
    "code": "531",
    "name": "Chrudim",
    "parent": "53",
    "type": "District"
  },
  {
    "code": "532",
    "name": "Pardubice",
    "parent": "53",
    "type": "District"
  },
  {
    "code": "533",
    "name": "Svitavy",
    "parent": "53",
    "type": "District"
  },
  {
    "code": "534",
    "name": "Ústí nad Orlicí",
    "parent": "53",
    "type": "District"
  },
  {
    "code": "63",
    "name": "Kraj Vysočina",
    "type": "Region"
  },
  {
    "code": "631",
    "name": "Havlíčkův Brod",
    "parent": "63",
    "type": "District"
  },
  {
    "code": "632",
    "name": "Jihlava",
    "parent": "63",
    "type": "District"
  },
  {
    "code": "633",
    "name": "Pelhřimov",
    "parent": "63",
    "type": "District"
  },
  {
    "code": "634",
    "name": "Třebíč",
    "parent": "63",
    "type": "District"
  },
  {
    "code": "635",
    "name": "Žďár nad Sázavou",
    "parent": "63",
    "type": "District"
  },
  {
    "code": "64",
    "name": "Jihomoravský kraj",
    "type": "Region"
  },
  {
    "code": "641",
    "name": "Blansko",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "642",
    "name": "Brno-město",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "643",
    "name": "Brno-venkov",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "644",
    "name": "Břeclav",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "645",
    "name": "Hodonín",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "646",
    "name": "Vyškov",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "647",
    "name": "Znojmo",
    "parent": "64",
    "type": "District"
  },
  {
    "code": "71",
    "name": "Olomoucký kraj",
    "type": "Region"
  },
  {
    "code": "711",
    "name": "Jeseník",
    "parent": "71",
    "type": "District"
  },
  {
    "code": "712",
    "name": "Olomouc",
    "parent": "71",
    "type": "District"
  },
  {
    "code": "713",
    "name": "Prostějov",
    "parent": "71",
    "type": "District"
  },
  {
    "code": "714",
    "name": "Přerov",
    "parent": "71",
    "type": "District"
  },
  {
    "code": "715",
    "name": "Šumperk",
    "parent": "71",
    "type": "District"
  },
  {
    "code": "72",
    "name": "Zlínský kraj",
    "type": "Region"
  },
  {
    "code": "721",
    "name": "Kroměříž",
    "parent": "72",
    "type": "District"
  },
  {
    "code": "722",
    "name": "Uherské Hradiště",
    "parent": "72",
    "type": "District"
  },
  {
    "code": "723",
    "name": "Vsetín",
    "parent": "72",
    "type": "District"
  },
  {
    "code": "724",
    "name": "Zlín",
    "parent": "72",
    "type": "District"
  },
  {
    "code": "80",
    "name": "Moravskoslezský kraj",
    "type": "Region"
  },
  {
    "code": "801",
    "name": "Bruntál",
    "parent": "80",
    "type": "District"
  },
  {
    "code": "802",
    "name": "Frýdek-Místek",
    "parent": "80",
    "type": "District"
  },
  {
    "code": "803",
    "name": "Karviná",
    "parent": "80",
    "type": "District"
  },
  {
    "code": "804",
    "name": "Nový Jičín",
    "parent": "80",
    "type": "District"
  },
  {
    "code": "805",
    "name": "Opava",
    "parent": "80",
    "type": "District"
  },
  {
    "code": "806",
    "name": "Ostrava-město",
    "parent": "80",
    "type": "District"
  }
];
export default subdivisions;
