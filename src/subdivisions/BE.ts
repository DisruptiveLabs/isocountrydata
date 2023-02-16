
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = [
  {
    "code": "BRU",
    "name": "Brussels Hoofdstedelijk Gewest",
    "type": "Region"
  },
  {
    "code": "VAN",
    "name": "Antwerpen",
    "parent": "VLG",
    "type": "Province"
  },
  {
    "code": "VBR",
    "name": "Vlaams-Brabant",
    "parent": "VLG",
    "type": "Province"
  },
  {
    "code": "VLG",
    "name": "Vlaams Gewest",
    "type": "Region"
  },
  {
    "code": "VLI",
    "name": "Limburg",
    "parent": "VLG",
    "type": "Province"
  },
  {
    "code": "VOV",
    "name": "Oost-Vlaanderen",
    "parent": "VLG",
    "type": "Province"
  },
  {
    "code": "VWV",
    "name": "West-Vlaanderen",
    "parent": "VLG",
    "type": "Province"
  },
  {
    "code": "WAL",
    "name": "wallonne, Région",
    "type": "Region"
  },
  {
    "code": "WBR",
    "name": "Brabant wallon",
    "parent": "WAL",
    "type": "Province"
  },
  {
    "code": "WHT",
    "name": "Hainaut",
    "parent": "WAL",
    "type": "Province"
  },
  {
    "code": "WLG",
    "name": "Liège",
    "parent": "WAL",
    "type": "Province"
  },
  {
    "code": "WLX",
    "name": "Luxembourg",
    "parent": "WAL",
    "type": "Province"
  },
  {
    "code": "WNA",
    "name": "Namur",
    "parent": "WAL",
    "type": "Province"
  }
];
export default subdivisions;
