export interface ProjectsTypes {
    id: number,
    title: string,
    description: {
        intro: string,
        technologies: string[],
    },
    links: string
}