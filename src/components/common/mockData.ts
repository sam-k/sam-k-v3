import type {LinkType} from '../projects/utils';
import type {TagDefinition} from './utils';

// TODO: Fetch from data.
export const MOCK_PROJECTS: Array<{
  title: string;
  description: string;
  icons?: Array<{
    kind: LinkType;
    label?: string;
    link?: string;
  }>;
  tags?: Array<{
    label: string;
    link?: string;
  }>;
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
        label: 'tag 1',
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
        label: 'tag 1',
        link: 'link 1',
      },
      {
        label: 'tag 2',
      },
    ],
  },
];

// TODO: Fetch from data.
export const MOCK_NOTES: Array<{
  title: string;
  date: Date;
  link?: string;
  tags?: Array<{
    label: string;
    link?: string;
  }>;
}> = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: new Date('2024-01-01'),
    link: 'link 1',
    tags: [
      {
        label: 'tag 1',
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
        label: 'tag 1',
        link: 'link 1',
      },
      {
        label: 'tag 2',
      },
    ],
  },
];

// TODO: Fetch from data.
export const MOCK_EXPERIENCES: Array<{
  role: string;
  org: {
    name: string;
    link?: string;
  };
  description: string;
  dateRange: string;
  tags?: TagDefinition[];
}> = [
  {
    role: 'Role 1',
    org: {
      name: 'Organization 1',
      link: 'link 1',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    dateRange: '2024 – Present',
    tags: [
      {
        label: 'tag 1',
        link: 'link 1',
      },
    ],
  },
  {
    role: 'Role 2',
    org: {
      name: 'Organization 2',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dateRange: '2023 – 2024',
    tags: [
      {
        label: 'tag 1',
        link: 'link 1',
      },
      {
        label: 'tag 2',
      },
    ],
  },
];
