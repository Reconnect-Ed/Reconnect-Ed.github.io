import Theme from 'vitepress/theme';
import { h } from 'vue';
import AsideSponsors from './components/AsideSponsors.vue';
import HomeFeatures from './components/HomeFeatures.vue';
import HomeSponsors from './components/HomeSponsors.vue';
import MLHBadge from './components/MLHBadge.vue';
import './styles/index.scss';

export default {
  ...Theme,
  Layout() {
    // insert sponsors
    return h(Theme.Layout, null, {
      'home-features-before': () => h(HomeFeatures),
      'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors),
      'layout-top': () => h(MLHBadge),
    });
  },
};
