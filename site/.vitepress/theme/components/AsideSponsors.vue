<script setup lang="ts">
import { computed } from 'vue';
import { VPDocAsideSponsors } from 'vitepress/theme';
import { sponsors } from '../composables/sponsor';
</script>

<template>
  <VPDocAsideSponsors :data="sponsors" />
</template>
