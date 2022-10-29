<script setup lang="ts">
import { computed } from 'vue';
import { VPDocAsideSponsors } from 'vitepress/theme';
import { sponsors } from '../composables/sponsor';

const data = computed(() =>
  sponsors.map((s) => ({
    size: s.size === 'big' ? 'mini' : 'xmini',
    items: s.items,
  }))
);
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>
