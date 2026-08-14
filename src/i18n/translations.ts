// Hand-written translation dictionary — see Claude.md §7-1. No auto-translation,
// no new facts/figures added during translation. Big English headlines (chapter
// labels, ALL-CAPS section titles, process labels, CTA/nav microcopy) are kept
// identical across locales as intentional "Bold Editorial" typography; body
// copy, captions, and alt text are fully localized.
import type { Locale, Translation } from './types'

const GITHUB_URL = 'https://github.com/sehyun2727/Digitalsignage-Simulater'

const ko: Translation = {
  meta: {
    title: '성세현 | 2026 Tokyo Internship at HULL',
    description:
      'HULL 웹사이트 리뉴얼부터 디지털 사이니지 영업 현장, 그리고 현장에서 발견한 문제를 소프트웨어로 해결한 성세현의 2026 도쿄 인턴십 기록.',
  },
  common: {
    skipLink: '본문으로 건너뛰기',
    githubLabel: 'GitHub ↗',
  },
  header: {
    navAriaLabel: '주요 내비게이션',
    nav: {
      experience: 'Experience',
      renewal: 'Renewal',
      simulator: 'Simulator',
      growth: 'Growth',
    },
    menuOpen: '메뉴 열기',
    menuClose: '메뉴 닫기',
    languageSwitcherAriaLabel: '언어 선택',
    languageNames: { ko: '한국어', ja: '일본어', en: '영어' },
  },
  hero: {
    chapterLabel: '00 / PROFILE',
    eyebrow: '2026 SUMMER INTERNSHIP · TOKYO',
    name: '성세현',
    subName: 'Sung Sehyun · 成世睍',
    roleLines: ['기술과 비즈니스 사이의 문제를', '직접 관찰하고 해결하는 개발자'],
    introLines: [
      '전남대학교 인공지능학부 소프트웨어전공 4학년으로,',
      '일본 HULL株式会社에서 웹 리뉴얼부터 SEO, 영업 현장,',
      '디지털 사이니지 시뮬레이터 개발까지 경험했습니다.',
    ],
    metadataRail: [
      { label: 'COMPANY', value: 'HULL株式会社' },
      { label: 'PERIOD', value: '2026.06.30—08.29' },
      { label: 'LOCATION', value: 'TOKYO, JAPAN' },
      { label: 'LANGUAGE', value: 'JLPT N3' },
    ],
    cta: { label: 'VIEW MY JOURNEY' },
    photoLabel: 'SUNG SEHYUN / TOKYO 2026',
  },
  storyBand: {
    titleLines: ['FROM CODE', 'TO BUSINESS.'],
    bodyLines: ['웹사이트를 만들고, 현장의 문제를 발견하고,', '작동하는 해결책으로 바꿨습니다.'],
  },
  bridges: {
    heroToExperience: '웹을 만드는 기술을 넘어, 회사의 변화를 이해하는 것부터 시작했습니다.',
    experienceToRenewal: '첫 번째 과제는 변화한 회사를 웹의 구조에 다시 담아내는 일이었습니다.',
    renewalToFieldInsight:
      '하지만 웹 안에서 회사를 이해하는 것만으로는 충분하지 않았습니다. 고객이 기술을 만나는 실제 현장으로 나갔습니다.',
    fieldInsightToSimulator: '현장을 관찰하자, 반복되는 한 가지 문제가 보이기 시작했습니다.',
    simulatorToGrowth: '작은 도구를 완성하는 과정은 개발을 바라보는 제 관점까지 바꾸었습니다.',
  },
  experience: {
    kicker: '01 / EXPERIENCE',
    title: 'WHAT I EXPERIENCED.',
    intro:
      'HULL에서 회사의 온라인 접점을 다시 설계하고, 콘텐츠 운영 기반을 만들었으며, 디지털 사이니지 영업 현장까지 경험했습니다.',
    axes: [
      {
        num: '01',
        code: 'RENEW',
        title: '회사 웹 리뉴얼',
        body: '새 조직과 사업 브랜드를 기준으로 정보 구조부터 디자인, 개발, 배포까지 담당했다.',
      },
      {
        num: '02',
        code: 'DISCOVER',
        title: '컬럼과 SEO 기반',
        body: '검색 노출을 위한 컬럼 구조와 분류 체계를 만들고 유지보수 매뉴얼을 정리했다.',
      },
      {
        num: '03',
        code: 'CONNECT',
        title: '영업 현장 동행',
        body: '자료 준비와 기록을 맡으며 웹에서 만든 메시지가 실제 고객에게 전달되는 과정을 관찰했다.',
      },
    ],
    strip: [
      'CHONNAM NATIONAL UNIVERSITY · SOFTWARE · 4TH YEAR · JLPT N3',
      'HOSTED BY SW-CENTERED UNIVERSITY PROJECT · SUPPORTED BY JISA',
    ],
    figureMeta: ['HULL株式会社 · TOKYO OFFICE', '2026 JAPAN GLOBAL INTERNSHIP PROGRAM'],
  },
  renewal: {
    kicker: '02 / WEBSITE RENEWAL',
    titleLines: ['A NEW STRUCTURE', 'FOR A CHANGING COMPANY.'],
    lead: '기존 사이트는 새롭게 바뀌는 조직과 사업 브랜드를 충분히 반영하지 못했습니다. HULL VISION과 HULL SPACE를 중심으로 정보 구조를 다시 설계하고, 기획부터 운영 서버 배포까지 전 과정을 맡았습니다.',
    flow: ['01 ANALYZE', '02 RESTRUCTURE', '03 BUILD', '04 DEPLOY'],
    subBlockTitle: 'BUILT TO BE CONTINUED.',
    subBlockBody:
      '검색 노출을 장기적인 콘텐츠 운영 문제로 보았습니다. 컬럼용 포스트 타입과 분류 체계를 구축하고, 담당자가 개발자 없이 이어서 운영할 수 있도록 유지보수 매뉴얼을 제작했습니다.',
    status: 'FOUNDATION BUILT · CONTENT NOT YET PUBLISHED',
    structureDiagram: {
      before: {
        heading: 'BEFORE',
        items: ['부서명 중심 구조', '조직 변화와 불일치', 'URL · 콘텐츠 관계 정리 필요'],
      },
      after: {
        heading: 'AFTER',
        items: [
          '사업 브랜드 중심 구조 (HULL VISION · HULL SPACE)',
          '명확한 정보 계층 · 사용자 흐름',
          '컬럼 확장과 검색을 고려한 URL 기반',
        ],
      },
    },
    techStack: [
      { label: 'CMS', value: 'WordPress · Gutenberg' },
      { label: 'CONTENT MODEL', value: 'CPT UI' },
      { label: 'STYLING & INTERACTION', value: 'CSS · Vanilla JS' },
      { label: 'DEV & DEPLOY', value: 'Local · Xserver' },
    ],
  },
  fieldInsight: {
    kicker: '03 / FIELD INSIGHT',
    observation: {
      titleLines: ['FROM THE SCREEN', 'TO THE SALES FLOOR.'],
      subhead: '웹 밖에서, 고객이 기술을 이해하는 과정을 보았습니다.',
      body: '디지털 사이니지 영업에 동행해 자료 준비와 기록, 현장 관찰을 담당했습니다. 고객에게 기술의 장점을 설명하는 과정에서 좋은 제품만큼 ‘설치 후의 모습’을 빠르고 명확하게 전달하는 일이 중요하다는 것을 배웠습니다.',
      rail: [
        { label: 'PREPARE', body: '고객과 공간을 이해하기 위한 자료 준비' },
        { label: 'OBSERVE', body: '설치 효과를 전달하는 영업 과정 관찰' },
        { label: 'DEFINE', body: '반복적인 시안 제작 과정에서 문제 발견' },
      ],
      securityNote: '고객사 보안상 내부 미팅 및 현장 사진은 포함하지 않았습니다.',
    },
    expo: {
      label: 'FIELD NOTES / AI·DX EXPO',
      title: '화면을 넘어 공간과 업무를 바꾸는 기술',
      body: 'AI/DX EXPO에서 디지털 사이니지와 자동화 기술의 실제 활용 사례를 살펴봤습니다. 기술의 가치는 기능 자체보다 현장의 정보를 명확하게 전달하고 반복 업무를 줄이는 데 있다는 점을 확인했습니다.',
    },
    transition: {
      label: 'OBSERVE → DEFINE → BUILD',
      titleLines: ["THE PROBLEM WASN'T", 'THE PRODUCT.', 'IT WAS THE PREVIEW.'],
      titleLocalLines: ['문제는 제품이 아니라,', '설치 후의 모습을 전달하는 과정에 있었습니다.'],
      body: '영업 자료를 준비할 때 고객 공간의 설치 전·후 모습을 이미지 편집으로 제작하는 과정에는 반복 작업이 필요했습니다. 고객이 설치 결과를 더 빠르게 이해할 수 있도록 이 과정을 하나의 도구로 전환할 수 있다고 판단했습니다.',
    },
  },
  simulator: {
    kicker: '04 / SIDE PROJECT',
    titleLines: ['FROM FIELD INSIGHT', 'TO WORKING SOFTWARE.'],
    projectNameLines: ['DIGITAL SIGNAGE', 'SIMULATOR.'],
    body: '영업 현장에서 본 반복 작업을 브라우저 기반 시뮬레이터로 바꾸었습니다. 공간 사진 위에 디스플레이를 배치하고 콘텐츠를 조정한 뒤, 설치 후 모습을 PNG 제안 이미지로 내보낼 수 있도록 직접 기획하고 개발했습니다.',
    disclaimer: 'INDEPENDENT PERSONAL PROJECT · NOT AN OFFICIAL HULL SERVICE',
    steps: [
      { num: '01', label: '공간 사진 불러오기' },
      { num: '02', label: '사이니지 또는 제품 배치' },
      { num: '03', label: '화면 콘텐츠와 크기 조정' },
      { num: '04', label: '제안 이미지 PNG 내보내기' },
    ],
    feedback: '사내 공유 과정에서 긍정적인 반응과 실무 활용 가능성에 대한 피드백을 받았습니다.',
    facts: [
      { label: 'STATUS', value: 'PRE-RELEASE · README에 배포 전 상태 명시' },
      { label: 'TYPE', value: '독립 개인 프로젝트' },
      { label: 'ROLE', value: '기획 · 개발 단독 진행' },
      { label: 'SOURCE', value: 'GitHub', href: GITHUB_URL },
    ],
    highlights: [
      '사용자 파일은 서버 업로드 없이 브라우저 내부에서 처리',
      'PNG 원본 해상도로 제안 이미지 내보내기',
      '일본어 기본, 한국어 · 영어 지원 구조',
    ],
    galleryCaptionBefore: 'BEFORE · 공간 사진 불러오기',
    galleryCaptionAfter: 'AFTER · 디스플레이 배치와 콘텐츠 조정',
  },
  growth: {
    kicker: '05 / GROWTH',
    titleLines: ['WHAT CHANGED', 'IN EIGHT WEEKS.'],
    lead: '인턴십 전에는 개발을 주어진 기능을 구현하는 일로 생각했습니다. 이번 경험을 통해 조직의 변화와 사용자의 맥락을 이해하고, 현장의 반복 문제를 운영 가능한 소프트웨어로 바꾸는 것이 개발의 중요한 역할임을 배웠습니다.',
    shifts: [
      { before: '기능 구현', after: '문제 정의' },
      { before: '화면 제작', after: '운영 설계' },
      { before: '개발 관점', after: '비즈니스 관점' },
    ],
    communication: {
      title: 'COMMUNICATION',
      body: 'JLPT N3 수준으로 업무 맥락을 따라갔지만 빠른 비즈니스 표현에는 어려움이 있었습니다. 기록하고 다시 확인하는 습관이 정확한 소통을 만든다는 것을 배웠습니다.',
    },
    life: {
      title: 'LIFE IN DAITABASHI',
      body: '다이타바시에서 출퇴근하며 낯선 도시의 일상을 직접 꾸렸습니다. 도쿄에서의 생활은 기술 밖에서도 스스로 판단하고 적응하는 힘을 길러주었습니다.',
    },
    advice: {
      title: 'TO THE NEXT PARTICIPANT',
      body: '일본어를 미리 준비하고, 현장에서 발견한 작은 불편을 기록해 두세요. 그 기록이 가장 좋은 프로젝트의 시작이 될 수 있습니다.',
    },
  },
  footer: {
    closingLines: ['I CAME TO BUILD.', 'I LEARNED TO SOLVE.'],
    thanks:
      'HULL이었기에 가능했던 배움과 경험, 그리고 추억이었습니다. 새로운 시도를 믿고 지도해 주신 HULL 임직원 여러분께 진심으로 감사드립니다.',
    contactsAriaLabel: '연락처',
    contactLabels: { email: 'sehyun2727@gmail.com', github: 'GitHub', hullWebsite: 'HULL WEBSITE' },
    programLines: [
      '2026 SUMMER INTERNSHIP IN TOKYO',
      'HOSTED BY 대학 SW중심대학사업단',
      'SUPPORTED BY JISA · 일본인턴십지원협회',
    ],
    noticeLines: [
      '© 2026 Sung Sehyun.',
      'Digital Signage Simulator is an independent personal project and is not an official HULL service.',
    ],
    closingMeta: 'TOKYO, JAPAN / 2026.06.30—08.29',
    backToTop: 'BACK TO TOP ↑',
    signatureRole: '2026 SUMMER INTERNSHIP · TOKYO',
  },
  images: {
    heroVisionTeam: {
      alt: 'HULL VISION 디지털 사이니지 앞에서 팀원들과 함께 촬영한 사진',
      label: 'HULL VISION / TOKYO',
      caption: 'FIELD RECORD 01',
    },
    experienceTeam: {
      alt: '2026 Japan Global Internship Program 배너를 들고 있는 HULL 팀원들',
      caption: '2026 JAPAN GLOBAL INTERNSHIP PROGRAM',
    },
    expoTeam: {
      alt: 'AI・DX EXPO 행사장에서 동료들과 함께 촬영한 단체 사진',
      caption: 'AI/DX EXPO에서 살펴본 일본의 현장 기술',
    },
    expoSignage: {
      alt: 'AI・DX EXPO에서 전시된 관광 안내용 디지털 사이니지 화면',
      caption: '정보와 공간을 연결하는 디지털 사이니지',
    },
    expoRobot: {
      alt: 'AI・DX EXPO에서 시연 중인 협동 로봇',
      caption: '반복 업무를 바꾸는 자동화 기술',
    },
    portrait: { alt: '성세현 프로필 사진' },
    renewalBefore: { alt: '리뉴얼 전 HULL 홈페이지 화면 캡처' },
    renewalAfter: { alt: '리뉴얼 후 HULL 홈페이지 화면 캡처' },
    simulatorBefore: { alt: '디지털 사이니지 시뮬레이터에서 공간 사진만 불러온 편집 화면' },
    simulatorAfter: {
      alt: '디지털 사이니지 시뮬레이터에서 디스플레이를 배치하고 콘텐츠를 조정한 편집 화면',
    },
  },
}

const ja: Translation = {
  meta: {
    title: '成世睍 | 2026年 東京インターンシップ at HULL',
    description:
      'HULLのウェブサイトリニューアルからデジタルサイネージの営業現場、そして現場で見つけた課題をソフトウェアで解決した成世睍の2026年東京インターンシップの記録。',
  },
  common: {
    skipLink: 'メインコンテンツへスキップ',
    githubLabel: 'GitHub ↗',
  },
  header: {
    navAriaLabel: 'メインナビゲーション',
    nav: {
      experience: 'Experience',
      renewal: 'Renewal',
      simulator: 'Simulator',
      growth: 'Growth',
    },
    menuOpen: 'メニューを開く',
    menuClose: 'メニューを閉じる',
    languageSwitcherAriaLabel: '言語選択',
    languageNames: { ko: '韓国語', ja: '日本語', en: '英語' },
  },
  hero: {
    chapterLabel: '00 / PROFILE',
    eyebrow: '2026 サマーインターンシップ · 東京',
    name: '成世睍',
    subName: 'Sung Sehyun · 성세현',
    roleLines: ['技術とビジネスの間にある課題を', '観察し、解決する開発者'],
    introLines: [
      '全南大学校 人工知能学部ソフトウェア専攻の4年生として、',
      '日本のHULL株式会社で、Webサイトのリニューアル、SEO、',
      '営業現場の体験、デジタルサイネージ・シミュレーターの開発に取り組みました。',
    ],
    metadataRail: [
      { label: 'COMPANY', value: 'HULL株式会社' },
      { label: 'PERIOD', value: '2026.06.30—08.29' },
      { label: 'LOCATION', value: '東京, 日本' },
      { label: 'LANGUAGE', value: 'JLPT N3' },
    ],
    cta: { label: 'VIEW MY JOURNEY' },
    photoLabel: 'SUNG SEHYUN / TOKYO 2026',
  },
  storyBand: {
    titleLines: ['FROM CODE', 'TO BUSINESS.'],
    bodyLines: ['ウェブサイトを作り、現場の課題を見つけ、', '動くソリューションに変えました。'],
  },
  bridges: {
    heroToExperience:
      'ウェブを作る技術だけでなく、会社の変化を理解することから始めました。',
    experienceToRenewal:
      '最初の課題は、変化した会社をウェブの構造に改めて落とし込むことでした。',
    renewalToFieldInsight:
      'しかし、ウェブの中だけで会社を理解するのでは十分ではありませんでした。顧客が技術と出会う実際の現場に出ました。',
    fieldInsightToSimulator: '現場を観察するうちに、繰り返される一つの問題が見えてきました。',
    simulatorToGrowth: '小さなツールを完成させる過程は、開発に対する私の視点そのものを変えました。',
  },
  experience: {
    kicker: '01 / EXPERIENCE',
    title: 'WHAT I EXPERIENCED.',
    intro:
      'HULLでは、会社のオンライン接点を再設計し、コンテンツ運用の基盤を整え、デジタルサイネージの営業現場まで経験しました。',
    axes: [
      {
        num: '01',
        code: 'RENEW',
        title: 'コーポレートサイトのリニューアル',
        body: '新しい組織と事業ブランドを基準に、情報構造からデザイン、開発、公開までを担当した。',
      },
      {
        num: '02',
        code: 'DISCOVER',
        title: 'コラムとSEOの基盤',
        body: '検索露出のためのコラム構造と分類体系を作り、運用マニュアルを整理した。',
      },
      {
        num: '03',
        code: 'CONNECT',
        title: '営業現場への同行',
        body: '資料準備と記録を担当しながら、ウェブで作ったメッセージが実際の顧客に伝わる過程を観察した。',
      },
    ],
    strip: [
      'CHONNAM NATIONAL UNIVERSITY · SOFTWARE · 4TH YEAR · JLPT N3',
      'HOSTED BY SW-CENTERED UNIVERSITY PROJECT · SUPPORTED BY JISA',
    ],
    figureMeta: ['HULL株式会社 · TOKYO OFFICE', '2026 JAPAN GLOBAL INTERNSHIP PROGRAM'],
  },
  renewal: {
    kicker: '02 / WEBSITE RENEWAL',
    titleLines: ['A NEW STRUCTURE', 'FOR A CHANGING COMPANY.'],
    lead: '既存のサイトは、新しく変化する組織と事業ブランドを十分に反映できていませんでした。HULL VISIONとHULL SPACEを中心に情報構造を再設計し、企画から本番サーバーへの反映まで全工程を担当しました。',
    flow: ['01 ANALYZE', '02 RESTRUCTURE', '03 BUILD', '04 DEPLOY'],
    subBlockTitle: 'BUILT TO BE CONTINUED.',
    subBlockBody:
      '検索露出を、短期的な成果ではなく長期的なコンテンツ運用の課題として捉えました。コラム用の投稿タイプと分類体系を構築し、担当者が開発者なしでも運用を続けられるよう、保守マニュアルを作成しました。',
    status: 'FOUNDATION BUILT · CONTENT NOT YET PUBLISHED',
    structureDiagram: {
      before: {
        heading: 'BEFORE',
        items: ['部署名中心の構造', '組織変化との不一致', 'URLとコンテンツの関係整理が必要'],
      },
      after: {
        heading: 'AFTER',
        items: [
          '事業ブランド中心の構造(HULL VISION・HULL SPACE)',
          '明確な情報階層・ユーザー導線',
          'コラム拡張と検索を考慮したURL設計',
        ],
      },
    },
    techStack: [
      { label: 'CMS', value: 'WordPress · Gutenberg' },
      { label: 'CONTENT MODEL', value: 'CPT UI' },
      { label: 'STYLING & INTERACTION', value: 'CSS · Vanilla JS' },
      { label: 'DEV & DEPLOY', value: 'Local · Xserver' },
    ],
  },
  fieldInsight: {
    kicker: '03 / FIELD INSIGHT',
    observation: {
      titleLines: ['FROM THE SCREEN', 'TO THE SALES FLOOR.'],
      subhead: 'ウェブの外で、顧客が技術を理解していく過程を見ました。',
      body: 'デジタルサイネージの営業に同行し、資料準備と記録、現場観察を担当しました。顧客に技術の強みを説明する過程で、良い製品と同じくらい「設置後の姿」を素早く明確に伝えることが重要だと学びました。',
      rail: [
        { label: 'PREPARE', body: '顧客と空間を理解するための資料準備' },
        { label: 'OBSERVE', body: '設置効果を伝える営業プロセスの観察' },
        { label: 'DEFINE', body: '繰り返される提案資料作成の中で課題を発見' },
      ],
      securityNote: '顧客企業のセキュリティ上の理由により、社内ミーティングや現場の写真は掲載していません。',
    },
    expo: {
      label: 'FIELD NOTES / AI·DX EXPO',
      title: '画面を超えて、空間と業務を変える技術',
      body: 'AI/DX EXPOでは、デジタルサイネージや自動化技術の実際の活用事例を見て回りました。技術の価値は機能そのものより、現場の情報を明確に伝え、繰り返し業務を減らすことにあると確認しました。',
    },
    transition: {
      label: 'OBSERVE → DEFINE → BUILD',
      titleLines: ["THE PROBLEM WASN'T", 'THE PRODUCT.', 'IT WAS THE PREVIEW.'],
      titleLocalLines: ['問題は製品ではなく、', '設置後の姿を伝えるプロセスにありました。'],
      body: '営業資料を準備する際、顧客の空間における設置前後の姿を画像編集で作る作業には、多くの繰り返し作業が必要でした。顧客が設置結果をより早く理解できるよう、このプロセスを一つのツールに置き換えられると考えました。',
    },
  },
  simulator: {
    kicker: '04 / SIDE PROJECT',
    titleLines: ['FROM FIELD INSIGHT', 'TO WORKING SOFTWARE.'],
    projectNameLines: ['DIGITAL SIGNAGE', 'SIMULATOR.'],
    body: '営業現場で見た繰り返し作業を、ブラウザベースのシミュレーターに置き換えました。空間写真の上にディスプレイを配置してコンテンツを調整し、設置後の姿をPNGの提案画像として書き出せるよう、自ら企画・開発しました。',
    disclaimer: 'INDEPENDENT PERSONAL PROJECT · NOT AN OFFICIAL HULL SERVICE',
    steps: [
      { num: '01', label: '空間写真を読み込む' },
      { num: '02', label: 'サイネージまたは製品を配置' },
      { num: '03', label: '画面コンテンツとサイズを調整' },
      { num: '04', label: '提案画像をPNGで書き出す' },
    ],
    feedback: '社内共有の過程で、好意的な反応と実務での活用可能性についてのフィードバックを受けました。',
    facts: [
      { label: 'STATUS', value: 'PRE-RELEASE・READMEに未公開状態を明記' },
      { label: 'TYPE', value: '独立した個人プロジェクト' },
      { label: 'ROLE', value: '企画・開発を単独で担当' },
      { label: 'SOURCE', value: 'GitHub', href: GITHUB_URL },
    ],
    highlights: [
      'ユーザーファイルはサーバーへのアップロードなしでブラウザ内で処理',
      'PNGを元の解像度で提案画像として書き出し',
      '日本語をデフォルトに、韓国語・英語にも対応',
    ],
    galleryCaptionBefore: 'BEFORE · 空間写真の読み込み',
    galleryCaptionAfter: 'AFTER · ディスプレイ配置とコンテンツ調整',
  },
  growth: {
    kicker: '05 / GROWTH',
    titleLines: ['WHAT CHANGED', 'IN EIGHT WEEKS.'],
    lead: 'インターンシップ以前は、開発を与えられた機能を実装する仕事だと考えていました。今回の経験を通じて、組織の変化とユーザーの文脈を理解し、現場の繰り返し課題を運用可能なソフトウェアに変えることこそが開発の重要な役割だと学びました。',
    shifts: [
      { before: '機能実装', after: '課題定義' },
      { before: '画面制作', after: '運用設計' },
      { before: '開発視点', after: 'ビジネス視点' },
    ],
    communication: {
      title: 'COMMUNICATION',
      body: 'JLPT N3レベルで業務の文脈は追えましたが、速いビジネス表現には苦労しました。記録して再確認する習慣が、正確なコミュニケーションを作ることを学びました。',
    },
    life: {
      title: 'LIFE IN DAITABASHI',
      body: '代田橋から通勤しながら、見知らぬ街での日常を自分の手で築きました。東京での生活は、技術の外でも自分で判断し適応する力を育ててくれました。',
    },
    advice: {
      title: 'TO THE NEXT PARTICIPANT',
      body: '日本語を事前に準備し、現場で見つけた小さな不便さを記録しておいてください。その記録が、最も良いプロジェクトの出発点になるかもしれません。',
    },
  },
  footer: {
    closingLines: ['I CAME TO BUILD.', 'I LEARNED TO SOLVE.'],
    thanks:
      'HULLだったからこそ可能だった学びと経験、そして思い出でした。新しい挑戦を信じ、導いてくださったHULLの皆様に心より感謝申し上げます。',
    contactsAriaLabel: '連絡先',
    contactLabels: { email: 'sehyun2727@gmail.com', github: 'GitHub', hullWebsite: 'HULL WEBSITE' },
    programLines: [
      '2026 SUMMER INTERNSHIP IN TOKYO',
      'HOSTED BY SW-Centered University Project',
      'SUPPORTED BY JISA(日本インターンシップ支援協会)',
    ],
    noticeLines: [
      '© 2026 Sung Sehyun.',
      'Digital Signage Simulator is an independent personal project and is not an official HULL service.',
    ],
    closingMeta: 'TOKYO, JAPAN / 2026.06.30—08.29',
    backToTop: 'BACK TO TOP ↑',
    signatureRole: '2026 SUMMER INTERNSHIP · TOKYO',
  },
  images: {
    heroVisionTeam: {
      alt: 'HULL VISIONのデジタルサイネージの前でチームメンバーと撮影した写真',
      label: 'HULL VISION / TOKYO',
      caption: 'FIELD RECORD 01',
    },
    experienceTeam: {
      alt: '「2026 Japan Global Internship Program」のバナーを持つHULLのチームメンバー',
      caption: '2026 JAPAN GLOBAL INTERNSHIP PROGRAM',
    },
    expoTeam: {
      alt: 'AI・DX EXPO会場で同僚と一緒に撮影した集合写真',
      caption: 'AI/DX EXPOで見た日本の現場技術',
    },
    expoSignage: {
      alt: 'AI・DX EXPOで展示された観光案内用デジタルサイネージの画面',
      caption: '情報と空間をつなぐデジタルサイネージ',
    },
    expoRobot: {
      alt: 'AI・DX EXPOでデモ中の協働ロボット',
      caption: '繰り返し業務を変える自動化技術',
    },
    portrait: { alt: '成世睍のプロフィール写真' },
    renewalBefore: { alt: 'リニューアル前のHULLホームページのスクリーンショット' },
    renewalAfter: { alt: 'リニューアル後のHULLホームページのスクリーンショット' },
    simulatorBefore: { alt: 'デジタルサイネージ・シミュレーターで空間写真のみを読み込んだ編集画面' },
    simulatorAfter: {
      alt: 'デジタルサイネージ・シミュレーターでディスプレイを配置し、コンテンツを調整した編集画面',
    },
  },
}

const en: Translation = {
  meta: {
    title: 'Sung Sehyun | 2026 Tokyo Internship at HULL',
    description:
      "From renewing HULL's website to observing digital signage sales in the field — Sung Sehyun's 2026 Tokyo internship record, including the software he built to solve a problem he found on-site.",
  },
  common: {
    skipLink: 'Skip to main content',
    githubLabel: 'GitHub ↗',
  },
  header: {
    navAriaLabel: 'Main navigation',
    nav: {
      experience: 'Experience',
      renewal: 'Renewal',
      simulator: 'Simulator',
      growth: 'Growth',
    },
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageSwitcherAriaLabel: 'Language selector',
    languageNames: { ko: 'Korean', ja: 'Japanese', en: 'English' },
  },
  hero: {
    chapterLabel: '00 / PROFILE',
    eyebrow: '2026 SUMMER INTERNSHIP · TOKYO',
    name: 'Sung Sehyun',
    subName: '성세현 · 成世睍',
    roleLines: [
      'A developer who observes and solves',
      'problems between technology and business',
    ],
    introLines: [
      'As a fourth-year Software major in the School of Artificial',
      'Intelligence at Chonnam National University, I worked at HULL',
      'Inc. in Japan on website renewal, SEO, field experience, and the',
      'development of a digital signage simulator.',
    ],
    metadataRail: [
      { label: 'COMPANY', value: 'HULL Inc.' },
      { label: 'PERIOD', value: '2026.06.30–08.29' },
      { label: 'LOCATION', value: 'Tokyo, Japan' },
      { label: 'LANGUAGE', value: 'JLPT N3' },
    ],
    cta: { label: 'VIEW MY JOURNEY' },
    photoLabel: 'SUNG SEHYUN / TOKYO 2026',
  },
  storyBand: {
    titleLines: ['FROM CODE', 'TO BUSINESS.'],
    bodyLines: [
      'I built a website, found a problem in the field,',
      'and turned it into a working solution.',
    ],
  },
  bridges: {
    heroToExperience:
      'It started not just with the skill to build the web, but with understanding how the company was changing.',
    experienceToRenewal:
      "The first task was to reflect the company's transformation in the structure of the website.",
    renewalToFieldInsight:
      "But understanding the company through the web alone wasn't enough. I went out to where customers actually encounter the technology.",
    fieldInsightToSimulator: 'Observing the field, one recurring problem began to stand out.',
    simulatorToGrowth: 'Building this small tool changed the way I see development itself.',
  },
  experience: {
    kicker: '01 / EXPERIENCE',
    title: 'WHAT I EXPERIENCED.',
    intro:
      "At HULL, I redesigned the company's online touchpoints, built a foundation for content operations, and experienced the digital signage sales field firsthand.",
    axes: [
      {
        num: '01',
        code: 'RENEW',
        title: 'Company Website Renewal',
        body: 'Handled everything from information architecture to design, development, and deployment based on the new organization and business brand.',
      },
      {
        num: '02',
        code: 'DISCOVER',
        title: 'Columns & SEO Foundation',
        body: 'Built a column structure and taxonomy for search visibility, and put together a maintenance manual.',
      },
      {
        num: '03',
        code: 'CONNECT',
        title: 'Field Sales Visits',
        body: 'Prepared materials and kept records, observing how the message built on the web actually reached real customers.',
      },
    ],
    strip: [
      'CHONNAM NATIONAL UNIVERSITY · SOFTWARE · 4TH YEAR · JLPT N3',
      'HOSTED BY SW-CENTERED UNIVERSITY PROJECT · SUPPORTED BY JISA',
    ],
    figureMeta: ['HULL Inc. · TOKYO OFFICE', '2026 JAPAN GLOBAL INTERNSHIP PROGRAM'],
  },
  renewal: {
    kicker: '02 / WEBSITE RENEWAL',
    titleLines: ['A NEW STRUCTURE', 'FOR A CHANGING COMPANY.'],
    lead: "The existing site didn't fully reflect the company's changing organization and business brands. I redesigned the information architecture around HULL VISION and HULL SPACE, handling everything from planning to production deployment.",
    flow: ['01 ANALYZE', '02 RESTRUCTURE', '03 BUILD', '04 DEPLOY'],
    subBlockTitle: 'BUILT TO BE CONTINUED.',
    subBlockBody:
      'I treated search visibility as a long-term content operations problem, not a short-term result. I built a custom post type and taxonomy for the columns, and wrote a maintenance manual so staff could keep running it without a developer.',
    status: 'FOUNDATION BUILT · CONTENT NOT YET PUBLISHED',
    structureDiagram: {
      before: {
        heading: 'BEFORE',
        items: [
          'Department-name-centric structure',
          'Misaligned with organizational change',
          'URL–content relationships needed cleanup',
        ],
      },
      after: {
        heading: 'AFTER',
        items: [
          'Business-brand-centric structure (HULL VISION · HULL SPACE)',
          'Clear information hierarchy and user flow',
          'URL foundation designed for column growth and search',
        ],
      },
    },
    techStack: [
      { label: 'CMS', value: 'WordPress · Gutenberg' },
      { label: 'CONTENT MODEL', value: 'CPT UI' },
      { label: 'STYLING & INTERACTION', value: 'CSS · Vanilla JS' },
      { label: 'DEV & DEPLOY', value: 'Local · Xserver' },
    ],
  },
  fieldInsight: {
    kicker: '03 / FIELD INSIGHT',
    observation: {
      titleLines: ['FROM THE SCREEN', 'TO THE SALES FLOOR.'],
      subhead: 'Outside the web, I watched how customers came to understand the technology.',
      body: "I accompanied digital signage sales visits, preparing materials, keeping records, and observing the field. In explaining the technology's strengths to customers, I learned that showing what it looks like after installation — quickly and clearly — matters as much as the product itself.",
      rail: [
        { label: 'PREPARE', body: 'Preparing materials to understand the customer and space' },
        { label: 'OBSERVE', body: 'Observing how sales conveys the effect of installation' },
        { label: 'DEFINE', body: 'Spotting the problem in repeated mockup creation' },
      ],
      securityNote: 'For client confidentiality, internal meeting and on-site photos are not included.',
    },
    expo: {
      label: 'FIELD NOTES / AI·DX EXPO',
      title: 'Technology that transforms space and work, beyond the screen',
      body: "At the AI/DX EXPO, I looked at real-world use cases of digital signage and automation technology. I confirmed that a technology's value lies less in its features and more in how clearly it conveys on-site information and reduces repetitive work.",
    },
    transition: {
      label: 'OBSERVE → DEFINE → BUILD',
      titleLines: ["THE PROBLEM WASN'T", 'THE PRODUCT.', 'IT WAS THE PREVIEW.'],
      titleLocalLines: [
        "The problem wasn't the product —",
        'it was the process of showing what comes after installation.',
      ],
      body: "Preparing sales materials meant repeatedly recreating before/after images of a customer's space by hand in an image editor. I saw an opportunity to turn that process into a tool, so customers could understand the result faster.",
    },
  },
  simulator: {
    kicker: '04 / SIDE PROJECT',
    titleLines: ['FROM FIELD INSIGHT', 'TO WORKING SOFTWARE.'],
    projectNameLines: ['DIGITAL SIGNAGE', 'SIMULATOR.'],
    body: 'I turned the repetitive work I saw in the field into a browser-based simulator. It lets you place a display over a photo of the space, adjust its content, and export the result as a PNG proposal image — I planned and built it myself.',
    disclaimer: 'INDEPENDENT PERSONAL PROJECT · NOT AN OFFICIAL HULL SERVICE',
    steps: [
      { num: '01', label: 'Load a photo of the space' },
      { num: '02', label: 'Place signage or product' },
      { num: '03', label: 'Adjust screen content & size' },
      { num: '04', label: 'Export the proposal as PNG' },
    ],
    feedback:
      'When I shared it internally, I received positive feedback about its potential for practical use.',
    facts: [
      { label: 'STATUS', value: 'PRE-RELEASE · noted in README as not yet deployed' },
      { label: 'TYPE', value: 'Independent personal project' },
      { label: 'ROLE', value: 'Solo planning & development' },
      { label: 'SOURCE', value: 'GitHub', href: GITHUB_URL },
    ],
    highlights: [
      'User files are processed entirely in the browser — no server upload',
      'Exports the proposal image at full PNG resolution',
      'Japanese by default, with Korean and English support built in',
    ],
    galleryCaptionBefore: 'BEFORE · Loading the space photo',
    galleryCaptionAfter: 'AFTER · Placing the display & adjusting content',
  },
  growth: {
    kicker: '05 / GROWTH',
    titleLines: ['WHAT CHANGED', 'IN EIGHT WEEKS.'],
    lead: 'Before the internship, I thought of development as implementing given features. Through this experience, I learned that understanding organizational change and user context — and turning a recurring problem in the field into operable software — is an important part of what development means.',
    shifts: [
      { before: 'Implementing features', after: 'Defining problems' },
      { before: 'Building screens', after: 'Designing operations' },
      { before: "Developer's viewpoint", after: 'Business viewpoint' },
    ],
    communication: {
      title: 'COMMUNICATION',
      body: 'With JLPT N3-level Japanese, I could follow the business context, but fast, idiomatic business expressions were harder to catch. I learned that recording and double-checking builds accurate communication.',
    },
    life: {
      title: 'LIFE IN DAITABASHI',
      body: 'Commuting from Daitabashi, I built my own daily routine in an unfamiliar city. Living in Tokyo grew my ability to judge and adapt for myself, even outside of technical work.',
    },
    advice: {
      title: 'TO THE NEXT PARTICIPANT',
      body: 'Prepare your Japanese in advance, and write down the small frictions you notice in the field. That record can become the start of your best project.',
    },
  },
  footer: {
    closingLines: ['I CAME TO BUILD.', 'I LEARNED TO SOLVE.'],
    thanks:
      'This learning, experience, and memory were only possible because of HULL. My heartfelt thanks to everyone at HULL who trusted and guided me through new challenges.',
    contactsAriaLabel: 'Contact',
    contactLabels: { email: 'sehyun2727@gmail.com', github: 'GitHub', hullWebsite: 'HULL WEBSITE' },
    programLines: [
      '2026 SUMMER INTERNSHIP IN TOKYO',
      'HOSTED BY SW-Centered University Project',
      'SUPPORTED BY JISA (Japan Internship Support Association)',
    ],
    noticeLines: [
      '© 2026 Sung Sehyun.',
      'Digital Signage Simulator is an independent personal project and is not an official HULL service.',
    ],
    closingMeta: 'TOKYO, JAPAN / 2026.06.30—08.29',
    backToTop: 'BACK TO TOP ↑',
    signatureRole: '2026 SUMMER INTERNSHIP · TOKYO',
  },
  images: {
    heroVisionTeam: {
      alt: 'Photo with team members in front of the HULL VISION digital signage',
      label: 'HULL VISION / TOKYO',
      caption: 'FIELD RECORD 01',
    },
    experienceTeam: {
      alt: 'HULL team members holding a "2026 Japan Global Internship Program" banner',
      caption: '2026 JAPAN GLOBAL INTERNSHIP PROGRAM',
    },
    expoTeam: {
      alt: 'Group photo with colleagues at the AI/DX EXPO venue',
      caption: 'On-site technology in Japan, seen at AI/DX EXPO',
    },
    expoSignage: {
      alt: 'A tourist-information digital signage display shown at AI/DX EXPO',
      caption: 'Digital signage that connects information and space',
    },
    expoRobot: {
      alt: 'A collaborative robot demonstrated at AI/DX EXPO',
      caption: 'Automation technology that transforms repetitive work',
    },
    portrait: { alt: "Sung Sehyun's profile photo" },
    renewalBefore: { alt: 'Screenshot of the HULL homepage before the renewal' },
    renewalAfter: { alt: 'Screenshot of the HULL homepage after the renewal' },
    simulatorBefore: {
      alt: 'The editor screen with only the space photo loaded in the Digital Signage Simulator',
    },
    simulatorAfter: {
      alt: 'The editor screen after placing a display and adjusting content in the Digital Signage Simulator',
    },
  },
}

export const translations: Record<Locale, Translation> = { ko, ja, en }
