
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = [
  {
    "code": "1",
    "name": "Western Province",
    "type": "Province"
  },
  {
    "code": "11",
    "name": "Colombo",
    "parent": "1",
    "type": "District"
  },
  {
    "code": "12",
    "name": "Gampaha",
    "parent": "1",
    "type": "District"
  },
  {
    "code": "13",
    "name": "Kalutara",
    "parent": "1",
    "type": "District"
  },
  {
    "code": "2",
    "name": "Central Province",
    "type": "Province"
  },
  {
    "code": "21",
    "name": "Kandy",
    "parent": "2",
    "type": "District"
  },
  {
    "code": "22",
    "name": "Matale",
    "parent": "2",
    "type": "District"
  },
  {
    "code": "23",
    "name": "Nuwara Eliya",
    "parent": "2",
    "type": "District"
  },
  {
    "code": "3",
    "name": "Southern Province",
    "type": "Province"
  },
  {
    "code": "31",
    "name": "Galle",
    "parent": "3",
    "type": "District"
  },
  {
    "code": "32",
    "name": "Matara",
    "parent": "3",
    "type": "District"
  },
  {
    "code": "33",
    "name": "Hambantota",
    "parent": "3",
    "type": "District"
  },
  {
    "code": "4",
    "name": "Northern Province",
    "type": "Province"
  },
  {
    "code": "41",
    "name": "Jaffna",
    "parent": "4",
    "type": "District"
  },
  {
    "code": "42",
    "name": "Kilinochchi",
    "parent": "4",
    "type": "District"
  },
  {
    "code": "43",
    "name": "Mannar",
    "parent": "4",
    "type": "District"
  },
  {
    "code": "44",
    "name": "Vavuniya",
    "parent": "4",
    "type": "District"
  },
  {
    "code": "45",
    "name": "Mullaittivu",
    "parent": "4",
    "type": "District"
  },
  {
    "code": "5",
    "name": "Eastern Province",
    "type": "Province"
  },
  {
    "code": "51",
    "name": "Batticaloa",
    "parent": "5",
    "type": "District"
  },
  {
    "code": "52",
    "name": "Ampara",
    "parent": "5",
    "type": "District"
  },
  {
    "code": "53",
    "name": "Trincomalee",
    "parent": "5",
    "type": "District"
  },
  {
    "code": "6",
    "name": "North Western Province",
    "type": "Province"
  },
  {
    "code": "61",
    "name": "Kurunegala",
    "parent": "6",
    "type": "District"
  },
  {
    "code": "62",
    "name": "Puttalam",
    "parent": "6",
    "type": "District"
  },
  {
    "code": "7",
    "name": "North Central Province",
    "type": "Province"
  },
  {
    "code": "71",
    "name": "Anuradhapura",
    "parent": "7",
    "type": "District"
  },
  {
    "code": "72",
    "name": "Polonnaruwa",
    "parent": "7",
    "type": "District"
  },
  {
    "code": "8",
    "name": "Uva Province",
    "type": "Province"
  },
  {
    "code": "81",
    "name": "Badulla",
    "parent": "8",
    "type": "District"
  },
  {
    "code": "82",
    "name": "Monaragala",
    "parent": "8",
    "type": "District"
  },
  {
    "code": "9",
    "name": "Sabaragamuwa Province",
    "type": "Province"
  },
  {
    "code": "91",
    "name": "Ratnapura",
    "parent": "9",
    "type": "District"
  },
  {
    "code": "92",
    "name": "Kegalla",
    "parent": "9",
    "type": "District"
  }
];
export default subdivisions;
