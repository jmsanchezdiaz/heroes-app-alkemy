export interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface FormValues {
  email: string;
  password: string;
}

export interface Errors {
  password: ErrorMessage;
  email: ErrorMessage;
}

export type ErrorMessage =
  | "Input Required"
  | "Required"
  | "Invalid email address"
  | "Password too long"
  | "Password too short"
  | "";

export interface AuthContextType {
  userToken: string | null;
  logIn: (newToken: string) => void;
  logOut: () => void;
}

export type PowerstatsType = {
  [key: string]: string;
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};

export interface Hero {
  id: string;
  name: string;
  powerstats: PowerstatsType;
  appearance: {
    "eye-color": string;
    "hair-color": string;
    gender: string;
    race: string;
    height: string[];
    weight: string[];
  };
  image: {
    url: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
    connections: {
      "group-affiliation": string;
      relatives: string;
    };
    appearance: {
      gender: string;
      race: string;
      height: [string, string];
      weight: [string, string];
      "eye-color": string;
      " hair-color": string;
    };
  };
}

export interface HeroesContextType {
  actualTeam: Hero[];
  addHero: (hero: Hero) => void;
  errorHandling: (hero: Hero) => string;
  deleteHero: (heroId: string) => void;
  isAbleToAdd: (hero: Hero) => boolean;
  isHeroPartOfTeam: (heroId: string) => boolean;
}
