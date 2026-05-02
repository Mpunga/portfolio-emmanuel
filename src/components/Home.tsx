import { Mail } from "lucide-react"
import img from "../assets/img.jpg"

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="!text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          bonjour , <br/> je suis {" "}
          <span className="text-accent">Emmanuel</span>
        </h1>
        <p className="!my-4 text-md text-center md:text-left">
          je suis un développeur web passionné, spécialisé dans la création de sites web modernes et réactifs. Avec une solide expérience en HTML, CSS, JavaScript et React. Contactez moi pour discuter de votre projet et voir comment je peux vous aider à concrétiser vos idées en ligne.
        </p>
        <a href="" className="btn btn-accent md:w-fit mt-3">
          <Mail className="w-5 h-5" />
          Contactez moi
        </a>
      </div>
      <div className="">
        <img src={img} alt="Profil" className="w-120 h-120 object-cover !border-8 border-accent shadow-x"
          style={{
            borderRadius: "16% 84% 12% 88% / 77% 11% 89% 23%  "
        }}
        />
      </div>
    </div>

  )
}

export default Home
