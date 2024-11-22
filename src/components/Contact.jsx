import Forms from "./Forms";

const Contact = () => {
  return (
    <div
      className="container mx-auto px-6 max-w-[1024px] sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="contact"
    >
      <div className="bg-white rounded-xl min-h-[40rem] py-10 drop-shadow-xl">
        <h1 className="font-lora text-5xl text-center font-semibold mb-8 ">
          Contact
          <div className="flex items-center justify-center">
            <img src="/public/line.svg" alt="line" />
          </div>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Forms />

          <img
            src="assets/mailDesign.svg"
            alt="mailDesign"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
