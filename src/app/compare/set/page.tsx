"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ComparePage() {
  const router = useRouter();
  const [tools, setTools] = useState(["ChatGPT", "Claude", "Gemini"]);
  const [language, setLanguage] = useState("한국어");
  const [plan, setPlan] = useState("유료 기본");
  const [format, setFormat] = useState("일반 응답");
  const [prompt, setPrompt] = useState("");

  const removeTool = (tool: string) => {
    setTools(tools.filter((t) => t !== tool));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex justify-center">
      <div className="w-full max-w-5xl px-6 py-12 space-y-8">
        {/* 제목 */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">비교 설정</h1>
          <p className="text-gray-600 dark:text-gray-400">
            선택한 AI 도구로 동일한 프롬프트를 실행하고 결과를 비교합니다
          </p>
        </div>

        {/* 비교 대상 */}
        <section className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 space-y-4">
          <h2 className="font-semibold text-lg">비교 대상</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{tools.length}개의 AI 도구가 선택되었습니다.</p>

          <div className="flex gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="flex items-center gap-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-transparent px-4 py-2 rounded-full text-sm"
              >
                {tool}
                <button
                  onClick={() => removeTool(tool)}
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </section>

        {/* 비교 조건 */}
        <section className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 space-y-6">
          <h2 className="font-semibold text-lg">비교 조건</h2>

          {/* 언어 */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">언어</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-2"
            >
              <option>한국어</option>
              <option>English</option>
            </select>
          </div>

          {/* 사용 플랜 */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">사용 플랜</label>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-2"
            >
              <option>유료 기본</option>
              <option>무료</option>
            </select>
          </div>

          {/* 출력 포맷 */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">출력 포맷</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["일반 응답", "불릿 포인트", "표", "코드", "에세이"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={`border rounded-lg px-4 py-3 text-sm transition ${
                    format === f
                      ? "bg-indigo-600 border-indigo-600 text-white"
                      : "bg-white dark:bg-transparent border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* 프롬프트 */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 dark:text-gray-400">프롬프트 *</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="AI에게 물어볼 내용을 입력하세요"
              className="w-full min-h-[140px] bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-lg px-4 py-3 resize-none"
            />
            <p className="text-xs text-gray-500">동일한 프롬프트가 모든 AI에 전송됩니다</p>
          </div>
        </section>

        {/* 비교 팁 */}
        <section className="bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-xl p-5 space-y-2">
          <h3 className="font-semibold text-yellow-700 dark:text-yellow-400">⚡ 비교 팁</h3>
          <ul className="text-sm text-yellow-600 dark:text-yellow-200 list-disc pl-5 space-y-1">
            <li>구체적인 프롬프트가 더 명확한 비교 결과를 만듭니다</li>
            <li>동일한 출력 포맷을 지정하면 결과 비교가 쉬워집니다</li>
            <li>2~4개의 도구를 비교하는 것이 가장 효과적입니다</li>
          </ul>
        </section>

        {/* 하단 바 */}
        <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl flex items-center justify-between text-white">
          <div>
            <p className="font-semibold">설정 완료</p>
            <p className="text-xs text-indigo-200">{tools.length}개 도구로 비교를 시작할 준비가 되었습니다</p>
          </div>
          <button
            onClick={() => router.push("/compare/result")}
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            ▶ 비교 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
