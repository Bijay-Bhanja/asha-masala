import HeroImage from "../assets/hero.jpg";

const products = [
  {
    name: "Garam Masala",
    image: HeroImage,
    desc: "A bold, aromatic blend for all Indian curries.",
    price: 150,
  },
  {
    name: "Chaat Masala",
    image: HeroImage,
    desc: "Tangy and spicy – perfect for snacks and fruits.",
    price: 120,
  },
  {
    name: "Sambhar Masala",
    image: HeroImage,
    desc: "South Indian flavor explosion for lentils.",
    price: 130,
  },
  {
    name: "Pav Bhaji Masala",
    image: HeroImage,
    desc: "Mumbai's favorite street food masala.",
    price: 140,
  },
  {
    name: "Biryani Masala",
    image: HeroImage,
    desc: "Rich & spicy blend for authentic biryani.",
    price: 160,
  },
  {
    name: "Kitchen King",
    image: HeroImage,
    desc: "All-in-one magic masala for daily cooking.",
    price: 145,
  },
  {
    name: "Paneer Tikka Masala",
    image: HeroImage,
    desc: "Spice mix for juicy paneer tikkas.",
    price: 135,
  },
  {
    name: "Tea Masala",
    image: HeroImage,
    desc: "Warm blend of spices to elevate your chai.",
    price: 125,
  },
];

const Products = ({ onAddToCart }) => {
  return (
    <section id="products" className="bg-yellow-50 py-16 px-4">
      <h3 className="text-3xl font-bold text-center text-red-700 mb-10">Our Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-cover rounded-md mb-4"
            />
            <h4 className="text-lg font-semibold text-red-700">{product.name}</h4>
            <p className="text-gray-600 text-sm mt-1 flex-grow">{product.desc}</p>
            <p className="mt-2 font-bold text-gray-800">₹{product.price}</p>

            <button
              onClick={() => onAddToCart({ ...product, quantity: 1 })}
              className="mt-4 bg-red-600 text-white text-sm px-4 py-2 rounded hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
