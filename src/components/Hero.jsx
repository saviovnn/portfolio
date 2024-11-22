const Hero = () => {
  return (
    <div className="container mx-auto px-6 max-w-[1024px] py-10" id="home">
      <h1 className="font-lora text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-[7.5rem] font-semibold text-end items-center mt-8">
        Hello
      </h1>
      <h1 className="font-lora text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-[7.5rem] font-semibold text-end items-center mt-8">
        I’m Savio Vianna
      </h1>
      <div className="flex flex-col md:flex-row items-center mt-20 md:mb-10 sm:mb-5">
        <div className="max-w-[485px] w-full text-justify mb-10 md:mb-0 md:mr-10">
          <p className="font-pop font-light text-2xl sm:text-3xl md:text-3xl lg:text-3xl">
            <a className="text-primary">I am a front-end developer </a> who
            constantly seeks out innovative solutions to everyday problems.
          </p>
        </div>

        <div className="w-full flex items-center justify-center md:items-end md:justify-end px-24">
          <img src="../scrool.svg" alt="scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
