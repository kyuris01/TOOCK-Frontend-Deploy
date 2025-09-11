"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

/**
 * Animated promo/banner component for the TOOCK AI interview service.
 * - Adjusted colors to match the main dashboard theme (blue-centric, clean, modern).
 */
export default function ToockPromo({ className = "", onStart }: { className?: string; onStart?: () => void }) {
  const prefersReducedMotion = useReducedMotion();

  const floatVariants = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: prefersReducedMotion ? 0 : [0, -6, 0],
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.4 : 4,
        repeat: prefersReducedMotion ? 0 : Infinity,
        ease: "easeInOut",
      },
    },
  } as const;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      aria-label="TOOCK AI 면접 홍보"
      className={`relative overflow-hidden rounded-2xl border bg-blue-950 border-blue-200/70 dark:border-blue-800/70 bg-gradient-to-br from-blue-50/90 to-white/80 dark:from-blue-900/60 dark:to-blue-950/40 backdrop-blur-xl p-6 sm:p-8 shadow-[0_12px_40px_rgba(2,8,23,0.08)] ${className}`}
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Pill */}
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-200/70 dark:border-blue-700/70 bg-white/80 dark:bg-blue-950/60 px-3 py-1 text-[11px] sm:text-xs text-blue-700 dark:text-blue-200">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" aria-hidden />
          <span>AI Interview Service</span>
        </div>

        {/* Headline (required copy) */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 dark:from-blue-300 dark:via-sky-300 dark:to-indigo-300">
            AI 면접 서비스 TOOCK을 통해
            <br /> 나의 면접 실력을 키우세요!
          </span>
        </h2>

        {/* Sub copy */}
        <p className="text-sm sm:text-base text-blue-700 dark:text-blue-200 max-w-2xl">
          예상 질문 연습, 음성 답변 녹음, 자동 피드백까지 한 번에 — 인터랙티브한 모의 면접으로 실전 감각을 끌어올리세요.
        </p>

        {/* CTAs */}
        {/* <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-blue-200 dark:border-blue-700 bg-blue-600 text-white dark:bg-blue-400 dark:text-blue-950 shadow hover:bg-blue-700 dark:hover:bg-blue-300 transition"
          >
            지금 시작하기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <a
            href="#learn-more"
            className="text-sm font-medium text-blue-700 dark:text-blue-200 underline underline-offset-4 hover:no-underline"
          >
            자세히 보기
          </a>
        </div> */}
      </div>

      {/* Floating accent blobs (subtle, respects reduced motion) */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-blue-400/30 to-sky-400/30 blur-2xl"
        aria-hidden
      />
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: prefersReducedMotion ? 0 : 1.1 }}
        className="pointer-events-none absolute -left-10 -bottom-12 h-44 w-44 rounded-full bg-gradient-to-tr from-sky-400/25 to-indigo-400/25 blur-3xl"
        aria-hidden
      />
    </motion.section>
  );
}
