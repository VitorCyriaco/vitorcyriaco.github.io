import { Background } from "../../../background";
import { Header } from "../../../header";


export function Hero() {
    return (
        <>
            <div className="fixed z-0 w-full h-full">
                <Background />
            </div>
            <div className="flex justify-end z-10">
                <Header />
            </div>
        </>
    );
}
