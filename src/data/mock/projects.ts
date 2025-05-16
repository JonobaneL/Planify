export const mockProjects = [
  {
    id: 'project1',
    name: 'E-Commerce Storefront',
    description:
      'A modern online store with dynamic product filtering, cart functionality, and a smooth user experience optimized for all devices.',
    view: 'board',
  },
  {
    id: 'project2',
    name: 'Task Management Dashboard',
    description:
      'A visual productivity tool that allows users to manage tasks through drag-and-drop boards, track progress, and collaborate in real-time.',
    view: 'table',
  },
  {
    id: 'project3',
    name: 'Blogging Platform',
    description:
      'A content management system where users can create, edit, and manage blog posts with support for rich text formatting and custom URLs.',
    view: 'board',
    favorite: true,
  },
  {
    id: 'project4',
    name: 'Nutrition Product Explorer',
    description:
      'An interactive product catalog focused on sports nutrition, featuring advanced filtering options, featured product carousels, and detailed product views.',
    view: 'table',
  },
];
export type ProjectParams = (typeof mockProjects)[number];
