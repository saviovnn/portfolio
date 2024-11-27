import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { GlobalContext } from "../components/GlobalContext";

export default function Nav() {
  const { toggleLanguage, language } = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [flag, setFlag] = useState("brasil");
  const [isAnimating, setIsAnimating] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: language === "en" ? "About" : "Sobre" },
    { id: "skills", label: language === "en" ? "Skills" : "Habilidades" },
    {
      id: "experience",
      label: language === "en" ? "Experience" : "Experiência",
    },
    { id: "portfolio", label: language === "en" ? "Portfolio" : "Portfólio" },
    { id: "contact", label: language === "en" ? "Contact" : "Contato" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, [menuItems]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = id === "contact" ? -80 : 0;
      const topPosition =
        section.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const toggleFlag = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setFlag((prevFlag) => (prevFlag === "brasil" ? "eua" : "brasil"));
      toggleLanguage();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="bg-back"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="../vnn.svg" alt="vnn" className="size-16" />
        </NavbarBrand>
        <NavbarItem>
          <img
            src={`/${flag}.svg`}
            alt={flag}
            onClick={toggleFlag}
            className={`${
              isAnimating
                ? "scale-75 transition-transform duration-300"
                : "transition-transform duration-300"
            } ${flag === "brasil" ? "h-10" : "h-12"} cursor-pointer`}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-rob" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id} isActive={activeSection === item.id}>
            <button
              onClick={() => handleScroll(item.id)}
              className={`${
                activeSection === item.id ? "text-primary" : "text-foreground"
              } transition-colors duration-300 focus:outline-none`}
            >
              {item.label}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href={`/${
              language === "en"
                ? "Curriculo_SavioVianna_en.pdf"
                : "Curriculo_SavioVianna_ptbr.pdf"
            }`}
            download={`${
              language === "en"
                ? "Curriculo_SavioVianna_en.pdf"
                : "Curriculo_SavioVianna_ptbr.pdf"
            }`}
            variant="flat"
            className="bg-primary text-white font-bold drop-shadow-1xl"
          >
            {language === "en" ? "DOWNLOAD CV" : "BAIXAR CV"}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className={`bg-back ${
          isMenuOpen ? "block" : "hidden"
        } flex flex-col gap-6 sm:gap-0 w-full`}
      >
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <button
              onClick={() => handleScroll(item.id)}
              className={`w-full text-left ${
                activeSection === item.id ? "text-primary" : "text-foreground"
              } transition-colors duration-300`}
            >
              {item.label}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
