import { IconsProps, ProjectsProps } from "../types/projects"

const icons : IconsProps = {
        react_native: "src/assets/img/icons/react-native.png",
        react: "src/assets/img/icons/react.png",
        vite: "src/assets/img/icons/vite.png",
        expo: "src/assets/img/icons/expo.png",
        css: "src/assets/img/icons/css.png",
        html: "src/assets/img/icons/html.png",
        supabase: "src/assets/img/icons/supabase.png",
        javascript: "src/assets/img/icons/javascript.png",
        typescript: "src/assets/img/icons/typescript.png",
        tailwind: "src/assets/img/icons/tailwind-css.png",
        material_ui: "src/assets/img/icons/material-ui.png",
        postgresql: "src/assets/img/icons/postgresql.png"

}

const project: ProjectsProps[] = [
    {
        name: "Agendão (Em Andamento)",
        image: "src/assets/img/projects/agendao.jpeg",
        description: "Aplicativo Mobile para agendamento de diversos serviços com diversos filtros de pesquisa e interface intuitiva.",
        icons: ["react_native", "expo", "typescript", "supabase"]
    },
    {
        name: "Agendão Dash (Em Andamento)",
        image: "src/assets/img/projects/agendao-dash.jpg",
        description: "Aplicação web para complementar o App Agendão, apresenta gráficos de desempenho, controle de agendamentos, profissionais, chat e muito mais.",
        icons: ["react", "vite", "typescript", "material_ui", "supabase"]
    },
    {
        name: "Pesquisa de Perfil do GitHub",
        image: "src/assets/img/projects/github-search.jpg",
        description: "Página para pesquisar perfil utilizando API do GitHub, é possível ver o nome, a foto e a biografia do perfil pesquisado.",
        icons: ["react", "vite", "typescript", "tailwind"]
    },
    {
        name: "Projeto Avanti",
        image: "src/assets/img/projects/avanti.jpg",
        description: "LandingPage desenvolvida para um teste avaliativo.",
        icons: ["html", "css", "javascript", "tailwind"]
    },
    {
        name: "Controle de Aluguél (Loja)",
        image: "src/assets/img/projects/store-dash.jpeg",
        description: "Aplicação web para controle de aluguél de vestidos e roupas de festa. Com banco de dados.",
        icons: ["react", "vite", "typescript", "postgresql"]
    },
    {
        name: "Conversor de Moedas",
        image: "src/assets/img/projects/live-currency.jpg",
        description: "Compara o valor de diversas moedas em relação ao dolar além de possibilitar a conversão pelo valor atual de cada uma. Tudo consumindo a API CoinGecko.",
        icons: ["react", "vite", "css", "typescript"]
    },
]

export {project, icons}