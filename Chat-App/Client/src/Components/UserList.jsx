const UserList = ({ name, image, isOnline }) => {
  return (
    <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
      <img
        src={image}
        alt={name}
        className="h-10 w-10 rounded-full mr-3 object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className={`text-sm ${isOnline ? "text-green-500" : "text-gray-500"}`}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
};

export default UserList;
