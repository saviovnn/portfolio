const Experience = () => {
  return (
    <div
      className="flex flex-col container mx-auto px-6 max-w-[1024px] py-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="experience"
    >
      <h1 className="font-lora text-5xl text-center font-semibold mb-8">
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-white w-full h-auto p-8 rounded-xl drop-shadow-lg gap-8 pt-6 pb-8 ">
        <div className="flex justify-center md:justify-start">
          <img
            src="../cogitt.png"
            alt="cogitt"
            className="h-16 bg-back_secundary rounded-lg px-6"
          />
        </div>

        <div className="grid grid-flow-row justify-start font-pop text-2xl font-normal">
          <h3 className="text-gray-700 text-center md:text-start">Trainee</h3>
          <div>
            <ul className="list-disc text-gray-600 text-base pl-5">
              <li className="text-lg">
                Development of native Mobile Applications with React Native.
              </li>
              <li className="text-lg">Integration of APIs and Web Services.</li>
              <li className="text-lg">
                Mobile Application Testing and Debugging.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full font-pop text-sm font-normal text-gray-700 text-center md:text-end">
          <h4>Nov 2024 - Present</h4>
        </div>
      </div>
    </div>
  );
};

export default Experience;
