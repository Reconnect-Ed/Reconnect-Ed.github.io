---
layout: home

title: Reconnect-Ed
titleTemplate: 2022 Hackathon

hero:
  name: Reconnect-Ed 2022 Hackathon
  tagline: A hackathon based in Juanita High School aiming to spread awareness of mental health, neuro divergency and their respective resources.
  image:
    src: /icon.jpg
    alt: Reconnect-Ed
  actions:
    - theme: brand
      text: Preregister
      link: /preregister.md
    - theme: alt
      text: Learn More
      link: /about.md
features:
  - icon: 🗓️
    title: When?
    details: October 21st to October 23rd, 36 hours
  - icon: 🏫
    title: Where?
    details: Juanita High School 10601 NE 132nd St, Kirkland, WA 98034
  - title: Box
    details: More info
---

<script setup>
  import { onMounted } from 'vue';
  import { VPHomeSponsors } from 'vitepress/theme';
  import { sponsors } from '@theme/composables/sponsor'

  onMounted(() => {
    document.querySelector('.VPHome .container .items .item:nth-child(2) .details').innerHTML = `
<a href="https://goo.gl/maps/zRJ3WVvejH6qvjnA6" target="_blank">
  Juanita High School<br />10601 NE 132nd St, Kirkland, WA 98034
</a>
`
  });
</script>

<VPHomeSponsors message="This hackathon would not be possible without our wonderful sponsors." :data="sponsors" />
