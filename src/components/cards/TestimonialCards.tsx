import { testimonials } from "@/data/testimonials.data";
import React from "react";
import { TestimonialCard } from "@/components/reusabe/client";

const TestimonialCards = () => {
  return (
    <>
      {testimonials.map(({ id, username, feedback, date, time, rating }, i) => (
        <TestimonialCard
          key={id}
          id={id}
          username={username}
          feedback={feedback}
          date={date}
          time={time}
          rating={rating}
        />
      ))}
    </>
  );
};

export default TestimonialCards;
