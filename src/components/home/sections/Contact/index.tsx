import { useMasks } from "../../../../hooks/useMask"

export function Contact() {

const {tellRef} = useMasks();

    return (
        <div className="w-full h-[100vh] bg-black/80 backdrop-blur-md p-8 relative">
            <h3 className="text-2xl text-white">Contato</h3>
            <div className="flex align-center justify-center mt-30">
                <form action="https://formsubmit.co/vitorcyriaco@live.com" method="POST">
                    <div className="flex flex-col">
                        <input className="bg-white/50 backdrop-blur-md w-80 mb-5 px-2 pb-1 h-10 rounded-xl text-md text-white" type="email" name="email" placeholder="Seu email" required />
                        <input className="bg-white/50 backdrop-blur-md w-80 mb-5 px-2 pb-1 h-10 rounded-xl text-md text-white" ref={tellRef} type="text" name="tel" placeholder="Seu telefone" required />
                        <textarea className="bg-white/50 backdrop-blur-md w-80 h-50 p-2 rounded-xl resize-none text-md text-white" name="mesage" id="" placeholder="Sua mensagem" required></textarea>
                        <button className="relative flex self-center mt-5 hover:opacity-55" type="submit"><img className="w-30 h-20" src="src/assets/img/icons/header-icon.png" alt="" /><p className="absolute top-4 left-9 text-white font-bold">Enviar</p></button>
                    </div>
                </form>
            </div>

            <div className="flex w-full justify-end">
                <ul className="absolute bottom-20 flex items-center gap-10">
                    <a className="hover:opacity-55" href="https://www.linkedin.com/in/vitorcyriaco/" target="_blank" rel="noopener noreferrer"><li><img className="w-50" src="src/assets/img/icons/linkedin.png" alt="" /></li></a>
                    <a className="hover:opacity-55" href="https://github.com/VitorCyriaco" target="_blank" rel="noopener noreferrer"><li><img className="w-45" src="src/assets/img/icons/github.png" alt="" /></li></a>
                </ul>
            </div>
        </div>
    )
}