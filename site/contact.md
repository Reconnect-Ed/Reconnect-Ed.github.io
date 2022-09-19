<script setup>
  import InstagramPlaceholder from '@theme/components/InstagramPlaceholder.vue';
  import { defineComponent } from 'vue';
  import { useHead } from '@vueuse/head';

  useHead({
    script: [
      {
        async: true,
        defer: true,
        src: 'https://www.instagram.com/embed.js'
      }
    ]
  });
</script>

# Contact Us

- Discord: [https://discord.gg/hgbtWavSDy](https://discord.gg/hgbtWavSDy)
- Email: [reconnected2022@gmail.com](mailto:reconnected2022@gmail.com)

## Other socials

- GitHub: [https://github.com/Reconnect-Ed](https://github.com/Reconnect-Ed)
- Instagram: [https://www.instagram.com/reconnected2022/](https://www.instagram.com/reconnected2022/)

<InstagramPlaceholder />
