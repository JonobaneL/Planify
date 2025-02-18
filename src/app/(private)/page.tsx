export default function Home() {
  const mockData = [
    {
      id: "board1",
      short: "B1",
      name: "Board 1",
      projectName: "Project 1",
      taskAmout: 10,
      groupAmount: 2,
    },
    {
      id: "board2",
      short: "B2",
      name: "Board 2",
      projectName: "Project 2",
      taskAmout: 10,
      groupAmount: 2,
    },
    {
      id: "board3",
      short: "B3",
      name: "Board 3",
      projectName: "Project 3",
      taskAmout: 10,
      groupAmount: 2,
    },
    {
      id: "board4",
      short: "B4",
      name: "Board 4",
      projectName: "Project 4",
      taskAmout: 12,
      groupAmount: 3,
    },
    {
      id: "board5",
      short: "B5",
      name: "Board 5",
      projectName: "Project 5",
      taskAmout: 12,
      groupAmount: 3,
    },
    {
      id: "board6",
      short: "B6",
      name: "Board 6",
      projectName: "Project 6",
      taskAmout: 10,
      groupAmount: 2,
    },
    {
      id: "board7",
      short: "B7",
      name: "Board 7",
      projectName: "Project 7",
      taskAmout: 12,
      groupAmount: 3,
    },
    {
      id: "board8",
      short: "B8",
      name: "Board 8",
      projectName: "Project 8",
      taskAmout: 12,
      groupAmount: 3,
    },
    {
      id: "board9",
      short: "B9",
      name: "Board 9",
      projectName: "Project 9",
      taskAmout: 12,
      groupAmount: 3,
    },
  ];
  return (
    <main className="">
      <h2 className="mb-8">
        Hello there! Welcome to Planify, your all-in-one platform for project
        management and team collaboration. Stay organized, stay productive, and
        let&apos;s get to work!
      </h2>
      <div className="flex gap-4 flex-wrap">
        {mockData.map((board) => (
          <div
            key={board.id}
            className="p-4 rounded bg-primary-b-10 w-fit flex gap-6 min-w-60"
          >
            <div>
              <div className="flex items-center gap-2">
                <div className="size-10 rounded bg-primary-b-80 text-white flex items-center justify-center font-medium">
                  {board.short}
                </div>
                <div>
                  <p className="font-medium">{board.name}</p>
                  <p className="text-sm">{board.projectName}</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-2 flex gap-2">
                <p>Groups: {board.groupAmount}</p>
                <p>Tasks: {board.taskAmout}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
