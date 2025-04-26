const Schedule: React.FC = () => {
  return (
    <div className="space-y-2 rounded-2xl border border-gray-100 py-2 pt-4 transition-shadow hover:shadow">
      <div className="flex items-center justify-between px-4">
        <h4 className="font-semibold text-primary">Schedule</h4>
        <p className="text-sm text-gray-600">10 April</p>
      </div>
      {/* <div>
    <p className="text-sm text-gray-600">
      You don&apos;t have any events today
    </p>
  </div> */}
      <div>
        <div className="mx-2 cursor-pointer space-y-1 rounded-xl p-2 transition-colors hover:bg-[hsl(220,60%,97%)]">
          <p className="font-medium text-gray-800">Daily meeting</p>
          <p className="text-sm font-medium text-gray-500">11:00am - 11:30am</p>
        </div>
        <div className="mx-2 cursor-pointer space-y-1 rounded-xl p-2 transition-colors hover:bg-[hsl(220,60%,97%)]">
          <p className="font-medium text-gray-800">Quarterly report</p>
          <p className="text-sm font-medium text-gray-500">14:00pm - 15:30pm</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
