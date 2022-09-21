/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />
/// <reference types="vite/client" />

declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const comp: ComponentOptions;
  export default comp;
}
