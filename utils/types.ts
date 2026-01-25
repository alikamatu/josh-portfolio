export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  client?: string;
  industry?: string;
  tools: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type Skill = {
  name: string;
  level: number;
  category: "Design" | "Development" | "Tools";
};