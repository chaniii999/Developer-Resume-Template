import { Project } from '../../../data/resume';

export interface ProjectsProps {
  projects: Project[];
}

export interface ProjectItemProps {
  project: Project;
  isLast?: boolean;
}

export interface ProjectMetaProps {
  project: Project;
}

export interface ProjectTechStackProps {
  techStack: Project['techStack'];
}

export interface ProjectTextSectionProps {
  title: string;
  text: string;
}

export interface ProjectListSectionProps {
  title: string;
  items: string[];
  isHighlight?: boolean;
}

export type ProjectItemRenderer = (project: Project, index: number) => JSX.Element;
