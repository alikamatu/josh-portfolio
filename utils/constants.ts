export const SOCIAL_LINKS = {
  dribbble: "https://dribbble.com",
  linkedin: "https://linkedin.com",
  behance: "https://behance.net",
  twitter: "https://twitter.com",
} as const;


export const SKILL_CATEGORIES = ["All", "Development", "Tools"] as const;

export const EXPERIENCE_YEARS = 3;

export const SKILLS = [
  { name: "Adobe Photoshop", level: 85 },
  { name: "Adobe Illustrator", level: 90 },
  { name: "Adobe InDesign", level: 80 },
  { name: "Adobe Premiere Pro", level: 75 },
  { name: "Adobe After Effects", level: 70 },
  { name: "Brand Identity", level: 90 },
  { name: "Logo Design", level: 95 },
  { name: "Print Design", level: 85 },
  { name: "Social Media Graphics", level: 88 },
] as const;

export const FIRST_NAME = "Joshua";
export const LAST_NAME = "Abugri";

export const CLIENT_LIST = [
  "Kailyn Hairmelo Hub",
  "Millennium Prayer House Chapel",
  "MaaB's Braids & Dreadlocks",
  "Various Small Businesses",
];

export const WORK_CATEGORIES = [
  "All",
  "Brand Identity",
  "Logo Design", 
  "Print Design",
  "Social Media",
  "Digital Graphics"
] as const;

export const PROJECTS_PER_PAGE = 4;

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  industry: string;
  tools: string[];
  tags?: string[];
  link: string;
}