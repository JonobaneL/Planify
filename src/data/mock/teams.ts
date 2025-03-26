export const mockTeams = [
  {
    id: 'team1',
    name: 'First team',
  },
  {
    id: 'team2',
    name: 'Accelerate team',
  },
  {
    id: 'team3',
    name: 'Third team',
  },
];
//temporary type
export type TeamType = (typeof mockTeams)[number];
