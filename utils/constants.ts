export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/18CqfBdjew/?mibextid=wwXIfr",
  linkedin:
    "https://www.linkedin.com/in/joshua-abugri-a56982220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  twitter: "https://x.com/joshua1_bra?s=21",
  instagram:
    "https://www.instagram.com/joshconceptsstudio?igsh=MWVsdzdsbDgxaDc2&utm_source=qr",
  behance: "https://www.behance.net/abugrijoshua",
} as const;



export const SKILL_CATEGORIES = ["All", "Development", "Tools"] as const;

export const EXPERIENCE_YEARS = 3;

export const SKILLS = [
  { name: "Adobe Photoshop", level: 95 },
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
  // "Matte Paintings",
  "Logo", 
  "Social And Print Graphics",
  // "Website Banners & UI",
] as const;

export const PROJECTS_PER_PAGE = 4;

export interface Project {
  id: number;
  title: string;
  category: string[];
  image: string;
  description: string;
  client: string;
  industry: string;
  tools: string[];
  tags?: string[];
  link: string;
}