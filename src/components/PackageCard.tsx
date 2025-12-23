"use client";

import { features } from "process";

interface Props {
  title: string;
  price: number;
  items: string[];
}

export default function PackageCard({ title, price, items }: Props) {
  return (
    <div
  className="
    bg-white rounded-2xl p-8
    transition-all duration-300 ease-out
    hover:-translate-y-4 hover:shadow-2xl
  "
>
      {/* HEADER */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-[#0b1d39]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Rate As Per Plate
        </p>
      </div>

      {/* PRICE */}
      <div className="py-4 text-center bg-gray-200">
        <span className="text-red-600 text-3xl font-extrabold">
          ₹ {price}
        </span>
        <span className="ml-2 text-sm font-semibold text-gray-700">
          GST Extra
        </span>
      </div>

      {/* CONTENT */}
      <ul className="flex-1 px-6 py-6 space-y-3 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-red-500">▢</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* BUTTON – BOTTOM CENTER */}
      <div className="p-6 flex justify-center">
        <a
          href="tel:+919223397765"
          className="
            bg-[#6ccf9b] text-white
            px-8 py-3 rounded-full
            font-semibold
            hover:bg-[#57b987]
            hover:scale-105
            transition
            shadow-md
          "
        >
          📞 Contact Now
        </a>
      </div>
    </div>
  );
}
