import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";

const Skills = () => {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState({
    title: "",
    frontEnd: "",
    developmentTools: "",
  });
  const [iconsVisible, setIconsVisible] = useState({
    frontEnd: false,
    developmentTools: false,
  });

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

    setText({ title: "", frontEnd: "", developmentTools: "" });
    setIconsVisible({ frontEnd: false, developmentTools: false });

    const translations = {
      en: {
        title: "Skills",
        frontEnd: "Front-end",
        developmentTools: "Development Tools",
      },
      pt: {
        title: "Habilidades",
        frontEnd: "Front-end",
        developmentTools: "Ferramentas de Desenvolvimento",
      },
    };

    const currentTranslation = translations[language];

    typeText("title", currentTranslation.title, () => {
      typeText("frontEnd", currentTranslation.frontEnd, () => {
        setTimeout(() => {
          setIconsVisible((prev) => ({ ...prev, frontEnd: true }));
          setTimeout(() => {
            typeText(
              "developmentTools",
              currentTranslation.developmentTools,
              () => {
                setTimeout(() => {
                  setIconsVisible((prev) => ({
                    ...prev,
                    developmentTools: true,
                  }));
                }, 500);
              }
            );
          }, 1000);
        }, 500);
      });
    });
  }, [language]);

  const iconAnimationClass = (isVisible) =>
    `w-16 h-16 transform transition-transform duration-700 ease-in-out hover:scale-110 ${
      isVisible
        ? "scale-100 opacity-100 translate-x-0"
        : "scale-0 opacity-0 -translate-x-10"
    }`;

  return (
    <div
      className="flex flex-col container mx-auto px-6 max-w-[1024px] py-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="skills"
    >
      <h1 className="font-lora text-5xl text-center font-semibold mb-8">
        {text.title}
      </h1>

      <div>
        <h2 className="font-lora text-4xl font-normal mb-6 text-center md:text-start">
          {text.frontEnd}
        </h2>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mx-auto">
          {[
            { src: "../icons/html.svg", alt: "html" },
            { src: "../icons/css.svg", alt: "css" },
            { src: "../icons/js.svg", alt: "js" },
            { src: "../icons/ts.svg", alt: "ts" },
            { src: "../icons/vuejs.svg", alt: "vue" },
            { src: "../icons/nuxt.svg", alt: "nuxt" },
            { src: "../icons/reactjs.svg", alt: "react" },
            { src: "../icons/nextjs.svg", alt: "next" },
            { src: "../icons/tailwindcss.svg", alt: "tailwind" },
            { src: "../icons/sass.svg", alt: "sass" },
          ].map((icon, index) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className={`${iconAnimationClass(iconsVisible.frontEnd)}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-lora text-4xl font-normal mb-6 text-center md:text-start">
          {text.developmentTools}
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mx-auto">
          {[
            { src: "../icons/git.svg", alt: "git" },
            { src: "../icons/vite.svg", alt: "vite" },
            { src: "../icons/npm.svg", alt: "npm" },
            { src: "../icons/homebrew.svg", alt: "homebrew" },
            { src: "../icons/vscode.svg", alt: "vscode" },
            { src: "../icons/figma.svg", alt: "figma" },
          ].map((icon, index) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              className={`${iconAnimationClass(iconsVisible.developmentTools)}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
