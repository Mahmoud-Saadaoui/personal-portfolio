export interface ProjectsTypes {
    id: number,
    title: string,
    description: {
        intro: string,
        technologies: string[],
    },
    link: string,
    demo: string
}

export interface SkillsType {
    key: string,
    descKey: string,
}

export type WorkCardProps = {
    title: string;
    description: string;
};

export type SectionKey = string;

export interface MainContentProps {
    active: SectionKey;
}