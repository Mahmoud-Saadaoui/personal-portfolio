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