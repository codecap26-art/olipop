import React from 'react';

const INGREDIENTS = [
  {
    icon: '🌿',
    name: 'Prebiotics',
    benefit: 'A blend of chicory root inulin, nopal cactus, and cassava root fiber to support a healthy microbiome.',
  },
  {
    icon: '🫚',
    name: 'Botanicals',
    benefit: 'Thoughtfully chosen botanicals like kudzu root, marshmallow root, and calendula flower for added functional benefits.',
  },
  {
    icon: '🍒',
    name: 'Natural Flavors',
    benefit: 'Real fruit juice and natural flavors deliver authentic taste without artificial sweeteners or colors.',
  },
  {
    icon: '🧪',
    name: 'Apple Cider Vinegar',
    benefit: 'A touch of ACV helps support healthy digestion and adds a subtle complexity to each sip.',
  },
  {
    icon: '🍃',
    name: 'Stevia Leaf',
    benefit: 'Plant-based sweetness and cassava root syrup keep sugar low — only 2–5g per can.',
  },
  {
    icon: '💧',
    name: 'Sparkling Water',
    benefit: 'Triple-filtered carbonated water provides the crisp, refreshing fizz you crave from a classic soda.',
  },
];

export default function IngredientsSection() {
  return (
    <section className="section section--ingredients" id="ingredients">
      <div className="container">
        <div className="ingredients-header">
          <span className="section-label reveal">What Goes In</span>
          <h2 className="section-title reveal">
            Ingredients & Benefits
          </h2>
          <p className="section-desc reveal">
            Every ingredient in Olipop is carefully selected for both flavor and function.
            No artificial sweeteners, no synthetic colors — just real ingredients that taste incredible.
          </p>
        </div>

        <div className="ingredients-grid">
          {INGREDIENTS.map((item, i) => (
            <div className="ingredient-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="ingredient-icon">{item.icon}</div>
              <h3 className="ingredient-name">{item.name}</h3>
              <p className="ingredient-benefit">{item.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
