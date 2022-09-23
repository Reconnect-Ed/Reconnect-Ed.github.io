import type { DefaultTheme } from 'vitepress/theme';

export const team: DefaultTheme.TeamMember[] = [
  {
    name: 'Wing Sun Au',
    avatar:
      'https://cdn.discordapp.com/avatars/483704416596131841/59dace7bc6cc6ec50251d02893a52f53.webp?size=1024',
    title: 'Lead',
  },
  {
    name: 'John Doe',
    avatar: 'https://github.com/Reconnect-Ed.png',
    title: 'Member',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    links: [
      {
        link: 'https://github.com/Reconnect-Ed',
        icon: 'github',
      },
    ],
  },
];
