"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CompareSetupPage() {
  const [tools, setTools] = useState(["ChatGPT", "Claude 3", "Wrtn"]);

  const removeTool = (name: string) => {
    setTools((prev) => prev.filter((t) => t !== name));
  };

  return (
    <main>
      <section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#252432] mb-8 text-center">비교 조건 설정</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left */}
            <div className="md:col-span-2 space-y-8">
              {/* Prompt */}
              <Card className="border-[#e4eaf8] shadow-none">
                <CardContent className="p-6">
                  <div className="mb-4 space-y-2">
                    <Label className="text-lg font-bold text-[#252432] block">비교에 사용할 프롬프트</Label>
                    <p className="text-sm text-[#8987a1]">모든 도구에 동일한 조건으로 적용됩니다.</p>
                  </div>
                  <Textarea
                    className="w-full min-h-[200px] bg-[#f5f8ff] border-0 resize-none text-lg p-4 focus-visible:ring-[3px]"
                    placeholder="예: '친환경 마케팅 캠페인 아이디어 5가지를 제안해줘. 타겟은 20대 대학생이야.'"
                  />
                </CardContent>
              </Card>

              {/* Conditions */}
              <Card className="border-[#e4eaf8] shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#252432] mb-4">비교 조건</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <SelectField label="결과 언어" defaultValue="korean">
                      <SelectItem value="korean">한국어</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectField>
                    <SelectField label="출력 형식" defaultValue="text">
                      <SelectItem value="text">자유 텍스트</SelectItem>
                      <SelectItem value="markdown">Markdown</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                    </SelectField>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right */}
            <div className="md:col-span-1">
              <Card className="border-[#e4eaf8] shadow-none sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#252432] mb-4">비교할 도구 ({tools.length})</h3>

                  <div className="space-y-3 mb-6">
                    {tools.map((tool) => (
                      <div key={tool} className="flex justify-between items-center p-3 bg-[#f5f8ff] rounded-lg">
                        <span className="font-medium text-[#252432]">{tool}</span>
                        <button onClick={() => removeTool(tool)} className="text-[#8987a1] hover:text-red-500">
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full h-12 bg-[#4e47ff] hover:bg-[#3d36e0] text-white font-bold text-lg shadow-lg"
                  >
                    <Link href="/compare/new/123">바로 비교하기</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SelectField({
  label,
  defaultValue,
  children,
}: {
  label: string;
  defaultValue: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-full bg-[#f5f8ff] border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
}
