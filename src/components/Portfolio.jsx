import Card from "./Card";

const Portfolio = () => {
  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1024px] min-h-screen py-16 sm:py-20 lg:py-24"
      id="portfolio"
    >
      <h1 className="font-lora text-3xl text-center font-semibold mb-6 sm:mb-8 md:text-4xl lg:text-5xl">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-6 sm:gap-8 lg:gap-10 justify-items-center">
        <Card
          title="Protfolio"
          img="../portfolio.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/reactNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="#"
          rep="https://github.com/saviovnn"
        />
        <Card
          title="Halloween"
          img="../halloween.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/vueNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://halloween-lovat.vercel.app/"
          rep="https://github.com/saviovnn/halloween"
        />
        <Card
          title="Tic Tac Toe"
          img="../jogo.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/reactNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://jogo-da-velha-react-nine.vercel.app/"
          rep="https://github.com/saviovnn/jogo-da-velha-react"
        />
        <Card
          title="Calculator"
          img="../calc.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/reactNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://basic-calc-react.vercel.app/"
          rep="https://github.com/saviovnn/basic-calc-react"
        />
      </div>
    </div>
  );
};

export default Portfolio;
