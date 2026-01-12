import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RecommendResultPage() {
  return (
    <main>
      <section className="px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-[#252432] mb-4">추천 결과</h1>
          <p className="text-[#8987a1]">입력하신 조건에 가장 적합한 AI 도구를 찾았습니다.</p>
        </div>

        {/* 조건 요약 */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#252432] mb-4">추천에 사용된 조건 요약</h2>
          <Card className="border-[#e4eaf8] shadow-none">
            <CardContent className="p-6 flex flex-wrap gap-4 items-center">
              <Summary label="목적" value="마케팅 문구 작성, 블로그 포스팅" />
              <Separator orientation="vertical" className="h-10 bg-[#e4eaf8]" />
              <Summary label="예산" value="월 5만원 이하" />
              <Separator orientation="vertical" className="h-10 bg-[#e4eaf8]" />
              <Summary label="제약조건" value="한국어 품질 중요" />
            </CardContent>
          </Card>
        </section>

        {/* 추천 */}
        <section className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#252432] mb-6">AIGO의 추천</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Best Choice */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#4e47ff]">Best Choice</h3>

              <Card
                className="border-[#2b2b2b] rounded-[10px] p-6 text-white h-full relative overflow-hidden flex flex-col shadow-none"
                style={{
                  backgroundImage: "linear-gradient(124.672deg, rgb(28,28,28) 0%, rgb(5,5,5) 96.806%)",
                }}
              >
                <div className="absolute top-0 right-0 p-4">
                  <Badge className="bg-[#4e47ff] hover:bg-[#4e47ff] text-white border-0">강력 추천</Badge>
                </div>

                <div className="mb-6">
                  <h4 className="text-2xl font-bold mb-2">ChatGPT Plus (GPT-4)</h4>
                  <p className="text-gray-400">입력한 목적과 조건에 가장 잘 맞는 올인원 도구입니다.</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <Feature>한국어 맥락 이해도가 가장 높음</Feature>
                  <Feature>마케팅 문구부터 긴 글쓰기까지 다목적 활용 가능</Feature>
                  <Feature>월 $20 (약 27,000원)으로 예산 내 충족</Feature>
                </ul>

                <div className="mt-auto">
                  <Button className="w-full bg-white text-[#252432] hover:bg-gray-100 font-bold h-9" size="sm">
                    이 도구로 비교 시작하기
                  </Button>
                </div>
              </Card>
            </div>

            {/* 추천 조합 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#252432]">추천 조합</h3>

              <Card className="border border-[#e4eaf8] bg-white rounded-[10px] p-6 h-full flex flex-col shadow-none">
                <div className="mb-4">
                  <h4 className="text-xl font-bold mb-1 text-[#252432]">전문성 강화 조합</h4>
                  <p className="text-[#8987a1]">아이디어 발상과 글 다듬기를 분리하여 품질을 높입니다.</p>
                </div>

                <div className="flex-1 space-y-6">
                  <Step num={1} title="Claude 3" desc="아이디어 정리 및 구조화 (자연스러운 한국어)" />
                  <div className="flex justify-center text-[#8987a1]">↓</div>
                  <Step num={2} title="Wrtn (뤼튼)" desc="초안 작성 및 SEO 최적화 (무료 GPT-4 활용)" />
                </div>

                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="w-full border-[#4e47ff] text-[#4e47ff] hover:bg-[#4e47ff]/5 hover:text-[#4e47ff] font-bold h-9"
                    size="sm"
                  >
                    이 조합으로 비교 시작하기
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 설명 */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-[#252432] mb-4">이렇게 추천했어요</h2>
          <Card className="border-[#e4eaf8] shadow-none">
            <CardContent className="p-6 text-[#252432]">
              <p className="leading-relaxed">
                사용자님은 <strong>마케팅 문구 작성</strong>을 주 목적으로 하셨고 <strong>한국어 품질</strong>을
                중요하게 생각하셨습니다.
                <br />
                <br />
                GPT-4는 현재 한국어 뉘앙스 파악에서 가장 우수한 성능을 보여주므로 단일 도구로는 최고의 선택입니다.
                하지만 예산을 절약하면서도 긴 글을 안정적으로 쓰고 싶다면, 무료로 GPT-4를 사용할 수 있는 뤼튼(Wrtn)과
                문맥 유지력이 뛰어난 Claude 3의 조합이 더 효율적일 수 있습니다.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <UseCaseSection />
        </section>

        {/* CTA */}
        <div className="text-center pb-20">
          <Button
            asChild
            className="h-16 px-12 text-xl font-bold bg-[#4e47ff] hover:bg-[#3d36e0] text-white rounded-full shadow-xl shadow-[#4e47ff]/30 animate-pulse inline-flex items-center gap-2"
          >
            <Link href={"/compare/new"}>같은 조건으로 바로 비교하기</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

/* --- Sub Components --- */

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-[#8987a1]">{label}</span>
      <span className="font-semibold text-[#252432]">{value}</span>
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-[#4e47ff]">✔</span>
      <span>{children}</span>
    </li>
  );
}

function Step({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-[#f5f8ff] rounded-lg border border-[#e4eaf8]">
      <div className="bg-[#252432] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">
        {num}
      </div>
      <div>
        <p className="font-bold text-[#252432]">{title}</p>
        <p className="text-xs text-[#8987a1]">{desc}</p>
      </div>
    </div>
  );
}

type UseCase = {
  name: string;
  role: string;
  message: string;
};

const useCases: UseCase[] = [
  {
    name: "김OO 마케터",
    role: "스타트업 3년차",
    message:
      "저는 초안은 뤼튼으로 잡고, 다듬는 건 Claude한테 시켜요. 뤼튼이 한국어 템플릿이 많아서 시작하기 편하더라고요.",
  },
  {
    name: "김OO 마케터",
    role: "스타트업 3년차",
    message:
      "저는 초안은 뤼튼으로 잡고, 다듬는 건 Claude한테 시켜요. 뤼튼이 한국어 템플릿이 많아서 시작하기 편하더라고요.",
  },
  {
    name: "김OO 마케터",
    role: "스타트업 3년차",
    message:
      "저는 초안은 뤼튼으로 잡고, 다듬는 건 Claude한테 시켜요. 뤼튼이 한국어 템플릿이 많아서 시작하기 편하더라고요.",
  },
];

export function UseCaseSection() {
  return (
    <section className="mb-16 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold text-[#252432] mb-6">비슷한 상황에서 이렇게 사용했어요</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((item, idx) => (
          <UseCaseCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

function UseCaseCard({ name, role, message }: UseCase) {
  return (
    <Card className="border-[#e4eaf8] hover:shadow-md transition-shadow shadow-none">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div>
            <p className="text-sm font-bold text-[#252432]">{name}</p>
            <p className="text-xs text-[#8987a1]">{role}</p>
          </div>
        </div>

        <p className="text-[#252432] text-sm leading-relaxed">"{message}"</p>
      </CardContent>
    </Card>
  );
}
