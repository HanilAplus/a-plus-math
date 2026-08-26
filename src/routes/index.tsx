import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/hanil-logo.png.asset.json";

const PHONE = "010-8279-2073";
const PHONE_TEL = "01082792073";
const ADDRESS = "경기도 수원시 조원동";
const HOURS = "10:00 ~ 22:00";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "한일 A+ 학원 | 수원 조원동 초·중·고 영어·수학 전문" },
      {
        name: "description",
        content:
          "경력 25+년 원장이 직접 지도하는 수원 조원동 한일 A+ 학원. 초·중·고 영어·수학 전문, 소수정예 맞춤 수업. 상담 10:00~22:00 · 010-8279-2073",
      },
      { property: "og:title", content: "한일 A+ 학원 | 수원 조원동 초·중·고 영어·수학 전문" },
      {
        property: "og:description",
        content:
          "학원·과외 경력 25+년, 지금도 현장에서 직접 가르칩니다. 수원 조원동 초·중·고 영수 전문 학원.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "한일 A+ 학원",
          description:
            "수원 조원동 초·중·고 영어·수학 전문 학원. 학원·과외 경력 25+년.",
          telephone: `+82-${PHONE.slice(1)}`,
          address: {
            "@type": "PostalAddress",
            addressCountry: "KR",
            addressRegion: "경기도",
            addressLocality: "수원시",
            streetAddress: "조원동",
          },
          openingHours: "Mo-Su 10:00-22:00",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Subjects />
        <Levels />
        <Method />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}

/* ---------------- shared bits ---------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 rule-gold" />
      <span className="text-xs font-bold tracking-[0.25em] text-brand-red">
        {children}
      </span>
      <span className="h-px w-8 rule-gold" />
    </div>
  );
}

function SectionTitle({
  label,
  title,
  lead,
}: {
  label: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-navy-ink sm:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>
      ) : null}
    </div>
  );
}

/* ---------------- header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={logoAsset.url}
            alt="한일 A+ 학원 로고"
            className="h-9 w-9 rounded-md object-cover object-center"
          />
          <span className="text-lg font-extrabold tracking-tight text-navy-ink">
            한일 <span className="text-brand-red">A+</span> 학원
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {[
            ["소개", "#about"],
            ["과목", "#subjects"],
            ["대상", "#levels"],
            ["수업방식", "#method"],
            ["오시는 길", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-navy"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:scale-[1.03] md:inline-flex"
        >
          상담 전화
        </a>
      </div>
    </header>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, color-mix(in oklab, var(--brand-gold) 22%, transparent), transparent 42%), radial-gradient(circle at 88% 0%, color-mix(in oklab, var(--navy) 16%, transparent), transparent 46%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-accent/60 px-4 py-1.5">
            <span className="size-1.5 animate-shine rounded-full bg-brand-red" />
            <span className="text-xs font-bold tracking-wide text-navy">
              수원 조원동 · 초·중·고 영수전문
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-navy-ink sm:text-5xl lg:text-6xl">
            25+년의 경력,
            <br />
            <span className="text-gradient-navy">지금도 직접</span>
            <br />
            가르칩니다.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            학원과 과외 현장에서 25+년. 한일 A+ 학원은 유행을 좇는 대신, 학생 한 명 한 명의
            부족한 지점을 정확히 찾아 채웁니다. 초등부터 고등까지 영어·수학을 책임집니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              {PHONE} 전화상담
            </a>
            <a
              href={`sms:${PHONE_TEL}`}
              className="rounded-full border-2 border-navy/20 bg-card px-7 py-3.5 text-sm font-bold text-navy shadow-card transition-colors hover:border-navy/45"
            >
              문자로 문의하기
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7">
            {[
              ["25+년", "지도 경력"],
              ["초·중·고", "전 학년"],
              ["영어·수학", "전문 과목"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="text-2xl font-black text-brand-red sm:text-3xl">{v}</dt>
                <dd className="mt-1 text-xs font-semibold text-muted-foreground">{k}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="animate-float overflow-hidden rounded-3xl bg-card shadow-lift ring-1 ring-border">
            <img
              src={logoAsset.url}
              alt="한일 A+ 학원 - 초·중·고 영수전문"
              className="w-full object-cover"
            />
          </div>
          <div className="mt-5 rounded-2xl surface-navy p-6 shadow-card">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-gold">상담 안내</p>
            <p className="mt-3 text-2xl font-black">{HOURS}</p>
            <p className="mt-1.5 text-sm opacity-80">
              전화·문자 언제든 편하게 연락 주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- marquee ---------------- */

function Marquee() {
  const items = [
    "초등 영어",
    "초등 수학",
    "중등 영어",
    "중등 수학",
    "고등 영어",
    "고등 수학",
    "내신 대비",
    "수능 대비",
    "소수정예",
    "1:1 맞춤",
  ];
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden surface-navy py-4">
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 text-sm font-bold tracking-wide"
          >
            {t}
            <span className="size-1.5 rounded-full bg-brand-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- experience ---------------- */

function Experience() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionTitle
        label="ABOUT"
        title={
          <>
            경력은 숫자가 아니라,
            <br />
            <span className="text-brand-red">쌓인 사례</span>입니다.
          </>
        }
        lead="25+년 동안 수많은 학생을 만났습니다. 어디서 막히는지, 무엇을 먼저 잡아야 성적이 오르는지 — 오랜 경험에서 나오는 판단으로 지도합니다."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            n: "01",
            t: "25+년 현장 경력",
            d: "학원과 과외를 오가며 쌓은 25+년. 이론이 아닌 실제 교실에서 검증된 지도법으로 가르칩니다.",
          },
          {
            n: "02",
            t: "원장 직접 지도",
            d: "지금도 직접 수업합니다. 강사가 자주 바뀌지 않으니 학생의 흐름이 끊기지 않습니다.",
          },
          {
            n: "03",
            t: "학생별 맞춤 진단",
            d: "같은 학년도 출발점은 다릅니다. 현재 수준을 먼저 진단하고 그에 맞는 진도를 설계합니다.",
          },
        ].map((c) => (
          <article
            key={c.n}
            className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="text-sm font-black tracking-widest text-brand-gold">
              {c.n}
            </span>
            <h3 className="mt-3 text-xl font-extrabold text-navy-ink">{c.t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- subjects ---------------- */

function Subjects() {
  return (
    <section id="subjects" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          label="SUBJECTS"
          title="영어와 수학, 두 과목에 집중합니다"
          lead="여러 과목을 얕게 다루기보다, 성적을 가장 크게 좌우하는 두 과목을 깊이 있게 지도합니다."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              tag: "ENGLISH",
              t: "영어",
              items: [
                "어휘·문법 기초 재정비",
                "독해 구문 분석 훈련",
                "학교별 내신 기출 대비",
                "수능 유형별 독해 전략",
              ],
            },
            {
              tag: "MATH",
              t: "수학",
              items: [
                "개념 원리부터 정확히",
                "단원별 취약 유형 집중",
                "서술형·심화 문제 훈련",
                "내신·모의고사 실전 대비",
              ],
            },
          ].map((s) => (
            <article
              key={s.t}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <p className="text-xs font-black tracking-[0.25em] text-brand-gold">
                {s.tag}
              </p>
              <h3 className="mt-2 text-3xl font-black text-navy-ink">{s.t}</h3>
              <span className="mt-5 block h-px w-full rule-gold" />
              <ul className="mt-6 space-y-3.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- levels ---------------- */

function Levels() {
  return (
    <section id="levels" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionTitle
        label="LEVELS"
        title="초등부터 고등까지, 이어서 지도합니다"
        lead="학년이 바뀌어도 지도하는 사람이 같기 때문에, 학생의 강점과 약점을 처음부터 다시 파악할 필요가 없습니다."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          {
            t: "초등부",
            s: "공부 습관과 기초 다지기",
            d: "연산과 어휘 같은 기본기를 탄탄히 하고, 스스로 앉아서 공부하는 습관을 만드는 시기에 집중합니다.",
          },
          {
            t: "중등부",
            s: "내신 관리와 고등 준비",
            d: "학교별 시험 범위와 출제 경향에 맞춰 대비하며, 동시에 고등 과정으로 넘어갈 기초를 쌓습니다.",
          },
          {
            t: "고등부",
            s: "내신·수능 실전 대비",
            d: "내신 성적을 지키면서 수능 유형에 적응하도록, 학생의 목표에 맞춰 우선순위를 정해 지도합니다.",
          },
        ].map((l) => (
          <article
            key={l.t}
            className="relative overflow-hidden rounded-2xl surface-navy p-8 shadow-card transition-transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-black">{l.t}</h3>
            <p className="mt-1.5 text-sm font-bold text-brand-gold">{l.s}</p>
            <p className="mt-4 text-sm leading-relaxed opacity-80">{l.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- method ---------------- */

function Method() {
  const steps = [
    { n: "1", t: "상담 및 진단", d: "현재 성적과 학습 상태를 듣고, 간단한 진단으로 실제 수준을 확인합니다." },
    { n: "2", t: "학습 계획 수립", d: "진단 결과를 바탕으로 무엇을 언제까지 잡을지 구체적인 계획을 세웁니다." },
    { n: "3", t: "수업 및 관리", d: "계획대로 수업하며 과제와 복습까지 확인해 진도가 밀리지 않게 관리합니다." },
    { n: "4", t: "점검 및 조정", d: "시험 결과를 함께 분석하고, 필요한 부분은 계획을 수정해 다시 진행합니다." },
  ];

  return (
    <section id="method" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          label="METHOD"
          title="이렇게 진행합니다"
          lead="상담부터 시험 이후 점검까지, 한 번의 흐름으로 이어집니다."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-navy text-base font-black text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-navy-ink">{s.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- contact ---------------- */

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="overflow-hidden rounded-3xl surface-navy shadow-lift">
        <div className="grid gap-10 p-9 md:grid-cols-2 md:p-14">
          <div>
            <SectionLabel>CONTACT</SectionLabel>
            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              먼저 편하게
              <br />
              상담부터 해보세요.
            </h2>
            <p className="mt-5 text-sm leading-relaxed opacity-80">
              등록 여부와 관계없이, 지금 아이의 상태를 어떻게 봐야 할지 함께 이야기해
              드립니다. 전화가 어려우시면 문자로 남겨주셔도 됩니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-full bg-brand-red px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                전화 걸기
              </a>
              <a
                href={`sms:${PHONE_TEL}`}
                className="rounded-full border-2 border-brand-gold/60 px-7 py-3.5 text-sm font-bold text-brand-gold transition-colors hover:bg-brand-gold/10"
              >
                문자 보내기
              </a>
            </div>
          </div>

          <dl className="space-y-6 self-center">
            {[
              ["전화 · 문자", PHONE],
              ["상담 가능 시간", `${HOURS} (연중)`],
              ["위치", ADDRESS],
              ["전문 과정", "초·중·고 영어·수학"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-white/15 pb-5">
                <dt className="text-xs font-bold tracking-[0.2em] text-brand-gold">{k}</dt>
                <dd className="mt-2 text-xl font-extrabold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------- footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-24 pt-12 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <img
          src={logoAsset.url}
          alt="한일 A+ 학원"
          className="h-10 w-10 rounded-md object-cover"
        />
        <p className="text-base font-extrabold text-navy-ink">
          한일 <span className="text-brand-red">A+</span> 학원
        </p>
        <p className="text-sm text-muted-foreground">
          {ADDRESS} · {PHONE} · 상담 {HOURS}
        </p>
        <p className="text-xs text-muted-foreground/80">
          © {new Date().getFullYear()} 한일 A+ 학원. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- mobile call bar ---------------- */

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="rounded-full bg-navy py-3.5 text-center text-sm font-bold text-primary-foreground"
      >
        전화 상담
      </a>
      <a
        href={`sms:${PHONE_TEL}`}
        className="rounded-full border-2 border-navy/20 py-3.5 text-center text-sm font-bold text-navy"
      >
        문자 문의
      </a>
    </div>
  );
}
