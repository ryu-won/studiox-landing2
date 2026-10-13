"use client";

import Link from "next/link";
import type { Influencer } from "@/types/landing/influencer.type";

export default function InfluencerCard({
  influencer,
}: {
  influencer: Influencer;
}) {
  return (
    <Link
      href={`/influencer/${influencer.id}`}
      className="group relative overflow-hidden rounded-2xl bg-Grey-800 transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="aspect-3/4 w-full overflow-hidden">
        <img
          src={influencer.profileImage}
          alt={influencer.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-5 pt-20">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-calSans text-xl lg:text-2xl text-White">
            {influencer.nameEn}
          </span>
          <span className="Body_3_medium text-Grey-200">
            {influencer.name}
          </span>
        </div>
        <p className="Body_3_medium text-Grey-300 mb-3">
          {influencer.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {influencer.tags.map((tag) => (
            <span
              key={tag}
              className="Caption_medium rounded-full bg-White/10 px-2.5 py-1 text-Grey-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
