/**
 * Drink variant data for Olipop.
 * Each variant defines everything needed for the hero + CTA sections.
 */

// Build frame filenames for a given folder
const buildFramePaths = (folder, count) => {
  const frames = [];
  for (let i = 0; i < count; i++) {
    const paddedIndex = String(i).padStart(3, '0');
    // Determine delay string: alternates 0.041 / 0.042
    const delay = i % 3 === 0 ? '0.041s' : '0.042s';
    frames.push(`/frames/${folder}/frame_${paddedIndex}_delay-${delay}.webp`);
  }
  return frames;
};

const drinks = [
  {
    id: 'cherry',
    name: 'Cherry',
    subtitle: 'Soda',
    description:
      'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    accentColor: '#dc2626',
    ctaImage: '/images/cherry_cta.png',
    frameCount: 192,
    framePaths: buildFramePaths('CHERRY', 192),
  },
  {
    id: 'grape',
    name: 'Grape',
    subtitle: 'Soda',
    description:
      'A modern functional soda brand inspired by classic flavors but made with better ingredients.',
    accentColor: '#7c3aed',
    ctaImage: '/images/grape_cta.png',
    frameCount: 192,
    framePaths: buildFramePaths('GRAPE', 192),
  },
  {
    id: 'lemon',
    name: 'Lemon',
    subtitle: 'Ginger Soda',
    description:
      'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    accentColor: '#eab308',
    ctaImage: '/images/lemon_cta.png',
    frameCount: 192,
    framePaths: buildFramePaths('LEMON', 192),
  },
];

export default drinks;
