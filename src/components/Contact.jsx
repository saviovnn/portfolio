import { useState, useEffect, useContext } from "react";
import Forms from "./Forms";
import { GlobalContext } from "../components/GlobalContext";

const Contact = () => {
  const { language } = useContext(GlobalContext);
  const [title, setTitle] = useState("");

  const translations = {
    en: {
      contact: "Contact",
    },
    pt: {
      contact: "Contato",
    },
  };

  useEffect(() => {
    const typeText = (newText, setFunction) => {
      let index = 0;
      const typingEffect = () => {
        setFunction(newText.slice(0, index));
        index++;
        if (index <= newText.length) {
          setTimeout(typingEffect, 80);
        }
      };
      typingEffect();
    };

    setTitle("");
    typeText(translations[language].contact, setTitle);
  }, [language]);

  return (
    <div
      className="container mx-auto px-6 max-w-[1024px] sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="contact"
    >
      <div className="bg-white rounded-xl min-h-[40rem] py-10 drop-shadow-xl">
        <h1 className="font-lora text-5xl text-center font-semibold mb-8 ">
          {title}
          <div className="flex items-center justify-center">
            <img src="/line.svg" alt="line" />
          </div>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Forms />
          <img
            src="/mailDesign.svg"
            alt="mailDesign"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
