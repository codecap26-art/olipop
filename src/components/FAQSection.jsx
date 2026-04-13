import React, { useState } from 'react';
import { PlusIcon } from './Icons';

const FAQ_DATA = [
  {
    q: 'What makes Olipop different from regular soda?',
    a: 'Olipop is a functional soda made with prebiotics, botanicals, and plant fiber. Unlike traditional sodas loaded with sugar and artificial ingredients, each can contains only 2-5g of sugar and 9g of prebiotic fiber to support your digestive health.',
  },
  {
    q: 'How many calories are in each can?',
    a: 'Each can of Olipop contains only 35-45 calories, depending on the flavor. Compare that to 140+ calories in a typical can of regular soda. We use stevia leaf and cassava root syrup for natural sweetness without the calorie count.',
  },
  {
    q: 'Are Olipop sodas vegan and gluten-free?',
    a: 'Yes! All Olipop flavors are vegan, gluten-free, non-GMO, and paleo-friendly. We\'re committed to making our sodas accessible to as many dietary preferences as possible.',
  },
  {
    q: 'What are prebiotics and why are they important?',
    a: 'Prebiotics are types of dietary fiber that feed the beneficial bacteria in your gut. Olipop contains a proprietary blend called OliSmart™ that combines chicory root inulin, nopal cactus, and cassava root fiber to support a healthy microbiome.',
  },
  {
    q: 'Where can I buy Olipop?',
    a: 'Olipop is available at major retailers including Target, Whole Foods, Kroger, Sprouts, and online at our website. You can also subscribe for regular deliveries and save 15% on every order.',
  },
  {
    q: 'How should I store Olipop?',
    a: 'For the best taste experience, we recommend storing Olipop in the refrigerator and enjoying it cold. Unopened cans can be stored at room temperature but taste best chilled. Once opened, consume within 24 hours.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="section section--faq" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div>
            <span className="section-label reveal">Got Questions?</span>
            <h2 className="section-title reveal">
              Frequently<br />Asked Questions
            </h2>
            <p className="section-desc reveal">
              Everything you need to know about Olipop, from ingredients to ordering.
              Can't find your answer? Reach out to our team.
            </p>
          </div>

          <div className="faq-list">
            {FAQ_DATA.map((item, i) => (
              <div
                className={`faq-item reveal ${openIndex === i ? 'open' : ''}`}
                key={i}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <button className="faq-question" onClick={() => toggle(i)}>
                  {item.q}
                  <span className="faq-icon"><PlusIcon /></span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
