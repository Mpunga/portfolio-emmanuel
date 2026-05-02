import Title from "./Title"
import img from "../assets/img2.jpeg"
import { LetterText } from "lucide-react"
import { CalendarSync, Paintbrush } from "lucide-react"


const AboutSection = [
    {
        id: 1,
        title: "Développeur Front-end",
        description: "Je suis un développeur front-end passionné, spécialisé dans la création de sites web modernes et réactifs."
        ,
        icon: <LetterText className = "text-accent scale-150 " />
    },
    {
        id: 2,
        title: "Développeur Back-end",
        description: "Je suis un développeur back-end passionné, spécialisé dans la création de serveurs robustes et évolutifs. Avec une solide expérience en Node.js, "
        ,
        icon: <CalendarSync className = "text-accent scale-150 " />
    },
    {
        id: 3,
        title: "Integrator Odoo",
        description: "Je suis un intégrateur Odoo passionné, spécialisé dans la configuration et l'optimisation des solutions ERP. "
        ,
        icon: <Paintbrush className = "text-accent scale-150 " />
    }
]

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32">
          <Title title="À propos" />
          <div className="!md:h-screen flex justify-center items-center">
              <div className="hidden md:block">
                  <img src={img} alt="Profil" className="w-96 object-cover rounded-xl"
                     
                  />
              </div>
              <div className="md:ml-4 space-y-4">
                  {
                        AboutSection.map((section) => (
                            <div key={section.id}
                                className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
                                
                                <div className=" mb-2 mr-é md:mb-0">
                                    {section.icon}
                                    </div>
                                <div className="md:ml-4 text-center md:text-lef">
                                    <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                                </div>
                                <p className="text-sm">{section.description}</p>
                            </div>
                        ))  
                  }
              </div>
          </div>
    </div>
  )
}

export default About
 