CLAUDE.md — Sung Sehyun 2026 Tokyo Internship Landing Page

> 이 문서는 Claude Code가 구현·수정할 때 따라야 하는 단일 기준 문서(Source of Truth)다. 작업 시작 전에 저장소의 실제 상태와 자산을 확인하고, 문서의 사실·콘텐츠 제한·디자인 원칙을 우선한다. 저장소의 기술 제약과 충돌하면 근거를 보고하고 최소 변경안을 택한다.

```text
Revision: Sprint 2.1
Latest requirements: profile-first Hero, KO/JA/EN localization, stronger visual narrative
(bridge sentences between sections, tonal flow, denser editorial layout).
```

Sprint 2.1은 기존 문서를 폐기하지 않는다. 다음 절만 대체하고 나머지는 그대로 유지한다.

- §3 최종 정보 구조 — 섹션 라벨을 Hero/Profile 중심으로 갱신 (7개 top-level section, 4개 nav 항목은 그대로 유지).
- §4.1 Header — 언어 스위처(KO/JP/EN) 요구사항 추가.
- §4.2 Hero — "영문 타이포 옆 HULL 현장 사진" 기준을 "성세현 프로필 사진 중심 Hero + 하단 story statement band" 기준으로 대체.
- §5 디자인 시스템 색상 — 팔레트와 섹션별 tonal flow 갱신.
- §7 기술 구현 뒤에 §7-1 다국어(Localization) 신설 — "한국어 중심 단일 언어" 전제를 폐기.
- §9 금지 사항, §10 완료 기준 — 다국어 관련 항목 추가.

나머지 절(인물·인턴십 사실, 콘텐츠 제한, 개별 섹션 카피, 접근성·성능 기준 등)은 Sprint 2.1과 충돌하지 않는 한 계속 유효하며, 각 섹션 카피는 지원되는 모든 언어(ko/ja/en)로 동일한 사실 범위 안에서 번역되어야 한다.

0. 프로젝트 정의
   성세현이 HULL株式会社에서 경험한 웹 리뉴얼 → SEO·콘텐츠 기반 마련 → 디지털 사이니지 영업 현장 관찰 → 반복 문제 발견 → 개인 소프트웨어 프로젝트로 해결 → 개발자로서의 성장을 짧고 명확하게 보여주는 2026 도쿄 인턴십 싱글페이지 포트폴리오다.
   방문자는 2~3분 안에 다음을 이해해야 한다.
   성세현이 HULL에서 무엇을 경험했는가.
   영업 현장에서 어떤 문제를 발견했는가.
   그 문제를 어떤 소프트웨어로 해결했는가.
   이 경험을 통해 어떤 개발자로 성장했는가.
   핵심 서사:

```text
EXPERIENCE → DISCOVER → BUILD → GROW
경험하다       발견하다      해결하다    성장하다
```

대표 메시지:

```text
FROM CODE
TO BUSINESS.

웹사이트를 만들고,
검색 전략을 고민하고,
현장에서 발견한 문제를 소프트웨어로 해결했습니다.
```

1. 절대 원칙
   1.1 페이지 길이
   짧고 밀도 높은 싱글페이지로 만든다.
   데스크톱 기준 약 7~~9개 화면 높이 안에서 읽히게 한다.
   같은 내용을 Profile, Work, Timeline, Reflection에서 반복하지 않는다.
   긴 타임라인, 업무 카드 10개, 숫자 성과 섹션, 장문의 여행기는 만들지 않는다.
   본문 문단은 원칙적으로 2~~4문장, 약 180자 안팎으로 제한한다.
   카드 설명은 2문장 이하, 핵심 불릿은 항목당 1줄로 제한한다.
   1.2 서사 우선순위
   반드시 다음 순서를 유지한다.
   경험 — 회사 웹과 콘텐츠 기반을 직접 만들었다.
   발견 — 영업 현장에서 설치 전후 이미지를 수작업으로 준비하는 반복 문제를 봤다.
   해결 — 개인 프로젝트인 Digital Signage Simulator를 기획·개발했다.
   성장 — 구현 중심에서 사용자·운영·비즈니스 문제를 보는 개발자로 시야가 넓어졌다.
   1.3 사실성과 표현 제한
   확인되지 않은 성과 수치, 트래픽 증가율, 검색 순위, 고객 발언, 계약 성과를 만들지 않는다.
   컬럼 게시 전이므로 “SEO 성과를 냈다”가 아니라 SEO 친화적 구조와 운영 기반을 마련했다고 쓴다.
   시뮬레이터의 실제 HULL 영업 도입·정식 배포·고객 사용을 주장하지 않는다.
   시뮬레이터는 성세현의 독립 개인 프로젝트이며 HULL 공식 서비스·제휴·후원 제품이 아니다.
   회사 반응은 “긍정적인 반응과 실무 활용 가능성에 대한 피드백을 받았다” 이상으로 확대하지 않는다.
   방문 기업의 기밀, 미팅 내용, 담당자, 계약·가격·제품 계획을 추측하지 않는다.
   영업 현장 사진은 보안상 촬영하지 못했으므로 가짜 회의 사진이나 AI 생성 기업 방문 사진으로 대체하지 않는다.
   HULL 로고 및 회사 이미지 사용은 허가된 실제 자산이 있을 때만 사용한다.
   참고 사이트의 문구·레이아웃·소스 코드를 복제하지 않는다.
2. 확정 정보
   2.1 인물
   이름: 성세현
   영문: Sung Sehyun
   한자: 成世睍
   소속: 전남대학교 인공지능학부 소프트웨어전공 4학년
   일본어: JLPT N3
   이메일: sehyun2727@gmail.com
   공개 GitHub: https://github.com/sehyun2727/Digitalsignage-Simulater
   2.2 인턴십
   기간: 2026.06.30 — 08.29
   지역: Tokyo, Japan
   기업: HULL株式会社
   기업 사이트: https://hull-inc.jp/
   주최: 대학 SW중심대학사업단
   지원: JISA (Japan Internship Support Association) · 일본인턴십지원협회
   생활 거점: 다이타바시(代田橋)
   2.3 담당 업무
   HULL 홈페이지 리뉴얼 — 기획부터 운영 서버 배포까지 전 과정
   새 조직·사업 브랜드에 맞춘 정보 구조 개편
   컬럼 페이지 추가 개발과 운영·유지보수 매뉴얼 작성
   컬럼 운영을 위한 SEO 전략 조사
   디지털 사이니지 영업 동행 — 자료 준비, 기록, 현장 관찰
   현장의 반복 문제를 바탕으로 Digital Signage Simulator 개인 기획·개발
   2.4 웹 리뉴얼
   기존 사이트는 새롭게 바뀌는 회사 조직·사업 체계와 맞지 않았고, 부서명 중심 구조와 URL·콘텐츠 관계를 정리할 필요가 있었다.
   수행 내용:
   `HULL VISION`, `HULL SPACE` 등 새로운 사업 브랜드 구조에 맞춰 페이지와 내비게이션을 재기획
   화면 디자인, 정보 계층, 사용자 이동 흐름 개선
   검색엔진과 사용자가 콘텐츠 관계를 이해하기 쉬운 URL 구조 정리
   컬럼 콘텐츠 운영 구조와 비개발자용 유지보수 매뉴얼 제작
   기획, 구축, 테스트, 마이그레이션, 운영 서버 반영 담당
   표현 주의:
   실제 사이트의 현행 표기와 설명은 구현 시 다시 확인한다.
   “SEO 효과가 발생했다”가 아니라 “SEO 친화적 기반을 정리했다”고 표현한다.
   2.5 HULL 사이트 기술 스택
   전체를 노출하지 말고 다음 정도로 압축한다.

```text
WordPress · Gutenberg · CPT UI · CSS · Vanilla JS · Local · Xserver
```

세부 사항:
Lightning 부모 테마 + `lightning-child` 자식 테마
CPT UI로 컬럼용 Custom Post Type 및 Taxonomy 구성
Gutenberg 코어 블록 + VK Blocks
커스터마이저 Additional CSS, 페이지별 스코프 관리
Vanilla JavaScript + CSS로 검색 필터, 태그 사이드바, 캐러셀 구현
Local by Flywheel 로컬 개발
All-in-One WP Migration
Xserver 운영 배포
외부 UI 라이브러리 없이 인터랙션 구현
2.6 컬럼·SEO
목적은 웹 검색 노출을 확대하기 위한 장기 SEO 전략 기반 마련이다. 컬럼 게시 구조, 카테고리·태그 체계, 운영 흐름, 유지보수 매뉴얼을 만들었으며 컬럼 글은 아직 게시·성과 측정 전이다.
권장 문장:

> 검색 노출을 단기 수치가 아닌 지속 가능한 운영 문제로 보았습니다. 컬럼을 발행할 수 있는 구조와 분류 체계를 만들고, 담당자가 이어서 운영할 수 있도록 유지보수 매뉴얼까지 정리했습니다.
> 2.7 영업 현장
> 목적: 디지털 사이니지 영업 현장과 고객 커뮤니케이션 과정 체험
> 역할: 자료 준비, 기록, 현장 관찰
> 방문 사례: 쿠스리노후쿠타로, 후지필름이미징시스템즈 등
> 보안상 촬영 불가
> 권장 문장:
> 쿠스리노후쿠타로와 후지필름이미징시스템즈 등 기업 영업에 동행하며, 기능 설명만큼 고객 공간과 운영 상황에 맞춘 시각적 제안이 중요하다는 점을 배웠습니다. 촬영이 제한된 현장에서는 자료 준비와 기록에 집중하며 일본 기업의 사전 준비와 커뮤니케이션 방식을 관찰했습니다.
> 2.8 발견한 문제

```text
FIELD OBSERVATION
수작업 이미지 편집
        ↓
REPEATED FRICTION
장소마다 반복되는 시안 제작
        ↓
SOFTWARE IDEA
브라우저에서 직접 배치하고 내보내기
```

권장 문장:

> 고객이 설치 후 모습을 이해하려면 시각 자료가 필요했지만, 매번 이미지 편집으로 Before/After 시안을 만드는 방식은 반복적이고 수정 대응이 느렸다.
> 2.9 Digital Signage Simulator
> 저장소: https://github.com/sehyun2727/Digitalsignage-Simulater
> 정체성:
> Working title: Signage Canvas / Digital Signage Simulator
> 성세현이 단독으로 기획·개발한 독립 개인 프로젝트
> 브라우저에서 디지털 사이니지 제안 이미지를 구성하고 PNG로 내보내는 도구
> HULL 공식 서비스·제휴·후원 제품이 아님
> README에 실제 Render 배포 전 상태가 명시되어 있음
> 페이지에는 다음 4단계만 시각화한다.

```text
01  공간 사진 불러오기
02  사이니지 또는 제품 배치
03  화면 콘텐츠와 크기 조정
04  제안 이미지 PNG 내보내기
```

핵심 가치:

> 영업 현장에서 본 반복 작업을 브라우저 기반 시뮬레이터로 바꾸었습니다. 공간 사진 위에 디스플레이를 배치하고 콘텐츠를 조정한 뒤, 설치 후 모습을 제안 이미지로 내보낼 수 있도록 설계했습니다.
> 반드시 포함:

```text
개인 프로젝트이며 HULL의 공식 서비스가 아닙니다.
```

기능·기술 사실:
공간 배경 사진 추가·삭제
LED·스탠드형 디스플레이 객체 배치
화면 이미지, Contain/Cover, 오프셋, 확대율 조정
텍스트·이미지 요소 편집
선택·이동·크기 조절·회전
실행 취소·다시 실행
사용자 지정 제품 사진 업로드 및 화면 영역 지정
PNG 원본 해상도 내보내기
일본어 기본, 한국어·영어 지원 구조
사용자 파일은 서버 업로드 없이 브라우저 내부에서 처리
모바일 기본 대응
기술 스택:

```text
React 19 · TypeScript · Vite · Konva · react-konva · Zustand
Vitest · React Testing Library · Playwright
GitHub Actions · Docker · Nginx · Render Static Site 준비
```

금지 표현:
HULL에서 실제 사용 중
영업 시간을 수치로 단축
고객사 도입 완료
AI 자동 배치
네 점 원근 보정
영상 내보내기 3. 최종 정보 구조 — 7개 top-level section (Sprint 2.1 갱신)

```text
00 Header
01 Hero / Profile
02 Experience
03 Renewal
04 Field Insight
05 Simulator
06 Growth
07 Closing (Footer)
```

내비게이션은 다음 4개만 노출한다. FieldInsight는 Experience와 Simulator 사이의 스토리 구간이지만 별도 nav item을 추가하지 않는다.

```text
Experience / Renewal / Simulator / Growth
```

3-1. 전체 스토리 흐름과 연결 문장(Bridge Sentences)

전체 페이지가 하나의 이야기로 읽혀야 한다.

```text
나는 누구인가
→ HULL에서 무엇을 경험했는가
→ 변화한 회사에 맞춰 웹을 어떻게 다시 설계했는가
→ 영업과 AI/DX 현장에서 무엇을 관찰했는가
→ 어떤 반복 문제를 발견했는가
→ 시뮬레이터로 어떻게 해결했는가
→ 이 과정으로 어떻게 성장했는가
```

각 section 사이에 짧은 bridge 문장을 둔다. 별도 top-level section으로 만들지 않고, 각 2줄 이내로 제한한다. 지원 언어(ko/ja/en) 모두 자연스럽게 번역한다.

```text
Hero → Experience:
"웹을 만드는 기술을 넘어, 회사의 변화를 이해하는 것부터 시작했습니다."

Experience → Renewal:
"첫 번째 과제는 변화한 회사를 웹의 구조에 다시 담아내는 일이었습니다."

Renewal → FieldInsight:
"하지만 웹 안에서 회사를 이해하는 것만으로는 충분하지 않았습니다. 고객이 기술을 만나는 실제 현장으로 나갔습니다."

FieldInsight → Simulator:
"현장을 관찰하자, 반복되는 한 가지 문제가 보이기 시작했습니다."

Simulator → Growth:
"작은 도구를 완성하는 과정은 개발을 바라보는 제 관점까지 바꾸었습니다."
```

4. 섹션별 구현 사양
   4.1 Header
   좌측 워드마크: `S.S / TOKYO 2026`
   우측: 네 개 앵커 링크, 언어 스위처(KO/JP/EN), `GitHub ↗`
   높이 약 64~72px
   스크롤 후 반투명 흰색과 1px 하단 선
   현재 섹션은 작은 점 또는 밑줄로만 표시
   `prefers-reduced-motion` 준수
   모바일 메뉴를 만들 경우 `aria-expanded`, `aria-controls`, Escape, 키보드 포커스를 제공

   언어 스위처(Sprint 2.1 신설):
   - 데스크톱: nav와 GitHub 링크 사이에 위치
   - 표기는 `KO / JP / EN`, 내부 locale code는 `ko / ja / en`
   - 실제 `button` 엘리먼트 사용, active 언어에 `aria-pressed="true"`
   - 최소 클릭 영역 약 40px, `:focus-visible` 명확히 표시
   - 모바일 header에서도 항상 노출 (GitHub 링크는 모바일 메뉴 안으로 이동 가능하지만 언어 스위처는 숨기지 않는다)

   4.2 Hero / Profile (Sprint 2.1 갱신 — 기존 "HULL 현장 사진 중심 Hero" 기준을 대체)

   첫 화면은 성세현 개인 소개가 우선이며, 다음 정보가 3초 안에 이해되어야 한다.

   ```text
   성세현 / Sung Sehyun / 成世睍
   전남대학교 인공지능학부 소프트웨어전공 4학년
   HULL株式会社 / Tokyo / 2026.06.30—08.29
   Web Renewal / Content & SEO / Field Experience / Software Prototype
   ```

   레이아웃 (데스크톱 12-column):
   - 왼쪽 7 columns: 이름과 소개
   - 오른쪽 4 columns: 프로필 사진
   - 나머지 column은 vertical rule 또는 의도적 간격
   - Hero 높이는 약 85~90svh, 사진 아래 목적 없는 빈 공간을 남기지 않는다

   모바일 순서: chapter label → 이름 → 역할 문구 → 프로필 사진 → 소개 → metadata → CTA

   프로필 사진:
   - 실제 성세현 프로필 사진 사용 (`public/images/experience/portrait-sung-sehyun-*.webp`, 기존 파일 재사용/고해상도 파생본 추가)
   - alt: `성세현 프로필 사진`
   - 비율 4:5 또는 3:4, 얼굴과 어깨가 자연스럽게 보이게 함
   - 원형 avatar로 자르지 않는다, radius 0~8px
   - 사진 뒤에 12~16px 어긋난 green outline
   - 작은 label: `SUNG SEHYUN / TOKYO 2026`
   - chapter marker: `00 / PROFILE`

   한국어 Hero 카피:

   ```text
   Eyebrow: 2026 SUMMER INTERNSHIP · TOKYO
   이름: 성세현
   보조 이름: Sung Sehyun · 成世睍
   역할: 기술과 비즈니스 사이의 문제를
         직접 관찰하고 해결하는 개발자
   소개: 전남대학교 인공지능학부 소프트웨어전공 4학년으로,
         일본 HULL株式会社에서 웹 리뉴얼부터 SEO, 영업 현장,
         디지털 사이니지 시뮬레이터 개발까지 경험했습니다.
   metadata: COMPANY HULL株式会社 / PERIOD 2026.06.30—08.29 /
             LOCATION TOKYO, JAPAN / LANGUAGE JLPT N3
   CTA: VIEW MY JOURNEY (Experience section으로 이동)
   ```

   일본어 Hero 카피:

   ```text
   2026 サマーインターンシップ · 東京

   成世睍
   Sung Sehyun · 성세현

   技術とビジネスの間にある課題を
   観察し、解決する開発者

   全南大学校 人工知能学部ソフトウェア専攻の4年生として、
   日本のHULL株式会社で、Webサイトのリニューアル、SEO、
   営業現場の体験、デジタルサイネージ・シミュレーターの開発に取り組みました。
   ```

   영어 Hero 카피:

   ```text
   2026 SUMMER INTERNSHIP · TOKYO

   Sung Sehyun
   성세현 · 成世睍

   A developer who observes and solves
   problems between technology and business

   As a fourth-year Software major in the School of Artificial Intelligence at
   Chonnam National University, I worked at HULL Inc. in Japan on website
   renewal, SEO, field experience, and the development of a digital signage
   simulator.
   ```

   Story statement band:
   - `FROM CODE TO BUSINESS.`는 삭제하지 않고 Hero 하단의 full-width statement band(별도 top-level section 아님, 높이 약 220~300px)로 재배치한다.
   - dark charcoal 배경, 밝은 아이보리 텍스트, green accent
   - 카피: `FROM CODE TO BUSINESS.` / `웹사이트를 만들고, 현장의 문제를 발견하고, 작동하는 해결책으로 바꿨습니다.` (ja/en도 동일 구조로 번역)

   기존 Hero의 HULL VISION 단체 사진은 FieldInsight로 이동한다 (§4.5). Hero와 FieldInsight에서 같은 사진을 중복 사용하지 않는다.

   4.3 Experience
헤더:

```text
01 / EXPERIENCE
WHAT I EXPERIENCED.
```

Intro:

> HULL에서 회사의 온라인 접점을 다시 설계하고, 콘텐츠 운영 기반을 만들었으며, 디지털 사이니지 영업 현장까지 경험했습니다.
> 세 경험 축:
> `RENEW` — 회사 웹 리뉴얼  
> 새 조직과 사업 브랜드를 기준으로 정보 구조부터 디자인, 개발, 배포까지 담당했다.
> `DISCOVER` — 컬럼과 SEO 기반  
> 검색 노출을 위한 컬럼 구조와 분류 체계를 만들고 유지보수 매뉴얼을 정리했다.
> `CONNECT` — 영업 현장 동행  
> 자료 준비와 기록을 맡으며 웹에서 만든 메시지가 실제 고객에게 전달되는 과정을 관찰했다.
> 하단 프로필 스트립:

```text
CHONNAM NATIONAL UNIVERSITY · SOFTWARE · 4TH YEAR · JLPT N3
HOSTED BY SW-CENTERED UNIVERSITY PROJECT · SUPPORTED BY JISA
```

4.4 Website Renewal
헤더:

```text
02 / WEBSITE RENEWAL
A NEW STRUCTURE
FOR A CHANGING COMPANY.
```

핵심:

> 기존 사이트는 새롭게 바뀌는 조직과 사업 브랜드를 충분히 반영하지 못했습니다. HULL VISION과 HULL SPACE를 중심으로 정보 구조를 다시 설계하고, 기획부터 운영 서버 배포까지 전 과정을 맡았습니다.
> Before/After:
> BEFORE: 부서명 중심 구조, 조직 변화와 불일치, URL·콘텐츠 관계 정리 필요
> AFTER: 사업 브랜드 중심 구조, 명확한 정보 계층·사용자 흐름, 컬럼 확장과 검색을 고려한 URL 기반
> 실제 캡처가 있으면 사용하고, 없으면 가짜 화면을 만들지 않는다. 대신 명확한 자산 placeholder 또는 텍스트 중심 구조를 사용한다.
> 실행 흐름:

```text
01 ANALYZE → 02 RESTRUCTURE → 03 BUILD → 04 DEPLOY
```

보조 블록:

```text
BUILT TO BE CONTINUED.
```

> 검색 노출을 장기적인 콘텐츠 운영 문제로 보았습니다. 컬럼용 포스트 타입과 분류 체계를 구축하고, 담당자가 개발자 없이 이어서 운영할 수 있도록 유지보수 매뉴얼을 제작했습니다.
> 상태:

```text
FOUNDATION BUILT · CONTENT NOT YET PUBLISHED
```

기술 라인:

```text
WordPress · Gutenberg · CPT UI · CSS · Vanilla JS · Local · Xserver
```

4.5 Field Insight
헤더:

```text
03 / FIELD INSIGHT
FROM THE SCREEN
TO THE SALES FLOOR.
```

본문:

> 디지털 사이니지 영업에 동행해 자료 준비와 기록, 현장 관찰을 담당했습니다. 기능 설명만큼 고객의 공간에 설치된 모습을 빠르게 보여주는 일이 중요하다는 것을 알게 되었습니다.
> 보조 라인:

```text
FIELD VISITS · クスリの福太郎 · FUJIFILM IMAGING SYSTEMS · ETC.
```

주석:

```text
현장 보안과 기업 기밀을 위해 미팅 사진과 세부 내용은 공개하지 않습니다.
```

어두운 배경을 사용해 전환점으로 만든다.
실제 고객 공간 사진이나 가짜 기업 로고를 추가하지 않는다.
수작업 이미지 편집 → 반복 수정 → 느린 Before/After 제안의 인과관계를 다이어그램으로 보여준다.
4.6 Signage Simulator
헤더:

```text
04 / SIDE PROJECT
FROM FIELD INSIGHT
TO WORKING SOFTWARE.
```

프로젝트명:

```text
DIGITAL SIGNAGE
SIMULATOR.
```

본문:

> 영업 현장에서 본 반복 작업을 브라우저 기반 시뮬레이터로 바꾸었습니다. 공간 사진 위에 디스플레이를 배치하고 콘텐츠를 조정한 뒤, 설치 후 모습을 PNG 제안 이미지로 내보낼 수 있도록 직접 기획하고 개발했습니다.
> 고지:

```text
INDEPENDENT PERSONAL PROJECT · NOT AN OFFICIAL HULL SERVICE
```

실제 에디터 화면, 입력·결과 비교, 제품 화면 영역 UI 순으로 자산을 우선한다.
자산이 없으면 `Asset needed`가 명확한 placeholder를 사용한다.
4단계 workflow를 `ol`로 구현한다.
Before/After 비교는 이미지 편집 도구 반복에서 브라우저 배치·조정·PNG 내보내기로 전환되는 구조를 보여준다.
기술 라인: `React · TypeScript · Konva · Zustand · Vitest · Playwright`
품질 설명은 최대 3개로 제한한다.
GitHub 링크만 제공한다. `LIVE DEMO` 버튼은 만들지 않는다.
피드백은 “사내 공유 과정에서 긍정적인 반응과 실무 활용 가능성에 대한 피드백을 받았습니다.” 수준으로 쓴다.
4.7 Growth & Tokyo
헤더:

```text
05 / GROWTH
WHAT CHANGED
IN EIGHT WEEKS.
```

핵심:

> 인턴십 전에는 개발을 주어진 기능을 구현하는 일로 생각했습니다. 이번 경험을 통해 조직의 변화와 사용자의 맥락을 이해하고, 현장의 반복 문제를 운영 가능한 소프트웨어로 바꾸는 것이 개발의 중요한 역할임을 배웠습니다.
> 변화:

```text
기능 구현 → 문제 정의
화면 제작 → 운영 설계
개발 관점 → 비즈니스 관점
```

Communication:

> JLPT N3 수준으로 업무 맥락을 따라갔지만 빠른 비즈니스 표현에는 어려움이 있었습니다. 기록하고 다시 확인하는 습관이 정확한 소통을 만든다는 것을 배웠습니다.
> Life in Daitabashi:
> 다이타바시에서 출퇴근하며 낯선 도시의 일상을 직접 꾸렸습니다. 도쿄에서의 생활은 기술 밖에서도 스스로 판단하고 적응하는 힘을 길러주었습니다.
> 다음 참가자에게:
> 일본어를 미리 준비하고, 현장에서 발견한 작은 불편을 기록해 두세요. 그 기록이 가장 좋은 프로젝트의 시작이 될 수 있습니다.
> 4.8 Thanks / Footer
> 마감 카피:

```text
I CAME TO BUILD.
I LEARNED TO SOLVE.
```

감사:

> HULL이었기에 가능했던 배움과 경험, 그리고 추억이었습니다. 새로운 시도를 믿고 지도해 주신 HULL 임직원 여러분께 진심으로 감사드립니다.
> 연락처:
> `sehyun2727@gmail.com`
> GitHub
> HULL WEBSITE
> 프로그램:

```text
2026 SUMMER INTERNSHIP IN TOKYO
HOSTED BY 대학 SW중심대학사업단
SUPPORTED BY JISA · 일본인턴십지원협회
```

고지:

```text
© 2026 Sung Sehyun.
Digital Signage Simulator is an independent personal project and is not an official HULL service.
```

5. 디자인 시스템
   콘셉트
   Bold Editorial / Japanese Business Minimal
   큰 영문 타이포
   편집형 그리드
   업무 맥락이 명확한 정보 밀도
   조용한 모션
   HULL green 포인트
   색상 (Sprint 2.1 갱신)

```css
--paper: #f2f0e8;
--paper-bright: #faf9f4;
--paper-sage: #e7eadc;
--ink: #11130f;
--ink-soft: #343830;
--muted: #656b60;
--line: rgba(17, 19, 15, 0.18);
--line-strong: rgba(17, 19, 15, 0.42);
--hull-green: #78972f;
--hull-green-deep: #4f681e;
--hull-green-light: #dce5bd;
--charcoal: #10130e;
--charcoal-raised: #1a1e17;
--off-white: #f8f7f0;
```

본문 대비 WCAG AA 이상
포인트 색은 전체 면적의 약 10%
초록색 장문 본문, 순수 검정·흰색의 과도한 대비를 피한다.

섹션별 tonal flow:

```text
Hero/Profile       warm paper
Story statement    dark (charcoal)
Experience         bright cream
Renewal            sage accent
FieldInsight       dark + gray field notes
Simulator          deep green-black
Growth             warm paper
Closing            dark
```

편집 요소(카드 반복 대신 사용): `00 / PROFILE` 같은 chapter number, story progress line, large outline number, image caption, date/location metadata, keyword marker, `OBSERVE → DEFINE → BUILD` 같은 process label. 모든 요소를 카드에 넣지 않는다. 과도한 그림자·글래스모피즘·그라데이션·파티클은 사용하지 않는다.

콘텐츠 밀도: content 최대 폭 1280~1440px, 12-column editorial grid, section padding 중복 제거, 제목과 첫 콘텐츠 사이 간격 축소, 사진 크기 확대, 밝은 section과 dark section의 대비 강화.
타이포그래피
영문: 프로젝트에 이미 있는 `Inter Tight`, `Archivo`, `Manrope` 우선
한국어·일본어: `Pretendard`, `Noto Sans KR`, `Noto Sans JP` 계열
외부 폰트를 불필요하게 늘리지 않는다.
H1은 굵고 줄간격을 좁게, 한글 본문은 1.65~1.8 줄간격으로 한다.
권장 토큰:

```css
--font-hero: clamp(3.8rem, 10vw, 9.5rem);
--font-section: clamp(2.4rem, 6vw, 6rem);
--font-subtitle: clamp(1.4rem, 2.4vw, 2.25rem);
--font-body: clamp(1rem, 1.2vw, 1.125rem);
--font-small: 0.78rem;
```

레이아웃

```css
--page-max: 1440px;
--content-max: 1180px;
--gutter: clamp(20px, 4vw, 64px);
--section-y: clamp(88px, 12vw, 180px);
```

12컬럼 CSS Grid
본문 최대 폭 65~~72ch
카드 반복보다 비대칭 그리드, 선, 큰 번호 사용
둥근 모서리는 0~~12px 범위에서 절제
브라우저 목업 외 그림자는 최소화
모션
허용:
IntersectionObserver reveal
짧은 선 확장
앵커 스크롤
매우 약한 이미지 parallax(모바일·reduced motion 제외)
금지:
긴 로딩 화면, 자동재생 영상, 무한 marquee
커서 추적, particle, 3D tilt, glassmorphism
글자 단위 애니메이션
강제 scroll snap 6. 반응형·접근성·성능
필수 확인 폭:

```text
360px / 390px / 768px / 1024px / 1440px
```

모바일 좌우 패딩 최소 20px
터치 대상 최소 44×44px
가로 스크롤 없음
이미지에 `width`·`height` 또는 `aspect-ratio`
Hero 이미지는 eager, 나머지는 lazy
의미 있는 이미지에는 구체적인 `alt`
장식 요소에는 빈 alt 또는 `aria-hidden`
H1은 1개
섹션은 `section`과 연결된 H2
프로젝트 단계는 순서 있는 `ol`
외부 링크는 새 창·`noopener noreferrer`
`:focus-visible` 명확히
`prefers-reduced-motion: reduce` 지원
Lighthouse 목표: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+ 7. 기술 구현
새 프로젝트는 다음을 우선한다.

```text
React + Vite + TypeScript
Semantic HTML
Vanilla CSS 또는 CSS Modules
GitHub Actions → GitHub Pages
```

권장 구조:

```text
src/
├── app/App.tsx
├── components/
├── sections/
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── WebsiteRenewal.tsx
│   ├── FieldInsight.tsx
│   ├── SignageSimulator.tsx
│   ├── Growth.tsx
│   └── Footer.tsx
├── content/portfolio.ts
├── styles/
└── main.tsx
public/images/
```

기존 저장소가 있으면 합리적인 기존 스택을 존중한다.
모든 실제 문구·링크·이미지 경로는 가능한 한 중앙화한다.
Router, 대형 UI 라이브러리, 복잡한 애니메이션 라이브러리를 단순 랜딩페이지 때문에 추가하지 않는다.
SEO title:
`성세현 | 2026 Tokyo Internship at HULL`
Description:
`HULL 웹사이트 리뉴얼부터 디지털 사이니지 영업 현장, 그리고 현장에서 발견한 문제를 소프트웨어로 해결한 성세현의 2026 도쿄 인턴십 기록.`
실제 배포 URL을 확인하기 전 canonical을 가짜로 고정하지 않는다.
`lang` 속성은 활성 locale에 맞춰 동적으로 변경한다(기본 `ko`). favicon, Open Graph 기본값을 구성한다.

7-1. 다국어(Localization) — Sprint 2.1 신설, 기존 "한국어 중심 단일 언어" 전제를 대체

지원 locale: `type Locale = 'ko' | 'ja' | 'en'` (기본값 `ko`). UI 표기는 `KO / JP / EN`, 내부 코드는 `ko / ja / en`(일본어는 `ja`로 저장하되 `JP`로 표시).

구현 방식:
- 무거운 i18n 라이브러리를 새로 설치하지 않는다. typed dictionary(`src/i18n/translations.ts`)와 React Context(`src/i18n/LanguageProvider.tsx`)로 구현한다.
- 외부 자동 번역 API, Google Translate 위젯을 사용하지 않는다. 모든 번역은 직접 작성한 데이터로 관리한다.
- 초기 언어: localStorage 저장값 → 없으면 `ko`. 브라우저 자동 감지는 사용하지 않는다.
- 언어 변경 시: 새로고침 없이 즉시 반영, scroll 위치·active section·레이아웃 유지, localStorage 저장, `<html lang>` 갱신, `document.title`/`meta[name=description]`/OG 메타 갱신.

번역 대상: header/nav, 언어 버튼 aria-label, Hero/Profile, story statement, bridge sentence, chapter label, 모든 section 제목·본문, 이미지 caption·alt, process label, disclaimer, footer, skip link, `document.title`, meta description, OG title/description. 번역 키를 빠뜨리지 않는다.

번역 원칙:
- 한국어를 직역한 어색한 일본어를 쓰지 않는다. 일본어 포트폴리오에서 자연스러운 문체(である/です・ます 통일)를 사용한다.
- 영어는 짧고 명확한 portfolio tone. 고유명사·기술명은 원문 유지.
- 번역 과정에서 사실이나 성과 수치를 추가하지 않는다. 고객사명·내부 정보를 새로 추가하지 않는다.

검수 대상 조합(최소): `390px × ko/ja/en`, `768px × ko/ja/en`, `1440px × ko/ja/en`. Hero 이름·역할 텍스트 overflow 없음, 일본어에 과도한 letter-spacing 없음, 영어 headline 줄바꿈 정상, mobile header에서 KO/JP/EN 항상 노출, horizontal overflow 없음.

8. 자산 관리
작업 시작 시 다음 확장자를 인벤토리한다.

```text
png, jpg, jpeg, webp, avif, gif, svg, mp4, mov, pdf
```

분류:

```text
profile
hull-before
hull-after
column-seo
simulator-ui
simulator-before-after
tokyo-life
logo-or-brand
unknown
needs-approval
```

파일명만 보고 용도를 단정하지 않는다. 중복·저해상도·개인정보·공개 허가 여부를 기록한다. 자산이 없으면 임의의 스톡·AI 이미지를 넣지 말고 placeholder를 사용한다.
권장 파일명:

```text
profile-sung-sehyun.webp
hull-before-home.webp
hull-after-home.webp
simulator-editor.webp
simulator-result.webp
tokyo-daitabashi-01.webp
```

9. 금지 사항
   장문의 타임라인, 숫자 카운터, skill progress bar
   근거 없는 SEO·영업 성과 수치
   가짜 고객 후기·기업 로고·회의 사진
   HULL 공식 서비스처럼 보이는 CTA
   실제 기능이 없는 Live Demo
   AI 자동 배치, 4점 원근 보정, 영상 내보내기 주장
   과도한 그라디언트·글래스모피즘
   모바일에서 읽을 수 없는 초소형 영문
   제공되지 않은 SNS 링크
   가짜 contact form
   자료가 없는 섹션을 임의 이미지로 채우기
   외부 자동 번역 API·위젯 사용 (Sprint 2.1)
   번역 과정에서 새로운 성과·수치·고객사 정보 추가 (Sprint 2.1)
10. 완료 기준
    콘텐츠
    [ ] 경험 → 문제 → 해결 → 성장 흐름이 즉시 이해된다.
    [ ] 7개 섹션을 넘지 않는다.
    [ ] SEO 미게시 상태를 성과처럼 표현하지 않는다.
    [ ] 시뮬레이터가 독립 개인 프로젝트임을 명시한다.
    [ ] 기업 기밀·고객 발언을 추측하지 않는다.
    [ ] JISA 목적에 필요한 프로필·업무·생활·회고·감사가 포함된다.
    디자인·기능
    [ ] 큰 영문 타이포와 편집 그리드가 적용된다.
    [ ] 아이보리·화이트·차콜·HULL green 체계가 일관된다.
    [ ] Simulator가 가장 강한 시각적 섹션이다.
    [ ] 모바일 360px에서 가로 스크롤이 없다.
    [ ] 앵커와 외부 링크가 정확하다.
    [ ] 키보드 포커스와 reduced motion이 동작한다.
    [ ] 깨진 이미지·404·콘솔 오류가 없다.
    [ ] 저장소 기준 lint/typecheck/test/build를 실행하고 결과를 보고한다.
    다국어 (Sprint 2.1)
    [ ] ko/ja/en 세 언어 모두 번역 키 누락 없이 전환된다.
    [ ] 언어 전환 시 새로고침 없이 즉시 반영되고 localStorage에 유지된다.
    [ ] `<html lang>`과 document title/meta가 활성 locale에 맞게 갱신된다.
    [ ] Hero가 프로필 사진 중심으로 재구성되고 원형 avatar가 아니다.
    [ ] HULL VISION 사진이 Hero가 아닌 FieldInsight에 있다.
11. 작업 방식 및 보고
    Read — 이 문서, README, package.json, 기존 코드, 자산을 읽는다.
    Inventory — 재사용 코드·이미지·누락 자산을 분류한다.
    Plan — 현재 스프린트 범위를 구체화한다.
    Implement — 기존 패턴을 존중하며 작은 단위로 구현한다.
    Verify — 사실성·반응형·접근성·빌드를 확인한다.
    Report — 구현 내용, 변경 파일, 검증 결과, 남은 자산만 간단히 보고한다.
    실제 정보가 없으면 사실을 만들지 말고 placeholder 또는 TODO로 남긴다.
