export const mockProjects = [
  {
    id: 'project1',
    name: 'E-Commerce Storefront',
    description:
      'A modern online store with dynamic product filtering, cart functionality, and a smooth user experience optimized for all devices.',
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
    name: 'Task Management Dashboard',
    description:
      'A visual productivity tool that allows users to manage tasks through drag-and-drop boards, track progress, and collaborate in real-time.',
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
    name: 'Blogging Platform',
    description:
      'A content management system where users can create, edit, and manage blog posts with support for rich text formatting and custom URLs.',
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
    name: 'Nutrition Product Explorer',
    description:
      'An interactive product catalog focused on sports nutrition, featuring advanced filtering options, featured product carousels, and detailed product views.',
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
