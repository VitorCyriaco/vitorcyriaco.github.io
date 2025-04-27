export function Header() {
    return (
        <div className="p-5">
            <ul className="flex gap-10 text-white">
                <a href="#projects"><img className="relative w-30 h-20 transition hover:opacity-80" src="src/assets/img/icons/header-icon.png" alt="" />
                    <li className="absolute top-9 right-93">Projetos</li></a>
                <a href="#about"><img className="relative w-30 h-20  transition hover:opacity-80" src="src/assets/img/icons/header-icon.png" alt="" />
                    <li className="absolute top-9 right-55">Sobre</li></a>
                <a href="#contact"><img className="relative w-30 h-20  transition hover:opacity-80" src="src/assets/img/icons/header-icon.png" alt="" />
                    <li className="absolute top-9 right-13">Contato</li></a>
            </ul>
        </div>
    )
}