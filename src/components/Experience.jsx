import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";

const Experience = () => {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState({
    title: "",
    role: "",
    description: "",
    date: "",
  });
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const typeText = (key, newText, callback) => {
      let index = 0;
      const typingEffect = () => {
        setText((prev) => ({
          ...prev,
          [key]: newText.slice(0, index),
        }));

        index++;
        if (index <= newText.length) {
          setTimeout(typingEffect, 55);
        } else if (callback) {
          callback();
        }
      };
      typingEffect();
    };

    const translations = {
      en: {
        title: "Experience",
        role: "Trainee",
        description: `● Work on projects that optimize processes with Microsoft Power Platform.\n● Develop modern and dynamic websites with Vue.js.\n● Create interfaces and prototypes in Figma, merging design and functionality.`,
        date: "Dez 2024 - Present",
      },
      pt: {
        title: "Experiência",
        role: "Estagiário",
        description: `● Atuo em projetos que otimizam processos com Microsoft Power Platform.\n● Desenvolvo sites modernos e dinâmicos com Vue.js.\n● Crio interfaces e protótipos no Figma, unindo design e funcionalidade.`,
        date: "Dez 2024 - Presente",
      },
    };

    const currentTranslation = translations[language];

    setText({ title: "", role: "", description: "", date: "" });
    setBackgroundVisible(false);
    setImageVisible(false);

    typeText("title", currentTranslation.title, () => {
      setTimeout(() => {
        setBackgroundVisible(true);
        setTimeout(() => {
          setImageVisible(true);
          setTimeout(() => {
            typeText("role", currentTranslation.role, () => {
              typeText("description", currentTranslation.description, () => {
                typeText("date", currentTranslation.date);
              });
            });
          }, 500);
        }, 500);
      }, 500);
    });
  }, [language]);

  const backgroundAnimationClass = backgroundVisible
    ? "scale-y-100 opacity-100"
    : "scale-y-0 opacity-0";

  const imageAnimationClass = imageVisible
    ? "scale-100 translate-x-0 opacity-100"
    : "scale-0 -translate-x-10 opacity-0";

  return (
    <div
      className="flex flex-col container mx-auto px-6 max-w-[1024px] py-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="experience"
    >
      <h1 className="font-lora text-5xl text-center font-semibold mb-8">
        {text.title}
      </h1>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 items-start bg-white w-full h-auto p-8 rounded-xl drop-shadow-lg gap-4 sm:gap-8 pt-6 pb-8 origin-top transition-transform duration-700 ease-in-out ${backgroundAnimationClass}`}
        style={{ minHeight: "350px" }}
      >
        <div className="flex justify-center md:justify-start">
          <img
            src="../../public/tmh.png"
            alt="tmh"
            className={`h-16 p-2 bg-back_secundary rounded-lg px-6 transform transition-transform duration-700 ease-in-out hover:scale-110 ${imageAnimationClass}`}
          />
        </div>

        <div className="grid grid-flow-row justify-center sm:justify-start font-pop text-xl font-normal text-center sm:text-left">
          <h3 className="text-gray-700 text-3xl font-normal mb-0.5 text-center sm:text-left">
            {text.role}
          </h3>

          <div
            className="text-gray-600 text-sm sm:text-base mt-0 space-y-1 sm:text-left"
            dangerouslySetInnerHTML={{
              __html: text.description.replace(/\n/g, "<br>"),
            }}
          ></div>
        </div>

        <div className="w-full font-pop text-sm font-normal text-gray-700 text-center md:text-end">
          <h4>{text.date}</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
