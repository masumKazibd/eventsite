export interface SpeakerSocial {
  twitter?: string;
  github?: string;
  linkedin?: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  highlighted?: boolean;
  social?: SpeakerSocial;
}
