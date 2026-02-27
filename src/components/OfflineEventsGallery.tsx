"use client";

import Image from "next/image";
import { offlineEventImages, offlineEventStats } from "@/data/offlineEvents";

export default function OfflineEventsGallery() {
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case "location":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
      case "calendar":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case "beer":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 mt-28">
      <div className="reveal opacity-0 flex flex-col mb-10">
        <p className="text-gray-400 text-sm tracking-[0.3em] mb-3">
          Offline Events
        </p>
        <h3 className="font-mplus text-2xl md:text-4xl font-black tracking-wide mb-4">
          オフ会・勉強会の様子
        </h3>
        <p className="text-sm text-gray-500">
          画面越しでは得られないリアルな交流。仲間と一緒だから、学びが続く。
        </p>
      </div>

      <div className="reveal opacity-0 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 mb-12" style={{ minHeight: "420px" }}>
        {offlineEventImages.map((image, index) => {
          const isMainImage = index === 0;
          
          return (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group ${image.gridClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  isMainImage
                    ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    : index === 3
                    ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    : "(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                }
                quality={85}
                priority={isMainImage}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isMainImage ? 'from-black/60 via-black/10 to-transparent' : 'from-black/50 to-transparent'}`} />
              {isMainImage ? (
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-medium mb-2">
                    {image.label}
                  </span>
                  <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                    オンラインだけでは得られない<br className="hidden md:block" />リアルな交流と学びの場
                  </p>
                </div>
              ) : (
                <div className="absolute bottom-3 left-3">
                  <span className="text-white text-xs font-medium">{image.label}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="reveal opacity-0 grid grid-cols-1 md:grid-cols-3 gap-4">
        {offlineEventStats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center hover:bg-gray-100 transition-colors"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white mb-4">
              {renderIcon(stat.icon)}
            </div>
            <p className="font-mplus text-3xl md:text-4xl font-black mb-1">
              {stat.title}
            </p>
            <p className="text-sm text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
