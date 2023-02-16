
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = [
  {
    "code": "1",
    "name": "Central",
    "type": "Development region"
  },
  {
    "code": "2",
    "name": "Mid Western",
    "type": "Development region"
  },
  {
    "code": "3",
    "name": "Western",
    "type": "Development region"
  },
  {
    "code": "4",
    "name": "Eastern",
    "type": "Development region"
  },
  {
    "code": "5",
    "name": "Far Western",
    "type": "Development region"
  },
  {
    "code": "BA",
    "name": "Bagmati",
    "parent": "1",
    "type": "Zone"
  },
  {
    "code": "BH",
    "name": "Bheri",
    "parent": "2",
    "type": "Zone"
  },
  {
    "code": "DH",
    "name": "Dhawalagiri",
    "parent": "3",
    "type": "Zone"
  },
  {
    "code": "GA",
    "name": "Gandaki",
    "parent": "3",
    "type": "Zone"
  },
  {
    "code": "JA",
    "name": "Janakpur",
    "parent": "1",
    "type": "Zone"
  },
  {
    "code": "KA",
    "name": "Karnali",
    "parent": "2",
    "type": "Zone"
  },
  {
    "code": "KO",
    "name": "Kosi",
    "parent": "4",
    "type": "Zone"
  },
  {
    "code": "LU",
    "name": "Lumbini",
    "parent": "3",
    "type": "Zone"
  },
  {
    "code": "MA",
    "name": "Mahakali",
    "parent": "5",
    "type": "Zone"
  },
  {
    "code": "ME",
    "name": "Mechi",
    "parent": "4",
    "type": "Zone"
  },
  {
    "code": "NA",
    "name": "Narayani",
    "parent": "1",
    "type": "Zone"
  },
  {
    "code": "P1",
    "name": "Province 1",
    "type": "Province"
  },
  {
    "code": "P2",
    "name": "Province 2",
    "type": "Province"
  },
  {
    "code": "P3",
    "name": "Bāgmatī",
    "type": "Province"
  },
  {
    "code": "P4",
    "name": "Gandaki",
    "type": "Province"
  },
  {
    "code": "P5",
    "name": "Province 5",
    "type": "Province"
  },
  {
    "code": "P6",
    "name": "Karnali",
    "type": "Province"
  },
  {
    "code": "P7",
    "name": "Sudūr Pashchim",
    "type": "Province"
  },
  {
    "code": "RA",
    "name": "Rapti",
    "parent": "2",
    "type": "Zone"
  },
  {
    "code": "SA",
    "name": "Sagarmatha",
    "parent": "4",
    "type": "Zone"
  },
  {
    "code": "SE",
    "name": "Seti",
    "parent": "5",
    "type": "Zone"
  }
];
export default subdivisions;
