import Theme from 'vitepress/theme';
import { App } from 'vue';
// @ts-ignore
import InstagramPlaceholder from './components/InstagramPlaceholder.vue';
import './styles/index.scss';

export default {
  ...Theme,
  enhanceApp({ app }: { app: App }) {
    app.provide('InstagramPlaceholder', InstagramPlaceholder);
  },
};
