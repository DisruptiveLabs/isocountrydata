
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = [
  {
    "code": "AN",
    "name": "Annobon",
    "parent": "I",
    "type": "Province"
  },
  {
    "code": "BN",
    "name": "Bioko Nord",
    "parent": "I",
    "type": "Province"
  },
  {
    "code": "BS",
    "name": "Bioko Sud",
    "parent": "I",
    "type": "Province"
  },
  {
    "code": "C",
    "name": "Região Continental",
    "type": "Region"
  },
  {
    "code": "CS",
    "name": "Centro Sud",
    "parent": "C",
    "type": "Province"
  },
  {
    "code": "DJ",
    "name": "Djibloho",
    "parent": "C",
    "type": "Province"
  },
  {
    "code": "I",
    "name": "Região Insular",
    "type": "Region"
  },
  {
    "code": "KN",
    "name": "Kié-Ntem",
    "parent": "C",
    "type": "Province"
  },
  {
    "code": "LI",
    "name": "Litoral",
    "parent": "C",
    "type": "Province"
  },
  {
    "code": "WN",
    "name": "Wele-Nzas",
    "parent": "C",
    "type": "Province"
  }
];
export default subdivisions;
