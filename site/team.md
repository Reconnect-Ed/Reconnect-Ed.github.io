---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
import { team } from '@theme/composables/team'

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Epic people
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="team"
  />
</VPTeamPage>
