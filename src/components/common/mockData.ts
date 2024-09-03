import type {LinkInfo} from './utils';

// TODO: Fetch from data.
export const MOCK_NOTES: Array<{
  title: string;
  date: Date;
  link?: string;
  tags?: LinkInfo[];
}> = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: new Date('2024-01-01'),
    link: 'link 1',
    tags: [
      {
        display: 'tag 1',
        link: 'link 1',
      },
    ],
  },
  {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    date: new Date('2023-01-01'),
    link: 'link 2',
    tags: [
      {
        display: 'tag 1',
        link: 'link 1',
      },
      {
        display: 'tag 2',
      },
    ],
  },
];
