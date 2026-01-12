"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const initialModels = [
  {
    name: "ChatGPT",
    type: "Chatbot",
    pricing: "Freemium",
    tags: ["#한국어 우수", "#코딩", "#글쓰기"],
    selected: true,
  },
  {
    name: "Gemini",
    type: "Chatbot",
    pricing: "Freemium",
    tags: ["#Google 연동", "#멀티모달"],
    selected: false,
  },
  {
    name: "Midjourney",
    type: "Image",
    pricing: "Paid",
    tags: ["#고화질", "#이미지 생성"],
    selected: false,
  },
  {
    name: "Wrtn (뤼튼)",
    type: "Chatbot",
    pricing: "Free",
    tags: ["#한국어 특화", "#무료 GPT-4"],
    selected: false,
  },
];

export default function ModelsPage() {
  const router = useRouter();
  const [models, setModels] = useState(initialModels);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState(["Chatbot", "Image", "Writing", "Video"]);
  const [prices, setPrices] = useState(["Free", "Paid", "Freemium"]);

  const toggleModel = (name: string) => {
    setModels(models.map((m) => (m.name === name ? { ...m, selected: !m.selected } : m)));
  };

  const toggleCategory = (category: string) => {
    setCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]));
  };

  const togglePrice = (price: string) => {
    setPrices((prev) => (prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]));
  };

  const filteredModels = models.filter((model) => {
    const matchSearch =
      model.name.toLowerCase().includes(search.toLowerCase()) ||
      model.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = categories.includes(model.type);
    const matchPrice = prices.includes(model.pricing);
    return matchSearch && matchCategory && matchPrice;
  });

  const selectedCount = models.filter((m) => m.selected).length;

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white flex justify-center">
      <div className="w-full max-w-7xl px-6 py-12 space-y-10">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">AI 모델 둘러보기</h1>
            <p className="text-gray-600 dark:text-gray-400">다양한 AI 모델을 탐색하고 비교할 대상을 선택하세요.</p>
          </div>

          <button
            onClick={() => router.push("/compare")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            {selectedCount}개의 AI 모델 비교하기
          </button>
        </div>

        <div className="flex gap-8">
          {/* 필터 */}
          <aside className="w-64 bg-gray-50 dark:bg-neutral-900 text-gray-900 dark:text-white rounded-xl p-5 space-y-6">
            <div className="flex items-center gap-2 font-semibold">🔍 필터</div>

            <div className="space-y-2">
              <p className="font-semibold">카테고리</p>
              {["Chatbot", "Image", "Writing", "Video"].map((c) => (
                <label key={c} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={categories.includes(c)} onChange={() => toggleCategory(c)} />
                  {c}
                </label>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-semibold">요금제</p>
              {["Free", "Paid", "Freemium"].map((p) => (
                <label key={p} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" checked={prices.includes(p)} onChange={() => togglePrice(p)} />
                  {p}
                </label>
              ))}
            </div>
          </aside>

          {/* 메인 */}
          <main className="flex-1 space-y-6">
            {/* 검색 */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="모델 이름, 용도, 카테고리로 검색"
              className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-transparent text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* 카드 목록 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredModels.map((model) => (
                <div
                  key={model.name}
                  className={`rounded-xl p-5 border ${
                    model.selected
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40"
                      : "border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">
                      {model.type}
                    </span>
                    <input
                      type="checkbox"
                      checked={model.selected}
                      onChange={() => toggleModel(model.name)}
                      className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>

                  <h3 className="text-lg font-semibold mt-3">{model.name}</h3>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {model.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-full text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleModel(model.name)}
                    className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold ${
                      model.selected
                        ? "bg-indigo-600 text-white"
                        : "border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {model.selected ? "비교 대상에서 제외" : "비교 대상에 추가"}
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
