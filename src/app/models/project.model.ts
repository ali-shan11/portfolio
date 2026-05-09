export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string | null;
  requirements: string[];
  structure: string;
  link?: string;
  github?: string;
}
