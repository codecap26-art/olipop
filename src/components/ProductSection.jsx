import React from 'react';

export default function ProductSection({ currentDrink }) {
  return (
    <section className="section section--product" id="product">
      <div className="container">
        <div className="product-grid">
          <div className="product-image-wrapper reveal">
            <img src={currentDrink.ctaImage} alt={`Olipop ${currentDrink.name} Soda`} />
          </div>
          <div className="product-info">
            <span className="section-label reveal">About the Drink</span>
            <h2 className="section-title reveal">
              Better Soda.<br />Better Ingredients.
            </h2>
            <p className="section-desc reveal">
              Olipop was born from a simple idea: soda should taste amazing without the junk.
              We combine classic flavors you grew up loving with functional ingredients that
              support your digestive health. Every can is a celebration of what soda can be —
              bold, nostalgic, and genuinely good for you.
            </p>
            <p className="section-desc reveal" style={{ marginTop: 16 }}>
              Our {currentDrink.name} {currentDrink.subtitle} delivers {currentDrink.description.toLowerCase()}
            </p>
            <div className="product-stats reveal">
              <div className="stat-item">
                <div className="stat-number">9g</div>
                <div className="stat-label">Sugar</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">35</div>
                <div className="stat-label">Calories</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">9g</div>
                <div className="stat-label">Fiber</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
