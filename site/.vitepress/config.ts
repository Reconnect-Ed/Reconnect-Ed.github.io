import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Reconnect-Ed Hackathon',
  description:
    'A hackathon based in Juanita High School aiming to spread awareness of mental health, neuro divergency and their respective resources.',
  vue: {
    reactivityTransform: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.jpg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Reconnect-Ed Hackathon' }],
    ['meta', { property: 'og:image', content: '/icon.jpg' }],
    [
      'meta',
      { property: 'og:url', content: 'https://reconnect-ed.github.io/' },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'A hackathon based in Juanita High School aiming to spread awareness of mental health, neuro divergency and their respective resources.',
      },
    ],
  ],
  cleanUrls: 'with-subfolders',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Reconnect-Ed',
      },
      {
        icon: 'discord',
        link: 'https://discord.gg/MvzDn6JSgH',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/reconnected2022/',
      },
    ],

    siteTitle: 'Reconnect-Ed Hackathon',
    logo: '/images/icon.jpg',
    nav: [
      {
        text: 'Preregister',
        link: '/preregister.md',
      },
      {
        text: 'Learn More',
        link: '/learn-more.md',
      },
      {
        text: 'Contact Us',
        link: '/contact.md',
      },
    ],
  },
});
