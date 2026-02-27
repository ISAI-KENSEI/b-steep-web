export interface OfflineEventImage {
  src: string;
  alt: string;
  label?: string;
  gridClass: string;
}

export const offlineEventImages: OfflineEventImage[] = [
  {
    src: "/images/offline-event.jpg",
    alt: "トモラボ オフ会の様子",
    label: "オフ会の様子",
    gridClass: "col-span-2 row-span-2",
  },
  {
    src: "/images/osaka-presentation.jpg",
    alt: "大阪 プレゼンテーション",
    label: "勉強会",
    gridClass: "",
  },
  {
    src: "/images/osaka-group.jpg",
    alt: "大阪オフ会 集合写真",
    label: "大阪オフ会",
    gridClass: "",
  },
  {
    src: "/images/osaka-offkai-dinner.jpg",
    alt: "大阪オフ会 懇親会",
    label: "懇親会の様子",
    gridClass: "col-span-2",
  },
];

export interface OfflineEventStat {
  icon: string;
  title: string;
  description: string;
}

export const offlineEventStats: OfflineEventStat[] = [
  {
    icon: "location",
    title: "全国開催",
    description: "東京・大阪を中心に全国で",
  },
  {
    icon: "calendar",
    title: "定期開催",
    description: "ハンズオン勉強会",
  },
  {
    icon: "beer",
    title: "懇親会あり",
    description: "学びの後は交流を深める",
  },
];
