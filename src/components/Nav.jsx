import { useState, useEffect } from "react";
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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
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

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-back"
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="../vnn.svg" alt="vnn" className="size-16" />
        </NavbarBrand>
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
            href="/path-to-your-cv.pdf" // Caminho do Curriculo PDF
            download="My_CV.pdf"
            variant="flat"
            className="bg-primary text-white font-bold drop-shadow-1xl"
          >
            DOWNLOAD CV
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className={`bg-back ${
          isMenuOpen ? "block" : "hidden"
        } flex flex-col gap-6 sm:gap-0`}
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
