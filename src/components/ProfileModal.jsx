const ProfileModal = ({ onClose }) => {
  return (
    <div className="fixed top-16 right-4 bg-white shadow-lg rounded-md p-4 z-50 w-60 border">
      <h3 className="text-lg font-semibold mb-2">Welcome!</h3>
      <button className="w-full py-2 bg-red-600 text-white rounded mb-2 hover:bg-red-700">
        Login
      </button>
      <button className="w-full py-2 border border-red-600 text-red-600 rounded hover:bg-red-50">
        Sign Up
      </button>
      <button onClick={onClose} className="mt-2 text-sm text-gray-500 underline">
        Close
      </button>
    </div>
  );
};

export default ProfileModal;
