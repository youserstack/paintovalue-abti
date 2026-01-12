export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 콘텐츠 */}
      <div className="relative z-10 text-center space-y-6 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          AI 도구를 찾고 조합하고 비교하는
          <br />
          가장 확실한 방법
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto">
          목적과 제약 조건에 맞는 AI 도구를 추천받고, 동일한 조건에서 직접 비교해보세요.
        </p>

        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
          목적 기반 추천 시작하기
        </button>
      </div>
    </div>
  );
}
