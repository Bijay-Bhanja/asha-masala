const features = [
  { title: "100% Natural", icon: "🌿", description: "Pure, unadulterated ingredients from nature." },
  { title: "Handcrafted Blends", icon: "🛠️", description: "Every spice mix is hand-blended with care." },
  { title: "No Preservatives", icon: "🚫", description: "Zero chemicals. Only authentic flavors." },
  { title: "Trusted by Families", icon: "👪", description: "Loved by thousands of homes across India." },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 px-4 bg-gradient-to-br from-yellow-50 via-white to-red-50 overflow-hidden"
    >
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:20px_20px] h-full w-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
          Why Choose <span className="text-yellow-500">MasalaBrand</span>
        </h3>
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          Our commitment to quality and tradition makes us the top choice for spice lovers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4 animate-bounce">{f.icon}</div>
              <h4 className="text-xl font-bold text-red-700 mb-2">{f.title}</h4>
              <p className="text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
