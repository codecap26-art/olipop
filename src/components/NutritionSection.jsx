import React from 'react';

const NUTRITION_DATA = [
  { label: 'Calories', value: '35', bold: true },
  { label: 'Total Fat', value: '0g' },
  { label: 'Sodium', value: '20mg' },
  { label: 'Total Carbohydrate', value: '16g', bold: true },
  { label: 'Dietary Fiber', value: '9g' },
  { label: 'Total Sugars', value: '2g' },
  { label: 'Incl. Added Sugars', value: '2g' },
  { label: 'Protein', value: '0g' },
  { label: 'Calcium', value: '10mg' },
  { label: 'Potassium', value: '30mg' },
];

export default function NutritionSection() {
  return (
    <section className="section section--nutrition" id="nutrition">
      <div className="container">
        <div className="nutrition-layout">
          <div>
            <span className="section-label reveal">The Facts</span>
            <h2 className="section-title reveal">
              Nutrition That<br />Speaks for Itself
            </h2>
            <p className="section-desc reveal">
              Only 35 calories and 2g of sugar per can. Packed with 9g of prebiotic
              plant fiber to support digestive health. No artificial sweeteners,
              no high fructose corn syrup, no stevia aftertaste. Just clean, functional soda.
            </p>
            <p className="section-desc reveal" style={{ marginTop: 16, fontSize: 14, opacity: 0.5 }}>
              * Percent Daily Values are based on a 2,000 calorie diet.
            </p>
          </div>

          <div className="nutrition-card reveal">
            <div className="nutrition-card-header">
              <div className="nutrition-card-title">Nutrition Facts</div>
              <div className="nutrition-serving">Serving Size 1 Can (355ml)</div>
            </div>
            <div className="nutrition-card-body">
              {NUTRITION_DATA.map((row, i) => (
                <div
                  className={`nutrition-row ${row.bold ? 'nutrition-row--bold' : ''}`}
                  key={i}
                >
                  <span className="nutrition-row-label">{row.label}</span>
                  <span className="nutrition-row-value">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="nutrition-card-footer">
              Not a significant source of saturated fat, trans fat, cholesterol,
              vitamin D, or iron. Percent daily values are based on a 2,000 calorie diet.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
