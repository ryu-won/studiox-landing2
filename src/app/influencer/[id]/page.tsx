"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { influencers } from "@/constants/landing/influencers";
import { BackArrow } from "@/assets/icons";

export default function InfluencerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const influencer = influencers.find((inf) => inf.id === id);

  if (!influencer) {
    return (
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center py-40">
          <p className="Subhead_1_semibold text-Grey-300 mb-6">
            인플루언서를 찾을 수 없습니다.
          </p>
          <Link
            href="/influencer"
            className="Body_2_semibold text-Red-400 hover:underline"
          >
            목록으로 돌아가기
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="px-4 sm:px-6 lg:px-8 2xl:px-[6.12rem] pb-24">
        {/* Back button */}
        <Link
          href="/influencer"
          className="Body_2_medium text-Grey-300 hover:text-White inline-flex items-center gap-1 pt-6 pb-8 transition-colors"
        >
          <BackArrow className="w-5 h-5" />
          Back to Influencers
        </Link>

        {/* Hero section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
          {/* Profile image */}
          <div className="w-full lg:w-[28rem] shrink-0">
            <div className="aspect-3/4 w-full overflow-hidden rounded-2xl">
              <img
                src={influencer.profileImage}
                alt={influencer.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Profile info */}
          <div className="flex flex-col justify-center">
            <div className="Caption_semibold rounded-full bg-Red-400/10 text-Red-400 px-3 py-1 w-fit mb-4">
              {influencer.category}
            </div>
            <h1 className="font-calSans text-[2rem] lg:text-[3rem] mb-1">
              {influencer.nameEn}
            </h1>
            <p className="Subhead_2_medium text-Grey-300 mb-6">
              {influencer.name} · {influencer.tagline}
            </p>

            {/* Stats */}
            <div className="flex gap-4 mb-8">
              {[
                { label: "Followers", value: influencer.stats.followers },
                { label: "Contents", value: influencer.stats.contents },
                { label: "Campaigns", value: influencer.stats.campaigns },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 rounded-xl bg-Grey-800 px-5 py-4 text-center"
                >
                  <div className="font-calSans text-xl lg:text-2xl mb-1">
                    {stat.value}
                  </div>
                  <div className="Caption_medium text-Grey-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="Body_1_medium text-Grey-200 leading-relaxed mb-8">
              {influencer.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {influencer.tags.map((tag) => (
                <span
                  key={tag}
                  className="Body_3_medium rounded-full bg-White/5 px-4 py-2 text-Grey-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}?subject=AI Influencer 협업 문의 - ${influencer.nameEn}`}
                className="inline-block rounded-[2.25rem] bg-linear-to-b from-[#F1F4F8]/50 to-[#1D2025]/50 p-px"
              >
                <div className="Body_2_semibold rounded-[2.25rem] bg-[rgb(23,24,27)] px-8 py-3 text-White transition-colors duration-300 hover:bg-[rgb(33,34,37)]">
                  협업 문의하기
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="font-calSans text-xl lg:text-[1.75rem] mb-6">
            Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {influencer.gallery.map((url, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={url}
                  alt={`${influencer.name} gallery ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
