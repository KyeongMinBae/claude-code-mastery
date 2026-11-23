# 개발자 웹 이력서 ROADMAP

개발자 웹 이력서를 단계별로 만들기 위한 개발 로드맵입니다.

## 기술 스택

- **HTML5**: 페이지 구조 (시맨틱 태그 사용)
- **CSS / Tailwind CSS**: 스타일링 (Tailwind CDN 또는 CLI 빌드)
- **JavaScript (ES6+)**: 인터랙션 (메뉴, 스크롤 애니메이션, 다크 모드 등)

## 프로젝트 구조 (목표)

```
claude-code-mastery/
├── index.html        # 메인 이력서 페이지
├── css/
│   └── style.css     # Tailwind 외 커스텀 스타일 (필요 시)
├── js/
│   └── main.js       # 인터랙션 스크립트
├── assets/
│   └── images/       # 프로필 사진, 프로젝트 썸네일
└── ROADMAP.md
```

## 이력서 구성 (기본 내용)

| 섹션 | 포함 내용 |
| --- | --- |
| 헤더 (Hero) | 이름, 직무(예: 프론트엔드 개발자), 한 줄 소개, 연락처 |
| 소개 (About) | 간단한 자기소개 및 개발 관심 분야 |
| 기술 스택 (Skills) | HTML, CSS, JavaScript, Tailwind CSS 등 보유 기술 |
| 경력 (Experience) | 회사명, 기간, 담당 업무 |
| 프로젝트 (Projects) | 프로젝트명, 설명, 사용 기술, GitHub/데모 링크 |
| 학력 / 자격증 (Education) | 학교, 전공, 기간 / 자격증 목록 |
| 연락처 (Contact) | 이메일, GitHub, LinkedIn, 블로그 |

> 실제 내용은 `[이름]`, `[회사명]` 등 placeholder를 채워 넣으면 됩니다.

---

## Phase 1. 기획 및 준비

- [ ] 이력서 섹션 및 디자인 방향 확정 (색상, 폰트, 레이아웃)
- [ ] 프로필 사진 및 프로젝트 이미지 준비
- [ ] 이력서 텍스트 내용 정리 (placeholder 값 확정)

## Phase 2. 기본 마크업 (HTML)

- [ ] `index.html` 기본 구조 작성 (`<!DOCTYPE html>`, `lang="ko"`, meta viewport)
- [ ] 시맨틱 태그로 섹션 구성 (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] 각 섹션(Hero, About, Skills, Experience, Projects, Education, Contact) 마크업 작성
- [ ] 접근성 기본 점검 (`alt` 속성, 제목 계층 `h1`→`h2`→`h3`, 링크 텍스트)

## Phase 3. 스타일링 (Tailwind CSS)

- [ ] Tailwind CSS 적용 (CDN으로 시작, 추후 CLI 빌드로 전환 가능)
- [ ] 공통 레이아웃: 최대 너비 컨테이너, 섹션 간격, 타이포그래피 설정
- [ ] 반응형 디자인 적용 (모바일 `sm` / 태블릿 `md` / 데스크톱 `lg` breakpoint)
- [ ] 기술 스택 뱃지, 프로젝트 카드 등 재사용 컴포넌트 스타일링
- [ ] 필요 시 `css/style.css`에 커스텀 스타일 추가

## Phase 4. 인터랙션 (JavaScript)

- [ ] 모바일 네비게이션 메뉴 토글
- [ ] 스크롤 시 헤더 고정 또는 현재 섹션 하이라이트
- [ ] 섹션 진입 시 페이드인 애니메이션 (IntersectionObserver 활용)
- [ ] 다크 모드 토글 (`localStorage`에 사용자 선택 저장)
- [ ] 연락처 이메일 복사 버튼 (선택)

## Phase 5. 품질 점검

- [ ] 크로스 브라우저 확인 (Chrome, Edge, Safari, Firefox)
- [ ] 모바일 / 태블릿 / 데스크톱 레이아웃 확인
- [ ] Lighthouse 점검 (성능, 접근성, SEO 80점 이상 목표)
- [ ] 링크 및 외부 리소스 동작 확인
- [ ] 오타 및 내용 최종 검토

## Phase 6. 배포

- [ ] GitHub 저장소에 push
- [ ] GitHub Pages 또는 Netlify / Vercel로 배포
- [ ] 배포 URL을 README 및 이력서 연락처에 추가
- [ ] SEO 기본 설정 (`<title>`, `<meta name="description">`, Open Graph 태그)

## 향후 확장 아이디어 (선택)

- [ ] 다국어 지원 (한국어 / 영어)
- [ ] 프로젝트 상세 페이지 분리
- [ ] 블로그 또는 최신 GitHub 활동 피드 연동
- [ ] PDF 이력서 다운로드 버튼 추가
