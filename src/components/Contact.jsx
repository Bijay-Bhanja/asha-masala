const Contact = () => {
  return (
    <section id="contact" className="bg-red-50 py-20 px-4 text-center">
      <h3 className="text-3xl font-bold text-red-700 mb-6">Get in Touch</h3>
      <p className="text-gray-700 mb-8">Have questions or want to stock our products? Reach out!</p>
      <form className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
