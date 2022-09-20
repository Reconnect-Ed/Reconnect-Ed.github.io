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
        name: 'Bobs Burgers',
        img: 'https://static.wixstatic.com/media/bf437b_7ded045444c541958eb586262212c195.png/v1/fill/w_246,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf437b_7ded045444c541958eb586262212c195.png',
        url: 'https://www.joesburgers.com/',
      },
    ],
  },
  {
    tier: 'Gold',
    size: 'medium',
    items: [
      {
        name: 'Bobs Burgers',
        img: 'https://static.wixstatic.com/media/bf437b_7ded045444c541958eb586262212c195.png/v1/fill/w_246,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf437b_7ded045444c541958eb586262212c195.png',
        url: 'https://www.joesburgers.com/',
      },
      {
        name: 'Bobs Burgers',
        img: 'https://static.wixstatic.com/media/bf437b_7ded045444c541958eb586262212c195.png/v1/fill/w_246,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf437b_7ded045444c541958eb586262212c195.png',
        url: 'https://www.joesburgers.com/',
      },
      {
        name: 'Bobs Burgers',
        img: 'https://static.wixstatic.com/media/bf437b_7ded045444c541958eb586262212c195.png/v1/fill/w_246,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bf437b_7ded045444c541958eb586262212c195.png',
        url: 'https://www.joesburgers.com/',
      },
    ],
  },
];
