/**
 * セクション表示フラグ設定
 *
 * true  = 表示
 * false = 非表示（コードは残ったまま。復活時は true に変えるだけ）
 */
export const sectionVisibility = {
  hero: true,
  worry: true,
  solution: true,
  value: true,
  content: true,
  strength: true,
  /** Success Stories ＋ オフ会ギャラリー */
  voices: false,
  communityVoices: true,
  pricing: true,
  lecturer: true,
  faq: true,
} as const;
