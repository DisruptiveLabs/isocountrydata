
import type { Subdivision } from "../types";
export type { Subdivision } from "../types";

const subdivisions: Array<Subdivision> = [
  {
    "code": "01",
    "name": "Tanger-Tétouan-Al Hoceïma",
    "type": "Region"
  },
  {
    "code": "02",
    "name": "L'Oriental",
    "type": "Region"
  },
  {
    "code": "03",
    "name": "Fès-Meknès",
    "type": "Region"
  },
  {
    "code": "04",
    "name": "Rabat-Salé-Kénitra",
    "type": "Region"
  },
  {
    "code": "05",
    "name": "Béni Mellal-Khénifra",
    "type": "Region"
  },
  {
    "code": "06",
    "name": "Casablanca-Settat",
    "type": "Region"
  },
  {
    "code": "07",
    "name": "Marrakech-Safi",
    "type": "Region"
  },
  {
    "code": "08",
    "name": "Drâa-Tafilalet",
    "type": "Region"
  },
  {
    "code": "09",
    "name": "Souss-Massa",
    "type": "Region"
  },
  {
    "code": "10",
    "name": "Guelmim-Oued Noun (EH-partial)",
    "type": "Region"
  },
  {
    "code": "11",
    "name": "Laâyoune-Sakia El Hamra (EH-partial)",
    "type": "Region"
  },
  {
    "code": "12",
    "name": "Dakhla-Oued Ed-Dahab (EH)",
    "type": "Region"
  },
  {
    "code": "AGD",
    "name": "Agadir-Ida-Ou-Tanane",
    "parent": "09",
    "type": "Prefecture"
  },
  {
    "code": "AOU",
    "name": "Aousserd (EH)",
    "parent": "12",
    "type": "Province"
  },
  {
    "code": "ASZ",
    "name": "Assa-Zag (EH-partial)",
    "parent": "10",
    "type": "Province"
  },
  {
    "code": "AZI",
    "name": "Azilal",
    "parent": "05",
    "type": "Province"
  },
  {
    "code": "BEM",
    "name": "Béni Mellal",
    "parent": "05",
    "type": "Province"
  },
  {
    "code": "BER",
    "name": "Berkane",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "BES",
    "name": "Benslimane",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "BOD",
    "name": "Boujdour (EH)",
    "parent": "11",
    "type": "Province"
  },
  {
    "code": "BOM",
    "name": "Boulemane",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "BRR",
    "name": "Berrechid",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "CAS",
    "name": "Casablanca",
    "parent": "06",
    "type": "Prefecture"
  },
  {
    "code": "CHE",
    "name": "Chefchaouen",
    "parent": "01",
    "type": "Province"
  },
  {
    "code": "CHI",
    "name": "Chichaoua",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "CHT",
    "name": "Chtouka-Ait Baha",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "DRI",
    "name": "Driouch",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "ERR",
    "name": "Errachidia",
    "parent": "08",
    "type": "Province"
  },
  {
    "code": "ESI",
    "name": "Essaouira",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "ESM",
    "name": "Es-Semara (EH-partial)",
    "parent": "11",
    "type": "Province"
  },
  {
    "code": "FAH",
    "name": "Fahs-Anjra",
    "parent": "01",
    "type": "Province"
  },
  {
    "code": "FES",
    "name": "Fès",
    "parent": "03",
    "type": "Prefecture"
  },
  {
    "code": "FIG",
    "name": "Figuig",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "FQH",
    "name": "Fquih Ben Salah",
    "parent": "05",
    "type": "Province"
  },
  {
    "code": "GUE",
    "name": "Guelmim",
    "parent": "10",
    "type": "Province"
  },
  {
    "code": "GUF",
    "name": "Guercif",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "HAJ",
    "name": "El Hajeb",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "HAO",
    "name": "Al Haouz",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "HOC",
    "name": "Al Hoceïma",
    "parent": "01",
    "type": "Province"
  },
  {
    "code": "IFR",
    "name": "Ifrane",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "INE",
    "name": "Inezgane-Ait Melloul",
    "parent": "09",
    "type": "Prefecture"
  },
  {
    "code": "JDI",
    "name": "El Jadida",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "JRA",
    "name": "Jerada",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "KEN",
    "name": "Kénitra",
    "parent": "04",
    "type": "Province"
  },
  {
    "code": "KES",
    "name": "El Kelâa des Sraghna",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "KHE",
    "name": "Khémisset",
    "parent": "04",
    "type": "Province"
  },
  {
    "code": "KHN",
    "name": "Khénifra",
    "parent": "05",
    "type": "Province"
  },
  {
    "code": "KHO",
    "name": "Khouribga",
    "parent": "05",
    "type": "Province"
  },
  {
    "code": "LAA",
    "name": "Laâyoune (EH)",
    "parent": "11",
    "type": "Province"
  },
  {
    "code": "LAR",
    "name": "Larache",
    "parent": "01",
    "type": "Province"
  },
  {
    "code": "MAR",
    "name": "Marrakech",
    "parent": "07",
    "type": "Prefecture"
  },
  {
    "code": "MDF",
    "name": "M’diq-Fnideq",
    "parent": "01",
    "type": "Prefecture"
  },
  {
    "code": "MED",
    "name": "Médiouna",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "MEK",
    "name": "Meknès",
    "parent": "03",
    "type": "Prefecture"
  },
  {
    "code": "MID",
    "name": "Midelt",
    "parent": "08",
    "type": "Province"
  },
  {
    "code": "MOH",
    "name": "Mohammadia",
    "parent": "06",
    "type": "Prefecture"
  },
  {
    "code": "MOU",
    "name": "Moulay Yacoub",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "NAD",
    "name": "Nador",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "NOU",
    "name": "Nouaceur",
    "parent": "04",
    "type": "Province"
  },
  {
    "code": "OUA",
    "name": "Ouarzazate",
    "parent": "08",
    "type": "Province"
  },
  {
    "code": "OUD",
    "name": "Oued Ed-Dahab (EH)",
    "parent": "12",
    "type": "Province"
  },
  {
    "code": "OUJ",
    "name": "Oujda-Angad",
    "parent": "02",
    "type": "Prefecture"
  },
  {
    "code": "OUZ",
    "name": "Ouezzane",
    "parent": "01",
    "type": "Province"
  },
  {
    "code": "RAB",
    "name": "Rabat",
    "parent": "04",
    "type": "Prefecture"
  },
  {
    "code": "REH",
    "name": "Rehamna",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "SAF",
    "name": "Safi",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "SAL",
    "name": "Salé",
    "parent": "04",
    "type": "Prefecture"
  },
  {
    "code": "SEF",
    "name": "Sefrou",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "SET",
    "name": "Settat",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "SIB",
    "name": "Sidi Bennour",
    "parent": "06",
    "type": "Province"
  },
  {
    "code": "SIF",
    "name": "Sidi Ifni",
    "parent": "10",
    "type": "Province"
  },
  {
    "code": "SIK",
    "name": "Sidi Kacem",
    "parent": "04",
    "type": "Province"
  },
  {
    "code": "SIL",
    "name": "Sidi Slimane",
    "parent": "04",
    "type": "Province"
  },
  {
    "code": "SKH",
    "name": "Skhirate-Témara",
    "parent": "04",
    "type": "Prefecture"
  },
  {
    "code": "TAF",
    "name": "Tarfaya (EH-partial)",
    "parent": "11",
    "type": "Province"
  },
  {
    "code": "TAI",
    "name": "Taourirt",
    "parent": "02",
    "type": "Province"
  },
  {
    "code": "TAO",
    "name": "Taounate",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "TAR",
    "name": "Taroudannt",
    "parent": "09",
    "type": "Province"
  },
  {
    "code": "TAT",
    "name": "Tata",
    "parent": "09",
    "type": "Province"
  },
  {
    "code": "TAZ",
    "name": "Taza",
    "parent": "03",
    "type": "Province"
  },
  {
    "code": "TET",
    "name": "Tétouan",
    "parent": "01",
    "type": "Province"
  },
  {
    "code": "TIN",
    "name": "Tinghir",
    "parent": "08",
    "type": "Province"
  },
  {
    "code": "TIZ",
    "name": "Tiznit",
    "parent": "09",
    "type": "Province"
  },
  {
    "code": "TNG",
    "name": "Tanger-Assilah",
    "parent": "01",
    "type": "Prefecture"
  },
  {
    "code": "TNT",
    "name": "Tan-Tan (EH-partial)",
    "parent": "10",
    "type": "Province"
  },
  {
    "code": "YUS",
    "name": "Youssoufia",
    "parent": "07",
    "type": "Province"
  },
  {
    "code": "ZAG",
    "name": "Zagora",
    "parent": "08",
    "type": "Province"
  }
];
export default subdivisions;
