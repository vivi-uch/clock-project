function Card({ icon, title, text }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg text-center text-white border-2 border-gray-500 p-4 hover:scale-105">
      <div className="text-4xl">{icon}</div>
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-gray-500">{text}</p>
    </div>
  );
}

export default Card;
