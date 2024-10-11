function Card({ icon, title, text }) {
  return (
    <div className="flex group flex-col gap-4 rounded-lg text-center text-white border-2 border-gray-500 p-4 hover:scale-105">
      <div className="text-4xl">{icon}</div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-gray-500">{text}</p>
      <div className="opacity-0 group-hover:opacity-100 bg-white text-black text-xs rounded-r-lg rounded-tl-lg py-1 px-2 absolute bottom-36 right-0">
        Click Me
      </div>
    </div>
  );
}

export default Card;
