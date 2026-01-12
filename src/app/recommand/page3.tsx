export default function Page() {
  const tools = [
    {
      id: 1,
      name: "ChatGPT",
      pricing: "부분유료",
      desc: "대화형 AI로 글쓰기, 분석, 코딩 등 다양한 작업 수행",
      tags: ["자연스러운 대화", "다양한 주제 커버", "코드 생성"],
    },
    {
      id: 2,
      name: "Claude",
      pricing: "부분유료",
      desc: "긴 문서 분석과 안전한 대화에 특화된 AI",
      tags: ["긴 문서 처리", "윤리적 답변", "코드 분석"],
    },
    {
      id: 3,
      name: "DALL·E 3",
      pricing: "유료",
      desc: "OpenAI의 이미지 생성 AI",
      tags: ["정확한 프롬프트 이해", "ChatGPT 통합"],
    },
    {
      id: 4,
      name: "Notion AI",
      pricing: "유료",
      desc: "노션 통합 AI 글쓰기 도우미",
      tags: ["문서 작성", "요약", "번역"],
    },
  ];

  const useCases = [
    {
      role: "마케터 · 중급",
      title: "마케팅 캠페인 기획서 작성",
      tools: ["ChatGPT", "Claude", "Notion AI"],
      result: "타겟 분석, 콘텐츠 전략, 실행 계획이 포함된 종합 기획서",
    },
    {
      role: "SNS 매니저 · 중급",
      title: "SNS 콘텐츠 일괄 생성",
      tools: ["ChatGPT", "DALL·E 3", "Notion AI"],
      result: "즉시 발행 가능한 캡션과 이미지 세트",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Intro */}
      <section>
        <h1 className="text-2xl font-bold">AI 조합 추천</h1>
        <p className="text-gray-500 mt-1">입력하신 조건에 따른 AI 조합을 추천합니다.</p>
      </section>

      {/* Condition */}
      <section className="bg-purple-50 border border-purple-100 rounded-xl p-6">
        <div className="font-medium mb-2">입력하신 조건</div>
        <div className="text-gray-700">신제품 런칭을 위한 SNS 콘텐츠</div>
      </section>

      {/* Analysis */}
      <section className="border rounded-xl p-6 space-y-3">
        <div className="font-medium">조건 분석 결과</div>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 p-3 rounded">목적: 마케팅 콘텐츠 생성</div>
          <div className="bg-gray-50 p-3 rounded">출력 형식: 텍스트 + 이미지</div>
          <div className="bg-gray-50 p-3 rounded">예산: 미지정</div>
          <div className="bg-gray-50 p-3 rounded">팀 규모: 미지정</div>
        </div>
      </section>

      {/* Tools */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">추천 AI 도구</h2>
          <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded">지금 비교하기</button>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {tools.map((t) => (
            <div key={t.id} className="border rounded-xl p-5 bg-white shadow-sm">
              <div className="flex justify-between">
                <h3 className="font-semibold">{t.name}</h3>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">{t.pricing}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{t.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {t.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 text-sm text-purple-600 font-medium">바로가기 →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-purple-50 border border-purple-100 rounded-xl p-6">
        <div className="font-medium mb-1">추천 워크플로우</div>
        <p className="text-sm text-gray-600">
          ChatGPT로 아이디어를 브레인스토밍하고, Claude로 전략을 수립한 뒤, DALL·E로 비주얼을 생성하고, Notion AI로 최종
          문서화하세요.
        </p>
      </section>

      {/* Use cases */}
      <section>
        <h2 className="font-semibold text-lg mb-4">관련 유스케이스</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {useCases.map((u, i) => (
            <div key={i} className="border rounded-xl p-5 bg-white shadow-sm">
              <div className="text-sm text-gray-500">{u.role}</div>
              <h3 className="font-semibold mt-1">{u.title}</h3>
              <div className="flex gap-2 mt-2">
                {u.tools.map((t) => (
                  <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">{u.result}</p>
              <button className="mt-3 text-sm text-purple-600 font-medium">이 케이스로 비교하기 →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
