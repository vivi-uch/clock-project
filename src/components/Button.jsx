function Button({ name }) {
  return (
    <div className="flex justify-center">
      <button className="px-2 py-3 flex justify-center bg-gray-600 rounded-lg hover:bg-black hover:border-2 hover:border-gray-600">
        {name}
      </button>
    </div>
  );
}
export default Button;
