export type Athlete = {
    id: number;
    age: number;
    firstName: string;
    lastName: string; 
    displayName: string;
    jersey: number;
    position: Position;
    college: College; 
    headshot: Headshot;
    slug: string;
}

export type Data = {
    athletes: [Specialty, Specialty, Specialty]
    team: Team
}

export type Headshot ={
    href: string;
    alt: string;
}

export type Specialty = {
    position: string;
    items: [Athlete]
}

export type Position = {
    abbreviation: string;
    name: string; 
}

export type College = {
    id: number;
    abbrev: string; 
    mascot: string;
    name: string; 
}

export type Team = {
    id: number;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    logo: string;
}

