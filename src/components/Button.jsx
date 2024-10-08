function Button({ name }) {
  return (
    <div className="flex justify-center">
      <button className="px-2 py-3 flex justify-center bg-gray-600 rounded-lg ">
        {name}
      </button>
    </div>
  );
}
export default Button;
