import CosmicBackground from "@/components/CosmicBackground";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen relative overflow-hidden">
        <CosmicBackground />

        <div className="h-full flex flex-col items-center justify-center text-center border/ border-pink-500">
          {/* 제목 */}
          <h1 className="text-5xl font-bold tracking-tight text-balance">AI 도구를 찾고 조합하고 비교하는</h1>
          <h1 className="text-5xl font-bold tracking-tight text-balance">가장 확실한 방법</h1>

          {/* 부제목 */}
          <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
            목적과 제약 조건에 맞는 AI 도구를 추천받고, 동일한 조건에서 직접 비교해보세요.
          </p>

          {/* 시작버튼 */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <Button asChild size="lg" className="text-lg h-14 px-8">
            </Button> */}
            <Button
              asChild
              className="h-14 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              <Link href={"/recommand"}>목적 기반 추천 시작하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
