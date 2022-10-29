export interface Sponsors {
  tier: string;
  size?: 'medium' | 'big';
  items: Sponsor[];
}
export interface Sponsor {
  name: string;
  img: string;
  url: string;
}

export const sponsors: Sponsors[] = [
  {
    tier: 'Platinum',
    size: 'big',
    items: [
      {
        name: 'Major League Hacking',
        img: '/mlh.svg',
        url: 'https://mlh.io/',
      },
      {
        name: 'Youth Eastside Services',
        img: '/yes.png',
        url: 'https://www.youtheastsideservices.org/',
      },
      {
        name: 'Stand Out Stickers',
        img: '/stand-out-stickers-logo.png',
        url: 'https://hackp.ac/mlh-standoutstickers-hackathons',
      },
    ],
  },
];
