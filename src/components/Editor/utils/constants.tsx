import { LuCodeXml, LuListChecks, LuTable } from 'react-icons/lu';

export const additionalControls = [
  {
    icon: <LuListChecks size={16} />,
    title: 'Checklist',
  },
  {
    icon: <LuTable size={16} />,
    title: 'Table',
  },
  {
    icon: <LuCodeXml size={16} />,
    title: 'Code block',
  },
];

export const highlightColors = [
  '#e6b8af',
  '#f5cbcc',
  '#fce5cd',
  '#fff2cc',
  '#d9ead3',
  '#d0dfe2',
  '#c9daf8',
  '#d0e1f3',
  '#d9d2e9',
  '#ead1dc',
];

export const textControls = [
  {
    label: 'Normal Text',
    value: 'p',
  },
  {
    label: 'Heading 1',
    value: '1',
  },
  {
    label: 'Heading 2',
    value: '2',
  },
  {
    label: 'Heading 3',
    value: '3',
  },
];
