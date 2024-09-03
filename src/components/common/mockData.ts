import type {LinkType} from '../projects/utils';
import type {LinkInfo} from './utils';

// TODO: Fetch from data.
export const MOCK_PROJECTS: Array<{
  title: string;
  description: string;
  icons?: Array<{
    kind: LinkType;
    label?: string;
    link?: string;
  }>;
  tags?: LinkInfo[];
}> = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icons: [
      {
        kind: 'github',
        label: 'label 1',
        link: 'link 1',
      },
    ],
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icons: [
      {
        kind: 'deploy',
        label: 'label 1',
        link: 'link 1',
      },
      {
        kind: 'github',
        label: 'label 2',
      },
    ],
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
