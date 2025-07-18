const CartModal = ({ cartItems, onClose }) => {
  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  };

  return (
    <div className="fixed top-16 right-4 bg-white shadow-lg rounded-md p-4 z-50 w-80 border max-h-[70vh] overflow-auto">
      <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.price} x {item.qty}
                </p>
              </div>
              <p className="font-semibold text-red-600">₹{item.price * item.qty}</p>
            </li>
          ))}
          <li className="text-right font-bold text-lg mt-4 text-red-700">
            Total: ₹{getTotal()}
          </li>
        </ul>
      )}
      <button onClick={onClose} className="mt-4 text-sm text-gray-500 underline">
        Close
      </button>
    </div>
  );
};

export default CartModal;
