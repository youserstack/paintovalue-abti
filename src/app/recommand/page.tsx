export default function AIRecommendationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      {/* GNB */}
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b">
        <div className="text-2xl font-bold text-gray-800 tracking-tight">ABTI</div>
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-blue-600">
            AI 조합 추천
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            AI 비교
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            유스케이스
          </a>
          <div className="flex items-center gap-2 border rounded-full px-3 py-1 ml-4">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-[10px] text-white">
              D
            </div>
            <span className="text-xs">daun.friend</span>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto mt-12 px-4">
        {/* Title */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold mb-2">AI 조합 추천</h1>
          <p className="text-gray-500 text-sm">입력하신 조건에 따른 AI 조합을 추천합니다.</p>
        </section>

        {/* Condition Box */}
        <section className="bg-blue-50/50 rounded-xl p-6 mb-10 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="p-1 bg-purple-100 rounded text-purple-600 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-1">입력하신 조건</p>
              <p className="text-sm font-medium">신제품 런칭을 위한 SNS 콘텐츠</p>
            </div>
          </div>
        </section>

        {/* Analysis Results */}
        <section className="bg-white rounded-xl p-8 mb-16 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">
              ✓
            </div>
            <h2 className="font-bold">조건 분석 결과</h2>
            <span className="text-xs text-gray-400 font-normal">AI가 입력 내용을 분석했습니다.</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-xs text-gray-500">
                목적: <b className="text-gray-900 ml-2">마케팅 콘텐츠 생성</b>
              </span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">완료</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-xs text-gray-500">
                출력 형식: <b className="text-gray-900 ml-2">텍스트 + 이미지</b>
              </span>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded">완료</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-xs text-gray-500">
                예산: <b className="text-gray-900 ml-2 text-opacity-30">미지정</b>
              </span>
              <span className="text-[10px] border border-gray-200 text-gray-400 px-2 py-0.5 rounded">선택</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-xs text-gray-500">
                팀 규모: <b className="text-gray-900 ml-2 text-opacity-30">미지정</b>
              </span>
              <span className="text-[10px] border border-gray-200 text-gray-400 px-2 py-0.5 rounded">선택</span>
            </div>
          </div>
        </section>

        {/* Recommended AI Tools */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-xl font-bold mb-1">추천 AI 도구</h2>
              <p className="text-sm text-gray-400">총 4개의 도구를 추천합니다.</p>
            </div>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-lg shadow-indigo-100">
              지금 비교하기
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <ToolCard
              number="1"
              name="ChatGPT"
              desc="대화형 AI로 글쓰기, 분석 등 다양한 작업 수행"
              badges={["자연스러운 대화", "다양한 주제 커버"]}
              type="부분유료"
            />
            <ToolCard
              number="2"
              name="Claude"
              desc="긴 문서 분석과 안전한 대화에 특화된 AI"
              badges={["긴 문서 처리", "윤리적 답변"]}
              type="부분유료"
            />
            <ToolCard
              number="3"
              name="DALL-E 3"
              desc="OpenAI의 이미지 생성 AI"
              badges={["정확한 프롬프트", "ChatGPT 통합"]}
              type="유료"
            />
            <ToolCard
              number="4"
              name="Notion AI"
              desc="노션 통합 AI 글쓰기 도우미"
              badges={["문서 작성", "요약", "번역"]}
              type="유료"
            />
          </div>

          {/* Workflow Box */}
          <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6">
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
              <span className="text-sm">📈</span>
              <h3 className="text-sm font-bold">추천 워크플로우</h3>
            </div>
            <p className="text-xs text-gray-500 mb-2">여러 도구를 조합하여 더 나은 결과를 만드세요.</p>
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">ChatGPT</span>로 아이디어를 브레인스토밍하고,{" "}
              <span className="font-semibold">Claude</span>로 전략을 수립한 뒤,{" "}
              <span className="font-semibold">DALL-E</span>로 비주얼을 생성하고,{" "}
              <span className="font-semibold">Notion AI</span>로 최종 문서화하세요.
            </p>
          </div>
        </section>

        {/* Use Case Section */}
        <section className="mt-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">관련 유스케이스</h2>
            <button className="text-white bg-indigo-500 px-4 py-2 rounded-lg text-sm">유스케이스 더 보러가기</button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <UseCaseCard category="마케터" title="마케팅 캠페인 기획서 작성" />
            <UseCaseCard category="SNS 매니저" title="SNS 콘텐츠 일괄 생성" />
          </div>
        </section>
      </main>
    </div>
  );
}

// Sub-components
const ToolCard = ({ number, name, desc, badges, type }: any) => (
  <div className="bg-white border border-gray-100 rounded-xl p-5 relative shadow-sm hover:shadow-md transition-shadow">
    <div className="absolute top-4 right-4 text-[10px] text-gray-400 font-medium">{type}</div>
    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs mb-4">
      {number}
    </div>
    <h3 className="font-bold mb-2 flex items-center gap-2">
      <div className="w-5 h-5 bg-gray-200 rounded-sm"></div> {name}
    </h3>
    <p className="text-[11px] text-gray-500 mb-4 leading-relaxed h-8 line-clamp-2">{desc}</p>
    <div className="flex flex-wrap gap-1 mb-4">
      {badges.map((b: string) => (
        <span key={b} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
          {b}
        </span>
      ))}
    </div>
    <button className="text-[11px] text-purple-600 font-semibold flex items-center">바로가기 →</button>
  </div>
);

const UseCaseCard = ({ category, title }: any) => (
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
    <div className="flex justify-between mb-4">
      <span className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-500 font-bold">{category}</span>
      <span className="text-[10px] text-yellow-600 bg-yellow-50 px-2 py-1 rounded">중급</span>
    </div>
    <h4 className="font-bold mb-3">{title}</h4>
    <div className="flex gap-2 mb-6">
      <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
      <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
      <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
    </div>
    <button className="w-full py-2.5 border border-indigo-100 text-indigo-600 text-xs font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
      이 케이스로 비교하기 →
    </button>
  </div>
);
