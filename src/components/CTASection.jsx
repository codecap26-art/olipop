import React from 'react';

export default function CTASection({ drinks }) {
  return (
    <section className="section section--cta" id="contact">
      <div className="container">
        <div className="cta-content">
          <span className="section-label reveal">Ready to Try?</span>
          <h2 className="cta-title reveal">
            Your New Favorite<br />Soda Awaits
          </h2>
          <p className="cta-desc reveal">
            Join the soda revolution. Discover flavors that taste incredible and
            actually support your wellbeing. Free shipping on your first order.
          </p>
          <div className="cta-buttons reveal">
            <a href="#" className="btn btn--primary">Shop Now</a>
            <a href="#" className="btn btn--secondary">Find a Store</a>
          </div>
        </div>

        <div className="cta-images-row reveal">
          {drinks.map((d) => (
            <div className="cta-image-card" key={d.id}>
              <img src={d.ctaImage} alt={`Olipop ${d.name} ${d.subtitle}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
