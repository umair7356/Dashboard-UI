const Card = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex items-center gap-4">
      <div className="text-gray-500">{icon}</div>
      <div>
        <h4 className="text-sm">{title}</h4>
        <p className="text-lg font-bold">{value}</p>
        {trend && <span className="text-green-500">{trend}</span>}
        
      </div>
    </div>
  );
};

export default Card;
