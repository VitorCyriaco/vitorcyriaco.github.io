import { useState } from "react";
import { icons } from "../../../../data/projects"
import { motivationalMessages } from "../../../../data/messages";

export function About() {

    const [message, setMessage] = useState<string>('');

    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
        setMessage(motivationalMessages[randomIndex]);
    };
    return (
        <div className="w-full h-[100vh] bg-black/50 backdrop-blur-md p-8 relative">
            <h3 className="text-2xl text-white">Sobre Mim</h3>

            <div className="flex w-full mt-20">

                <div className="w-1/2">
                    <article className="w-[60%] mt-30 ml-30">
                        <p className="text-white text-xl">
                            Olá! Meu nome é Vitor Cyriaco, apaixonado por tecnologia e inovação.
                            Atualmente, estou me aprofundando no universo do desenvolvimento web e mobile, criando projetos que combinam funcionalidade, estética e uma ótima experiência de usuário.
                        </p>
                    </article>
                    <div
                        className="w-full bg-white/10 backdrop-blur-md border-t-5 border-white mt-20 overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center"
                        style={{
                            height: message ? "45%" : "0",
                            transformOrigin: "top",
                        }}
                        onMouseEnter={() => {
                            getRandomMessage();
                        }}
                        onMouseLeave={() => {
                            setMessage('');
                        }}
                    >
                        <p className="text-white text-2xl text-center opacity-100 transition-opacity duration-300 ease-in-out">
                            "{message}"
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-1/2">
                    <div>
                        <div className="w-[200px] h-[200px] mt-[22%] ml-[33%]">
                            <div className="animate-spin-slow rounded-full flex items-center justify-center">
                                {Object.entries(icons).map(([name, src], index) => {
                                    const angle = (360 / Object.keys(icons).length) * index;

                                    return (
                                        <div
                                            key={name}
                                            className="absolute"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(350%)`,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    transform: `rotate(-${angle}deg)`,
                                                }}
                                                className="animate-spin-slower"
                                            >
                                                <img src={src} alt={name} className="w-15 h-15" />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <article className="w-[60%] mt-30 ml-30">
                        <p className="text-white text-xl">
                            Tenho experiência prática em React, React Native, HTML, CSS, JavaScript, TypeScript e Tailwind CSS.
                            Cada projeto que desenvolvo é uma oportunidade de evoluir minhas habilidades, aprender novas ferramentas e construir soluções que fazem a diferença.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    )
}