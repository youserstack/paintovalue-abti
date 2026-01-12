import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function RecommendPage() {
  return (
    <main>
      <section>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#252432]">목적 기반 추천</h1>
            <p className="text-[#8987a1]">어떤 작업을 하고 싶으신가요? AIGO가 딱 맞는 도구를 찾아드립니다.</p>
          </div>

          <div className="space-y-8">
            {/* 목적 입력 */}
            <div className="space-y-4">
              <Label className="flex items-center gap-2 text-lg font-bold text-[#252432]">목적 및 상황</Label>
              <Textarea
                className="resize-none w-full min-h-[120px] bg-white border border-[#e4eaf8] text-[#252432] placeholder:text-[#8987a1]/50 text-lg p-4 rounded-xl focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none"
                placeholder={`지금 하려는 작업과 현재 상황을 자유롭게 입력해주세요
(예: 스타트업 마케터인데 블로그 글을 자동으로 쓰고 싶어요. 예산은 월 5만원 정도입니다.)`}
              />
            </div>

            {/* 옵션 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">예산</Label>
                <Input
                  className="w-full h-9 rounded-md border border-[#e4eaf8] px-3 py-1 outline-none focus-visible:ring-[3px]"
                  placeholder="예: 월 5만원, 무료"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">팀 규모</Label>
                <Input
                  className="w-full h-9 rounded-md border border-[#e4eaf8] px-3 py-1 outline-none focus-visible:ring-[3px]"
                  placeholder="예: 1인, 5인 미만"
                />
              </div>

              <div className="col-span-1 md:col-span-2 space-y-2">
                <Label className="text-sm font-medium">제약 조건</Label>
                <Input
                  className="w-full h-9 rounded-md border border-[#e4eaf8] px-3 py-1 outline-none focus-visible:ring-[3px]"
                  placeholder="보안, 정책, 언어, 사용 환경 등의 제약이 있다면 입력해주세요"
                />
              </div>
            </div>

            {/* 버튼 */}
            <div className="pt-8">
              <Button
                asChild
                className="w-full h-14 text-lg font-bold bg-[#4e47ff] hover:bg-[#3d36e0] text-white rounded-xl shadow-lg shadow-[#4e47ff]/20 inline-flex items-center justify-center gap-2"
              >
                <Link href={"/recommand/result"}>
                  AI 추천 생성하기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 w-5 h-5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
