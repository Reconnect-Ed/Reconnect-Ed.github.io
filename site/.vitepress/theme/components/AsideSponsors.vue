<script setup lang="ts">
import { computed } from 'vue';
import { VPDocAsideSponsors } from 'vitepress/theme';
import { sponsors } from '../composables/sponsor';

const data = computed(() => sponsors);
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>
