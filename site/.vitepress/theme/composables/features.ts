interface Feature {
  // Show icon on each feature box. Currently, only emojis
  // are supported.
  icon?: string;
  // Title of the feature.
  title: string;
  // Details of the feature.
  details: string;
  // Action button to display in home feature section.
  action?: FeatureAction;
}
interface FeatureAction {
  // Color theme of the button. Defaults to `brand`.
  theme?: 'brand' | 'alt';
  // Label of the button.
  text: string;
  // Destination link of the button.
  link: string;
}

export const features: Feature[] = [
  {
    icon: '🗓️',
    title: 'When?',
    details: 'November 19th to November 20th, 48 hours',
    action: {
      theme: 'brand',
      text: 'Schedule',
      link: '/schedule/day-one.md',
    },
  },
  {
    icon: '🖥️',
    title: 'Where?',
    details: 'Online',
    action: {
      theme: 'brand',
      text: 'Join Discord',
      link: 'https://discord.gg/t3aFdD5t',
    },
  },
];
