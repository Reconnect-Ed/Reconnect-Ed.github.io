<template>
  <a
    id="mlh-trust-badge-dark"
    style="
      display: block;
      max-width: 100px;
      min-width: 60px;
      position: fixed;
      right: 50px;
      top: 0;
      width: 10%;
      z-index: 10000;
    "
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
    target="_blank"
    ><img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
      alt="Major League Hacking 2023 Hackathon Season"
      style="width: 100%"
  /></a>

  <a
    id="mlh-trust-badge-light"
    style="
      display: block;
      max-width: 100px;
      min-width: 60px;
      position: fixed;
      right: 50px;
      top: 0;
      width: 10%;
      z-index: 10000;
    "
    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=gray"
    target="_blank"
    ><img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-gray.svg"
      alt="Major League Hacking 2023 Hackathon Season"
      style="width: 100%"
  /></a>
</template>

<style lang="scss">
.dark {
  #mlh-trust-badge-dark {
    display: block !important;
  }
  #mlh-trust-badge-light {
    display: none !important;
  }
}
.light {
  #mlh-trust-badge-dark {
    display: none !important;
  }
  #mlh-trust-badge-light {
    display: block !important;
  }
}
</style>
