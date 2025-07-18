import AboutImage from "../assets/hero.jpg"; // Use a relevant image or replace path

const About = () => {
  return (
    <section id="about" className="bg-red-50 py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-red-700">
            About Asha Masala
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-semibold text-red-600">Asha Masala</span>, we’re on a mission to bring traditional
            Indian spice blends to your kitchen—fresh, flavorful, and authentic.
            <br /><br />
            Passed down through generations, our handcrafted masalas are carefully sourced and packed with love.
            Whether it’s the warmth of garam masala or the zing of chaat masala, we make sure every blend brings your
            food to life.
            <br /><br />
            Trusted by families and chefs alike, Asha Masala stands for purity, tradition, and unmatched taste.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={AboutImage}
            alt="About Asha Masala"
            className="rounded-xl shadow-lg w-full object-cover h-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
