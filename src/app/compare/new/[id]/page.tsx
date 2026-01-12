import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Star, ThumbsUp } from "lucide-react";

export default function ComparePage() {
  const results = [
    {
      id: "chatgpt",
      name: "ChatGPT",
      content: `친환경 마케팅 캠페인 아이디어...
1. 텀블러 사용 챌린지: 대학생들이 일상에서...
2. 에코 플리마켓: 안 쓰는 물건을 교환하고...`,
      rating: 5,
    },
    {
      id: "claude",
      name: "Claude 3",
      content: `대학생 타겟 친환경 캠페인 제안:
- "Green Campus" 릴레이: 동아리별 대항전 형식으로...
- 전공 서적 업사이클링: 헌 책을 예술 작품으로...`,
      rating: 4,
    },
    {
      id: "wrtn",
      name: "Wrtn",
      content: `안녕하세요! 20대 대학생을 위한 캠페인이군요.
1. SNS 인증샷 이벤트: #용기내챌린지
2. 제로웨이스트 키트 배포: 신입생 환영회 때...`,
      rating: 4,
    },
  ];

  return (
    <main>
      <section>
        <div className="h-[calc(100vh-80px)] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#252432]">결과 비교</h1>
            <div className="flex gap-2">
              <Button variant="outline" className="h-9">
                프롬프트 수정
              </Button>
              <Button className="h-9 bg-[#4e47ff] hover:bg-[#3f39e6]">결과 내보내기</Button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-6 flex-1 overflow-hidden min-h-0">
            {results.map((r) => (
              <Card key={r.id} className="flex flex-col h-full py-0 border-[#e4eaf8] shadow-none overflow-hidden">
                {/* Card Header */}
                <CardHeader className="p-4 bg-[#f5f8ff] border-b border-[#e4eaf8] flex flex-row justify-between items-center space-y-0">
                  {/* <CardHeader className="flex flex-row items-center justify-between p-4 space-y-0 bg-[#f5f8ff] border-b border-[#e4eaf8]"> */}
                  <CardTitle className="text-lg text-[#252432] font-bold">{r.name}</CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/50">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/50">
                      <ThumbsUp className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                {/* Content */}
                <CardContent className="flex-1 p-4 overflow-y-auto font-sans leading-relaxed text-[#252432] whitespace-pre-wrap">
                  {r.content}
                </CardContent>

                {/* Footer */}
                <CardFooter className="p-4 border-t border-[#e4eaf8] bg-[#f5f8ff]/50 block">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-[#8987a1]">AIGO 평가</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < r.rating ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-[#252432] hover:bg-black">이 도구 선택하기</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
