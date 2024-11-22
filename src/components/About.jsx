const About = () => {
  return (
    <div
      className="flex flex-col container mx-auto px-6 max-w-[1024px]  py-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="about"
    >
      <h1 className="flex font-lora text-5xl items-center justify-start font-semibold mx-auto mb-8">
        About
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 xl:gap-16">
        <img
          src="https://avatars.githubusercontent.com/u/68607129?v=4"
          alt="photo"
          className="w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-70 lg:h-70 xl:w-76 xl:h-76 rounded-full"
        />

        <p className="max-w-[500px] w-full text-justify font-pop text-xl font-light">
          I am a student in the fourth semester of Information Systems at UNITAU
          and I started my training in technology with a technical course in IT
          at the Tancredo Neves Professional Education Center (CEP), in
          Brazópolis. I focus on web and mobile development, always looking for
          innovations and new approaches.
        </p>
      </div>
    </div>
  );
};

export default About;
