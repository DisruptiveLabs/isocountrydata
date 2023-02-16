export interface LanguageCode {
  // ISO 639-2 Language Codes
  name: string; // Name of the item
  alpha_3: string; // Three letter terminology code of the language
  alpha_2?: string; // Two letter alphabetic code of the language from part 1
  bibliographic?: string; // Three letter bibliographic code of the language
  common_name?: string; // Common name of the language
}

export interface Country {
  alpha_2: string;
  alpha_3: string;
  flag: string;
  name: string;
  numeric: string;
  common_name?: string;
  official_name?: string;
}

export interface Subdivision {
  code: string;
  name: string;
  type: string;
  parent?: string;
}

export interface FormerCountry {
  alpha_2: string;
  alpha_3: string;
  alpha_4: string;
  name: string;
  withdrawal_date: string;
  numeric?: string;
  comment?: string;
}
