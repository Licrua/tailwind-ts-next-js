export type FooterItem = {
  id: number;
  title: string;
  list: string[];
};

export const footerData: FooterItem[] = [
  {
    id: 1,
    title: 'Services',
    list: [
      'Strategy Design',
      'Product Design',
      'Content Strategy',
      'Brand Strategy',
      'Development',
    ],
  },
  {
    id: 2,
    title: 'Help And Advice',
    list: ['How it works', 'Contact Support', 'Privacy Policy', 'FAQ'],
  },
  {
    id: 3,
    title: 'Company',
    list: ['About', 'Blog', 'Contact', 'Jobs'],
  },
];
