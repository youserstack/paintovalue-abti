"use client";

import { useState } from "react";

const results: Record<string, string> = {
  ChatGPT: `신제품 런칭 SNS 마케팅 캠페인 아이디어

1. 단계형 런칭 캠페인 (티저 → 공개 → 확산)
목적
신제품에 대한 기대감 형성 → 런칭 인지도 확보 → 초기 유입 및 참여 유도

플랫폼
Instagram, TikTok (필요 시 X, YouTube Shorts 병행)

① 티저 단계 (런칭 7~3일 전)
- 제품을 직접 노출하지 않고 문제 상황만 제시
- 예시: "이런 상황, 불편하다고 느낀 적 있나요?"

② 런칭 공개 (D-day)
- 15~30초 숏폼 영상
- Before / After 구조
- 핵심 베네핏 1가지만 강조

③ 확산 단계 (D+1 ~ D+7)
- 댓글 참여형 질문
- 예: "여러분이라면 언제 사용하고 싶나요?"`,
  Claude: `[Claude 응답 예시]
신제품 런칭을 위한 스토리텔링 중심의 마케팅 전략입니다.

1. 브랜드 페르소나 구축
- 고객과 소통하는 친근한 캐릭터 설정

2. 인스타툰 연재`,
  Gemini: `[Gemini 응답 예시]
데이터 분석에 기반한 타겟팅 광고 및 유튜브 쇼츠 챌린지 제안입니다.`,
};

const getIcon = (name: string) => {
  switch (name) {
    case "ChatGPT":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "Claude":
      return (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "Gemini":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function CompareResultPage() {
  const [activeTab, setActiveTab] = useState("ChatGPT");
  const [selectedEval, setSelectedEval] = useState<string | null>(null);
  const [reason, setReason] = useState("");

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex justify-center">
      <div className="w-full max-w-6xl px-6 py-12 space-y-8">
        {/* 제목 */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">비교 결과</h1>
          <p className="text-gray-600 dark:text-gray-400">같은 조건에서 결과를 비교해보세요.</p>
        </div>

        {/* 프롬프트 요약 */}
        <div className="bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-xl p-5 space-y-1">
          <p className="text-yellow-800 dark:text-yellow-300 font-semibold">
            프롬프트: 신제품 런칭을 위한 SNS 마케팅 캠페인 아이디어를 제시해주세요
          </p>
          <p className="text-sm text-yellow-700 dark:text-yellow-200">
            언어: 한국어 · 사용 플랜: 유료 기본 · 포맷: general
          </p>
        </div>

        {/* 탭 */}
        <div className="flex gap-3">
          {["ChatGPT", "Claude", "Gemini"].map((ai, idx) => (
            <button
              key={ai}
              onClick={() => setActiveTab(ai)}
              className={`px-4 py-2 rounded-lg border flex items-center gap-2 ${
                activeTab === ai
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
              }`}
            >
              {getIcon(ai)}
              {ai}
            </button>
          ))}
        </div>

        {/* 결과 카드 */}
        <section className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 space-y-4 overflow-y-auto max-h-[420px]">
          <h2 className="font-semibold text-lg">{activeTab} 결과</h2>

          <div className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {results[activeTab]}
          </div>
        </section>

        {/* 응답 시간 */}
        <div className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-5">
          <h3 className="font-semibold mb-3">응답 시간 비교</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>① ChatGPT — 1.83초</li>
            <li>② Claude — 2.48초</li>
            <li>③ Gemini — 4.76초</li>
          </ul>
        </div>

        {/* 비교 평가 */}
        <section className="bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-lg">비교 평가</h3>

          <div className="flex gap-3">
            {["ChatGPT", "Claude", "Gemini"].map((ai) => (
              <button
                key={ai}
                onClick={() => setSelectedEval(ai)}
                className={`px-4 py-2 border rounded-lg flex items-center gap-2 transition ${
                  selectedEval === ai
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-gray-200 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                }`}
              >
                {getIcon(ai)}
                {ai}
              </button>
            ))}
          </div>

          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="가장 마음에 드는 답변을 선택하고 이유를 작성하세요."
            className="w-full min-h-[120px] bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 resize-none"
          />

          <button
            onClick={() => alert("평가가 제출되었습니다.")}
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-lg font-semibold self-end text-white"
          >
            제출하기
          </button>
        </section>
      </div>
    </div>
  );
}
