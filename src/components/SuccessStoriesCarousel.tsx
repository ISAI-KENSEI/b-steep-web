"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { successItems } from "@/data/successStories";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default function SuccessStoriesCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <p className="reveal opacity-0 text-gray-400 text-sm tracking-[0.3em] mb-4">
            Success Stories
          </p>
          <h2 className="reveal opacity-0 font-mplus text-3xl md:text-5xl font-black tracking-wide">
            メンバーが作った<br className="md:hidden" />自動化ワークフロー
          </h2>
        </div>
        <div className="reveal opacity-0 hidden md:flex items-center gap-3 mt-6 md:mt-0">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 cursor-pointer"
            aria-label="前のスライドへ"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 cursor-pointer"
            aria-label="次のスライドへ"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="reveal opacity-0 pl-0 md:pl-[calc((100vw-72rem)/2)]">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          spaceBetween={20}
          slidesPerView={1.05}
          speed={600}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".voices-pagination",
            bulletClass: "voices-bullet",
            bulletActiveClass: "voices-bullet-active",
          }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 1.5, spaceBetween: 24 },
            1024: { slidesPerView: 2.2, spaceBetween: 28 },
            1280: { slidesPerView: 2.5, spaceBetween: 28 },
          }}
          className="!overflow-visible"
        >
          {successItems.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="bg-gray-50 rounded-2xl p-6 md:p-7 flex flex-col h-full min-h-[320px] group hover:bg-gray-900 transition-all duration-500 select-none">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-gray-900 text-white rounded-full px-3.5 py-1 text-xs font-medium group-hover:bg-white group-hover:text-gray-900 transition-all duration-500">
                    {item.tag}
                  </span>
                  <span className="font-mplus text-xs font-bold tracking-tight text-gray-300 group-hover:text-gray-600 transition-colors duration-500">
                    {item.number}
                  </span>
                </div>

                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-200 group-hover:bg-gray-800 transition-colors duration-500">
                </div>

                <div className="flex-1">
                  <p className="text-sm leading-6 text-gray-700 group-hover:text-gray-300 transition-colors duration-500 line-clamp-3">
                    {item.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="voices-pagination flex justify-center md:justify-start gap-2 mt-8" />
      </div>
    </div>
  );
}
