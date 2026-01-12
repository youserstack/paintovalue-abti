"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function SigninPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      setLoading(true);

      // TODO: 실제 로그인 API 연동
      console.log("로그인 시도:", form);

      // 성공 시 홈으로 이동
      router.push("/");
    } catch (err) {
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-[#252432]">로그인</h2>
            <p className="mt-2 text-sm text-[#8987a1]">AIGO 계정으로 로그인하세요</p>
          </div>

          <Card className="border-[#e4eaf8] shadow-sm">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                    value={form.password}
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
                  {loading ? "로그인 중..." : "로그인"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/signup" className="text-sm font-medium text-[#4e47ff] hover:text-[#3d36e0]">
                  계정이 없으신가요? 회원가입
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
