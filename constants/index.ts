interface ITabItems {
  label: string;
  value: string;
}

interface INavLinks {
  name: string;
  route: string;
}

export const tabItems: ITabItems[] = [
  {
    label: 'Recent',
    value: 'Recent',
  },
  {
    label: 'Suggested',
    value: 'Suggested',
  },
];

export const navLinks: INavLinks[] = [
  { name: 'Home', route: '/' },
  { name: 'Find Salaries', route: '/salaries' },
];
