export type IconsProps = {
    react: string;
    react_native: string;
    vite: string;
    expo: string;
    css: string;
    html: string;
    supabase: string;
    javascript: string;
    typescript: string;
    tailwind: string;
    material_ui: string;
    postgresql: string;
}

export type ProjectsProps = {
    name: string;
    image: string;
    description: string;
    icons: (keyof IconsProps)[];
}