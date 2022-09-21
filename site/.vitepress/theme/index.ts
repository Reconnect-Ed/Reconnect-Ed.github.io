import { createHead } from '@vueuse/head';
import Theme from 'vitepress/theme';
import { App, h } from 'vue';
import AsideSponsors from './components/AsideSponsors.vue';
import HomeSponsors from './components/HomeSponsors.vue';
import InstagramPlaceholder from './components/InstagramPlaceholder.vue';
import './styles/index.scss';

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    app.provide('InstagramPlaceholder', InstagramPlaceholder);
    app.use(createHead());
  },
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors),
    });
  },
};
