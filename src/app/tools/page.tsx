"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Tool = {
  id: string;
  name: string;
  category: string;
  tags: string[];
};

const TOOLS: Tool[] = [
  { id: "chatgpt", name: "ChatGPT", category: "Chatbot", tags: ["한국어 우수", "코딩", "글쓰기"] },
  { id: "claude", name: "Claude 3", category: "Chatbot", tags: ["자연스러운 문체", "긴 문맥"] },
  { id: "midjourney", name: "Midjourney", category: "Image", tags: ["고화질", "예술적"] },
  { id: "wrtn", name: "Wrtn (뤼튼)", category: "Chatbot", tags: ["한국어 특화", "무료 GPT-4"] },
  { id: "gemini", name: "Gemini", category: "Chatbot", tags: ["Google 연동", "멀티모달"] },
  { id: "notionai", name: "Notion AI", category: "Writing", tags: ["문서 요약", "노션 연동"] },
];

export default function ToolsPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [prices, setPrices] = useState<string[]>([]);

  const toggle = (arr: string[], v: string, set: (v: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const filtered = useMemo(() => {
    return TOOLS.filter((t) => {
      if (categories.length && !categories.includes(t.category)) return false;
      if (query && !`${t.name} ${t.category} ${t.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase()))
        return false;
      return true;
    });
  }, [query, categories]);

  return (
    <main>
      <section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#252432] mb-2">AI 도구 둘러보기</h1>
            <p className="text-[#8987a1]">다양한 AI 도구를 탐색하고 비교해보세요.</p>
          </div>

          <Button
            disabled={selected.length === 0}
            className="h-9 px-4 py-2 bg-[#4e47ff] hover:bg-[#3d36e0] text-white disabled:opacity-50"
            asChild={selected.length > 0}
          >
            {selected.length > 0 ? (
              <Link href="/compare/new">{selected.length}개 도구 비교하기</Link>
            ) : (
              `${selected.length}개 도구 비교하기`
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 필터 */}
          <div className="hidden lg:block space-y-8">
            <Card className="border-[#e4eaf8] shadow-none">
              <CardContent className="p-6">
                <p className="font-bold text-[#252432] mb-4">필터</p>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold mb-2 text-sm text-[#252432]">카테고리</p>
                    <div className="space-y-2">
                      {["Chatbot", "Image", "Writing", "Video"].map((c) => (
                        <div key={c} className="flex items-center gap-2">
                          <Checkbox
                            id={c}
                            checked={categories.includes(c)}
                            onCheckedChange={() => toggle(categories, c, setCategories)}
                          />
                          <Label htmlFor={c} className="text-sm text-[#8987a1] font-normal cursor-pointer">
                            {c}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 콘텐츠 */}
          <div className="col-span-1 lg:col-span-3">
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8987a1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <Input
                className="pl-12 h-12 w-full border-[#e4eaf8] rounded-xl text-base"
                placeholder="도구 이름, 용도, 카테고리로 검색"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((tool) => {
                const isSelected = selected.includes(tool.id);
                return (
                  <Card key={tool.id} className="border-[#e4eaf8] hover:shadow-lg transition-all shadow-none">
                    <CardHeader className="flex flex-row justify-between items-start space-y-0 pb-2">
                      <div>
                        <Badge
                          variant="outline"
                          className="border-[#e4eaf8] text-[#8987a1] mb-2 font-normal rounded-md"
                        >
                          {tool.category}
                        </Badge>
                        <h3 className="font-bold text-lg text-[#252432]">{tool.name}</h3>
                      </div>
                      <div
                        onClick={() =>
                          setSelected((s) => (s.includes(tool.id) ? s.filter((x) => x !== tool.id) : [...s, tool.id]))
                        }
                        className={`w-6 h-6 rounded-full border cursor-pointer flex items-center justify-center transition-colors ${
                          isSelected ? "border-[#4e47ff] bg-[#4e47ff]" : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="bg-[#f5f8ff] text-[#8987a1] hover:bg-[#f5f8ff]/80 font-normal rounded-md"
                          >
                            #{t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant={isSelected ? "secondary" : "outline"}
                        onClick={() =>
                          setSelected((s) => (s.includes(tool.id) ? s.filter((x) => x !== tool.id) : [...s, tool.id]))
                        }
                        className="w-full h-9"
                      >
                        {isSelected ? "비교 대상 제거" : "비교 대상에 추가"}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
