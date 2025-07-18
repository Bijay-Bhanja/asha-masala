import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/hero.jpg";
import banner2 from "../assets/hero.jpg";
import banner3 from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative">
      {/* Auto-scrolling Banner */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={800}
        className="w-full"
      >
        {[banner1, banner2, banner3].map((banner, index) => (
          <div key={index}>
            <img
              src={banner}
              alt={`Spice Banner ${index + 1}`}
              className="h-[300px] md:h-[500px] lg:h-[600px] w-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow">
          Spice Up Your Life
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-white max-w-2xl mx-auto drop-shadow">
          Authentic Indian masalas made with age-old traditions and 100% purity.
        </p>
      </div>
    </section>
  );
};

export default Hero;
