import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.15,
      }}
      className="mt-28"
    >
      <section className="container mx-auto bg-secondary-dark text-white py-10 sm:py-16 flex flex-wrap sm:flex-nowrap gap-5 ">
        <div className="sm:w-2/3 px-2 sm:px-10">
          <h3 className="font-nunito font-bold">Hola Somos Comercial ...</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dignissimos impedit vel debitis numquam error, voluptas culpa
            reprehenderit, aperiam totam nulla ducimus repudiandae incidunt
            deleniti porro assumenda quis sapiente quisquam!
          </p>
        </div>
        <div className="sm:w-1/3">
          <img
            src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png"
            alt="img"
            className="w-full rounded-lg"
          />
        </div>
      </section>
      <section className="container mx-auto py-10 sm:py-16 flex flex-wrap flex-col-reverse sm:flex-row sm:flex-nowrap gap-5 ">
        <div className="sm:w-1/3">
          <img
            src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png"
            alt="img"
            className="w-full rounded-lg"
          />
        </div>
        <div className="sm:w-2/3 px-2 sm:px-10">
          <h3 className="font-nunito font-bold">Hola Somos Comercial ...</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptates sint tenetur, ipsa porro omnis unde possimus quasi
            aspernatur exercitationem hic sed veniam sequi. Facere atque numquam
            deserunt nisi cumque.
          </p>
        </div>
      </section>
      <section className="container mx-auto bg-secondary-dark text-white py-10 sm:py-16 flex flex-wrap sm:flex-nowrap gap-5 ">
        <div className="sm:w-2/3 px-2 sm:px-10">
          <h3 className="font-nunito font-bold">Hola Somos Comercial ...</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            dignissimos impedit vel debitis numquam error, voluptas culpa
            reprehenderit, aperiam totam nulla ducimus repudiandae incidunt
            deleniti porro assumenda quis sapiente quisquam!
          </p>
        </div>
        <div className="sm:w-1/3">
          <img
            src="https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png"
            alt="img"
            className="w-full rounded-lg"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUs;
