const UserCard: React.FC = () => {
  return (
    <div className="flex cursor-pointer justify-between rounded-2xl border border-gray-100 p-4 transition-shadow hover:shadow">
      <div>
        <p className="text-lg text-gray-800">Hello,</p>
        <h2 className="text-primary">Alex</h2>
      </div>
      <div className="bg-profile flex size-14 items-center justify-center rounded-full bg-auto">
        <p className="font-poppins text-2xl font-semibold text-white">A</p>
      </div>
    </div>
  );
};

export default UserCard;
