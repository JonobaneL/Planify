export const PASSWORD_STEPS = [
  {
    key: 'letter',
    rejex: /^(?=.*[a-z])(?=.*[A-Z])/,
    label: 'At least one uppper and lower case letter',
  },

  {
    key: 'number',
    rejex: /\d/,
    label: 'At least one number',
  },
  {
    key: 'character',
    rejex: /[@$!%*?&]/,
    label: 'At least one special character (@$!%*?&)',
  },
];
