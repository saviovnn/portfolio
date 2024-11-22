const Skills = () => {
  return (
    <div
      className="flex flex-col container mx-auto px-6 max-w-[1024px]  py-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="skills"
    >
      <h1 className="font-lora text-5xl text-center font-semibold mb-8">
        Skills
      </h1>

      <div>
        <h2 className="font-lora text-4xl font-normal mb-6 text-center md:text-start">
          Front-end
        </h2>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mx-auto">
          <img
            src="../icons/html.svg"
            alt="html"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/css.svg"
            alt="css"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/js.svg"
            alt="js"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/ts.svg"
            alt="ts"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/vuejs.svg"
            alt="vue"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/nuxt.svg"
            alt="nuxt"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/reactjs.svg"
            alt="react"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/nextjs.svg"
            alt="next"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/tailwindcss.svg"
            alt="tailwind"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/sass.svg"
            alt="sass"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-lora text-4xl font-normal mb-6 text-center md:text-start">
          Development Tools
        </h2>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 mx-auto">
          <img
            src="../icons/git.svg"
            alt="git"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/vite.svg"
            alt="vite"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/npm.svg"
            alt="npm"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/homebrew.svg"
            alt="homebrew"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/vscode.svg"
            alt="vscode"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src="../icons/figma.svg"
            alt="figma"
            className="w-16 h-16 transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
