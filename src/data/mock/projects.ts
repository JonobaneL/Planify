export const mockProjects = [
  {
    id: 'project1',
    name: 'First project',
    description: 'This is the first project',
    view: 'board',
    favorite: true,
    stats: [
      { status: 'Not Started', fill: '#9CA3AF', tasks: 14 },
      { status: 'In Progress', fill: '#DEA761', tasks: 7 },
      { status: 'In Review', fill: '#4C18DC', tasks: 8 },
      { status: 'In QA', fill: '#885A95', tasks: 3 },
      { status: 'Done', fill: '#175A63', tasks: 16 },
    ],
  },
  {
    id: 'project2',
    name: 'Accelerate project',
    description: 'This is the second project',
    view: 'table',
    favorite: false,
    stats: [
      { status: 'Not Started', fill: '#9CA3AF', tasks: 10 },
      { status: 'In Progress', fill: '#DEA761', tasks: 5 },
      { status: 'In Review', fill: '#4C18DC', tasks: 8 },
      { status: 'In QA', fill: '#885A95', tasks: 3 },
      { status: 'Done', fill: '#175A63', tasks: 14 },
    ],
  },
  {
    id: 'project3',
    name: 'Third project',
    description: 'This is the third project',
    view: 'board',
    favorite: true,
    stats: [
      { status: 'Not Started', fill: '#9CA3AF', tasks: 10 },
      { status: 'In Progress', fill: '#DEA761', tasks: 6 },
      { status: 'In Review', fill: '#4C18DC', tasks: 8 },
      { status: 'In QA', fill: '#885A95', tasks: 6 },
      { status: 'Done', fill: '#175A63', tasks: 20 },
    ],
  },
  {
    id: 'project4',
    name: 'Fourth project',
    description: 'This is the fourth project',
    view: 'table',
    favorite: false,
    stats: [
      { status: 'Not Started', fill: '#9CA3AF', tasks: 6 },
      { status: 'In Progress', fill: '#DEA761', tasks: 8 },
      { status: 'In Review', fill: '#4C18DC', tasks: 3 },
      { status: 'In QA', fill: '#885A95', tasks: 5 },
      { status: 'Done', fill: '#175A63', tasks: 9 },
    ],
  },
];
export type ProjectParams = (typeof mockProjects)[number];
