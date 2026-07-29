export type SponsorTierName = 'platinum' | 'gold' | 'silver';

export interface Sponsor {
  id: string;
  name: string;
  url: string;
  logo: string;
  tagline: string;
  highlighted?: boolean;
}

export interface Sponsors {
  platinum: Sponsor[];
  gold: Sponsor[];
  silver: Sponsor[];
}
