import { Rocket } from "lucide-react"


const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#"
                className="flex items-center font-bold text-5xl md:text-xl"
            >
                <Rocket className="mr-2" />
                E-<span className="text-accent">SERVICES</span>
            </a>
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#"
                        className="btn btn-sm btn-ghost"
                    >
                        Accueil
                    </a>

                </li>
                <li>
                    <a href="#"
                        className="btn btn-sm btn-ghost"
                    >
                        A propos
                    </a>

                </li>
                <li>
                    <a href="#"
                        className="btn btn-sm btn-ghost"
                    >
                        Mes experiences
                    </a>

                </li>
                <li>
                    <a href="#"
                        className="btn btn-sm btn-ghost"
                    >
                        Mes projets
                    </a>

                </li>
            </ul>
        </div>
    )
}

export default Navbar
