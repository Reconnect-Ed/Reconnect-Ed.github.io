<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme';
import { sponsors } from '../composables/sponsor';
</script>

<template>
	<VPHomeSponsors
		message="This hackathon would not be possible without our wonderful sponsors."
		:data="sponsors"
	/>
</template>
