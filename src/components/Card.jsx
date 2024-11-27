import PropTypes from "prop-types";

const Card = ({ title, img, icon1, icon2, icon3, link, rep }) => {
  return (
    <div className="transform scale-90 lg:scale-100">
      <div className="w-full max-w-[22rem] h-auto lg:max-w-[24rem] lg:h-[24rem] rounded-xl bg-gradient-to-b from-primary to-secondary transition-all duration-1000 drop-shadow-2xl items-center transform hover:scale-105 pb-8">
        <p className="text-white items-center pt-4 w-full flex justify-center font-lora font-semibold text-xl lg:text-2xl">
          {title}
        </p>

        <div className="pt-4 px-8">
          <img src={img} alt="img" className="rounded-xl" />
        </div>
        <div className="flex gap-3 justify-start ml-8 mt-4">
          <div className="flex items-center justify-center bg-back_secundary rounded-2xl h-10 w-10 lg:h-11 lg:w-11">
            <img src={icon1} alt="vite" />
          </div>
          <div className="flex items-center justify-center bg-back_secundary rounded-xl h-10 w-10 lg:h-11 lg:w-11">
            <img src={icon2} alt="react" />
          </div>
          <div className="flex items-center justify-center bg-back_secundary rounded-xl h-10 w-10 lg:h-11 lg:w-11">
            <img src={icon3} alt="tailwind" />
          </div>
        </div>
        <div className="flex justify-between mx-8 mt-4 ">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center bg-back_secundary w-28 h-12 lg:w-32 lg:h-14 rounded-xl">
              <img
                src="../icons/demo.svg"
                alt="demo"
                className="h-5 lg:h-6 mx-4"
              />
              <h3 className="font-lora text-sm lg:text-base font-medium text-white">
                Demo
              </h3>
            </div>
          </a>
          <a
            href={rep}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="flex items-center bg-back_secundary w-28 h-12 lg:w-32 lg:h-14 rounded-xl">
              <img
                src="../icons/github.svg"
                alt="github"
                className="h-5 lg:h-6 mx-4"
              />
              <h3 className="font-lora text-sm lg:text-base font-medium text-white">
                Github
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  icon3: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  rep: PropTypes.string.isRequired,
};

export default Card;
