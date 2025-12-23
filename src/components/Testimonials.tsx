"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Deepak Khedekar",
    rating: 5,
    text:
      "Dear Vishalji, It is my pleasure to write and thank you for the excellent catering services you provided for our meeting. The food arrived on time and was delicious. I so appreciate all the care and attention, and I look forward to a long working relationship.",
  },
  {
    name: "Shri Manoj Kamath",
    rating: 5,
    text:
      "We, Smt. & Shri Kamath hereby thank you and your team from our and Shahu family for your good arrangements, co-operation, and services rendered by serving good quality and delicious snacks, food during the occasion of my daughter marriage held on 9th March 2019.",
  },
  {
    name: "Swapnil Pabrekar",
    rating: 4,
    text:
      "I had 2 vivid experiences of Gurukrupa Caterers. Mr. Vishal Gosavi is very soft spoken person. Does what he commits. No false commitments. Good food, desserts like Sitafal Basundi & Ghevar is to die for.",
  },
  {
    name: "Ravindra Janala",
    rating: 4,
    text:
      "Hello Vishal, You did everything I needed them to do and more. I loved the fact that they took my budget and made it work great.",
  },
  {
    name: "Client Review",
    rating: 5,
    text:
      "Excellent food quality, professional service and on-time delivery. Highly recommended for all kinds of events.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const CARD_WIDTH = 380;
  const MAX_STEP = 1;

  /* AUTO SCROLL */
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        const next = prev >= MAX_STEP ? 0 : prev + 1;
        scrollRef.current?.scrollTo({
          left: next * CARD_WIDTH,
          behavior: "smooth",
        });
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* MANUAL SCROLL SYNC */
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const newStep = Math.round(scrollRef.current.scrollLeft / CARD_WIDTH);
    setStep(newStep);
  };

  /* POINTER DRAG */
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const walk = startX.current - e.clientX;
    scrollRef.current!.scrollLeft = scrollLeft.current + walk;
  };

  const onPointerUp = () => setIsDragging(false);

  /* CLICK INDICATOR */
  const goToStep = (index: number) => {
    setStep(index);
    scrollRef.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-6 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-red-500 text-center font-semibold mb-3">
          Testimonials Client
        </p>

        <h2 className="text-4xl font-extrabold text-[#0b1d39] text-center mb-16">
          They get satisfied and give <br /> best feedback
        </h2>

        {/* SCROLLER */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="flex gap-8 overflow-x-scroll scroll-smooth cursor-grab active:cursor-grabbing pb-10"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="min-w-[360px] max-w-[360px] h-[340px] bg-[#f5f5f5] rounded-2xl p-8 relative flex flex-col justify-between"
            >
              {/* QUOTE */}
              {/* RED BADGE – EXACT AS SCREENSHOT */}
{/* RED BADGE – CENTERED & BIGGER QUOTE */}
<div className="absolute top-0 right-0 w-[70px] h-[70px] overflow-hidden">
  <div className="absolute top-0 right-0 w-[140px] h-[140px] bg-red-500 rounded-full -translate-y-[70px] translate-x-[70px] flex items-center justify-center">
    <span className="text-white text-[60px] font-serif leading-none translate-x-[-25px] translate-y-[40px]">
      &#8221;
    </span>
  </div>
</div>



              <div>
                <h4 className="font-bold text-lg text-[#0b1d39] mb-3">
                  {item.name}
                </h4>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>
                      {j < item.rating ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CUSTOM INDICATOR (EXACT LIKE SCREENSHOT) */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {[0, 1].map((i) => (
            <span
              key={i}
              onClick={() => goToStep(i)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                step === i
                  ? "w-8 bg-[#0b1d39]"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}




