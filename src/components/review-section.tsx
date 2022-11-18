import React from "react";

import type { ReviewCardContent } from "./review-card";
import ReviewCard from "./review-card";

const mock: ReviewCardContent[] = [
  {
    id: "1",
    title: "Friendly and responsible team",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
  {
    id: "1",
    title: "Friendly and responsible team",
    body: "It has been an honor to work with these guys. Theyt are an absolutely fantastic team. Every piece of work they’ve completed is flawless. Many users were amazed with the work’s quiality",
    author: {
      name: "Sundar Pichai",
      jobTitle: "CEO of Google",
      avatarURL:
        "https://assets.entrepreneur.com/content/3x2/2000/1623331196-812881-sundar-pichai-4542.jpg",
    },
  },
];

const LandingReviewSection = () => {
  return (
    <div className="flex w-full gap-4">
      {mock.map((review) => (
        <ReviewCard key={`landing_review_card-${review.id}`} {...review} />
      ))}
    </div>
  );
};

export default LandingReviewSection;
