"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      setLoading(true);

      // TODO: API 연동
      console.log("회원가입 데이터:", form);

      // 성공 시 로그인 페이지 이동
      router.push("/signin");
    } catch (err) {
      setError("회원가입에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section>
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-extrabold text-[#252432]">회원가입</h2>
              <p className="mt-2 text-sm text-[#8987a1]">AIGO와 함께 AI 도구를 마스터하세요</p>
            </div>

            <Card className="border-[#e4eaf8] shadow-sm">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="홍길동"
                      value={form.name}
                      onChange={handleChange}
                      className="border-[#e4eaf8] focus-visible:ring-[3px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="border-[#e4eaf8] focus-visible:ring-[3px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">비밀번호</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="8자 이상"
                      value={form.password}
                      onChange={handleChange}
                      className="border-[#e4eaf8] focus-visible:ring-[3px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">비밀번호 확인</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="border-[#e4eaf8] focus-visible:ring-[3px]"
                    />
                  </div>

                  {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#4e47ff] hover:bg-[#3d36e0] h-12 text-lg font-bold text-white"
                  >
                    {loading ? "처리중..." : "회원가입"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/login" className="text-sm font-medium text-[#4e47ff] hover:text-[#3d36e0]">
                    이미 계정이 있으신가요? 로그인
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
