import React from 'react';
import { StarIcon } from './Icons';

const REVIEWS = [
  {
    stars: 5,
    text: "I've tried every flavor and Cherry is by far my favorite. It tastes like the cherry soda I grew up drinking but without all the guilt. My gut has never felt better!",
    name: 'Sarah K.',
    title: 'Verified Buyer',
    initials: 'SK',
  },
  {
    stars: 5,
    text: "Finally a soda I can feel good about. The Grape flavor is incredible — it's like Welch's met wellness in the best way possible. My whole family is hooked.",
    name: 'Marcus J.',
    title: 'Health Enthusiast',
    initials: 'MJ',
  },
  {
    stars: 5,
    text: "The Lemon Ginger is my go-to after workouts. Refreshing, not too sweet, and the ginger actually helps settle my stomach. 10/10 would recommend to anyone.",
    name: 'Priya T.',
    title: 'Fitness Coach',
    initials: 'PT',
  },
  {
    stars: 4,
    text: "I was skeptical about a 'healthy soda' but Olipop completely changed my mind. The carbonation is perfect and the prebiotic benefits are a real bonus.",
    name: 'Daniel W.',
    title: 'Verified Buyer',
    initials: 'DW',
  },
  {
    stars: 5,
    text: "Switched from regular soda to Olipop three months ago. My bloating is gone, my energy is up, and I don't miss the old stuff at all. This is the future of soda.",
    name: 'Emily R.',
    title: 'Nutritionist',
    initials: 'ER',
  },
  {
    stars: 5,
    text: "Every guest I've served Olipop to has asked where to buy it. The packaging is gorgeous, the taste is spot-on, and it's a conversation starter at every gathering.",
    name: 'James L.',
    title: 'Food Blogger',
    initials: 'JL',
  },
];

export default function ReviewsSection() {
  return (
    <section className="section section--reviews" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="section-label reveal">Social Proof</span>
          <h2 className="section-title reveal">
            What People Are Saying
          </h2>
          <p className="section-desc reveal">
            Join thousands of happy sippers who've made the switch to functional soda.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div className="review-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="review-stars">
                {Array.from({ length: 5 }, (_, j) => (
                  <span className="review-star" key={j}>
                    <StarIcon filled={j < review.stars} />
                  </span>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div>
                  <div className="review-author-name">{review.name}</div>
                  <div className="review-author-title">{review.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
