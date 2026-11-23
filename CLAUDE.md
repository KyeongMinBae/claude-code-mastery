# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성 (README, ROADMAP 등)
- **변수명 / 함수명**: 영어 (코드 표준 준수)

## 프로젝트 개요

개발자 웹 이력서(정적 웹 페이지)를 만드는 프로젝트입니다.

- **기술 스택**: HTML5, CSS / Tailwind CSS, JavaScript (ES6+)
- **개발 로드맵**: `ROADMAP.md` 참고 (단계별 체크리스트와 목표 프로젝트 구조 포함)
- **현재 상태**: `index.html`에 이력서 전체 섹션(소개, 기술 스택, 경력, 프로젝트, 학력, SNS, 연락처)과 헤더 내비게이션이 구현되어 있습니다. 내용은 아직 `[이름]` 등 placeholder입니다.

## 명령어

현재 빌드, 린트, 테스트 설정 파일(`package.json` 등)이 없으므로 별도의 빌드/테스트 명령은 없습니다. 확인은 브라우저에서 `index.html`을 직접 열어 수행합니다.

Tailwind CSS를 CLI 빌드로 전환하면 이 섹션에 빌드 명령을 추가합니다.

## 아키텍처

- 빌드 단계가 없는 정적 사이트입니다. 루트의 `index.html`이 진입점입니다.
- `ROADMAP.md`의 목표 구조를 따릅니다: `css/style.css`(커스텀 스타일), `js/main.js`(인터랙션), `assets/images/`(이미지). `css/style.css`, `js/main.js`는 생성되었고, `assets/images/`는 폴더만 준비되어 있습니다.
- 스타일은 Tailwind 유틸리티 클래스를 우선 사용하고, Tailwind로 표현하기 어려운 경우에만 `css/style.css`를 사용합니다.
- 이력서 내용은 `[이름]`, `[회사명]` 등 placeholder 형태로 작성되며, 실제 값으로 교체하면서 완성합니다.
