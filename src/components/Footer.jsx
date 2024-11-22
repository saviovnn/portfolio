const Footer = () => {
  return (
    <div className="mt-20 sm:mt-32 lg:mt-52 bg-gradient-to-br from-primary to-secondary h-64 w-full flex items-center justify-center">
      <div className="grid grid-rows-2 items">
        <div className="flex gap-4 justify-center mb-4">
          <div className="flex items-center justify-center bg-back_secundary rounded-xl h-11 w-11">
            <a href="https://github.com/saviovnn">
              <img src="/public/icons/github.svg" alt="github" />
            </a>
          </div>
          <div className="flex items-center justify-center bg-back_secundary rounded-xl h-11 w-11">
            <a href="https://instagram.com/saviovnn">
              <img src="../public/icons/insta.svg" alt="insta" />
            </a>
          </div>
          <div className="flex items-center justify-center bg-back_secundary rounded-xl h-11 w-11">
            <a href="https://www.linkedin.com/in/savio-vianna-217705201/">
              <img src="/public/icons/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal flex gap-1 items-center justify-center">
          <img src="/public/c.svg" alt="c" className="h-4 " />
          Copyright, Savio Vianna 2024, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
