# My Portfolio — React 19

프론트엔드 개발 경험과 논문·학회·수상을 함께 소개하는 개인 포트폴리오입니다.

프로젝트·논문·수상을 각각 카드에 담는 레이아웃입니다. 제목은 한글로만 표시하며 기술명과 실제 외부 서비스 이름만 영문을 사용합니다.

## 실행

```powershell
npm install
npm run dev
```

터미널에 표시된 로컬 주소를 브라우저에서 엽니다.

```powershell
npm run build
npm run preview
```

## 내용 수정

[src/data/portfolio.ts](src/data/portfolio.ts)에서 이름, 소개, 연락처, 프로젝트, 논문·학회, 수상, 기술, 학력·경력을 수정합니다. 김태현님의 연락처, Secupipeline 프로젝트, 논문·학회 5건, 수상 8건, 기술 14개, 청주대학교 디지털보안학과(2021.03 — 현재)와 클라우드에어 주식회사 풀스택·MSP 엔지니어 경력(2026.05 — 현재)은 제공된 실제 정보입니다. 자기소개는 서비스 운영 경험과 본인 담당 업무로 정리했으며, 검색 성과는 사용자가 제공한 2024.12~2026.04 실적입니다. 샘플 프로젝트는 제거했습니다.

- 비어 있는 이메일·GitHub는 준비 중인 텍스트로 표시합니다.
- 논문 카드 하단에는 정보 링크와 자료 링크가 나란히 표시됩니다. `attachments`에 PDF의 `label`, `url`을 지정하세요. 실제 파일은 `public/research`에서 관리합니다. 2025년 12월 발표자료와 AsiaSim 2026 최종 제출 논문을 연결했습니다.
- 2025년 9월 30일 SOHO·Wi-Fi 라우터 연구와 2026년 6월 4~5일 SBOM·NVD 연구의 원본 PDF도 연결했습니다. 9월 논문 제목은 파일명의 Caldera 대신 PDF 본문의 MITRE ATT&CK 표기를 사용합니다.
- 2026년 5월 8일 OWASP Top 10 연구에는 `ciscs2026-cicd-security.pdf`를 원문 링크로 연결했습니다.
- 논문 저자 순위 문구는 표시하지 않으며 전체 저자 목록에서 본인 이름만 강조합니다. `authorPosition`은 강조할 저자의 위치를 지정하는 내부 데이터입니다.
- 기술은 프론트엔드, 백엔드, 데이터·백엔드 서비스, 개발·배포, 협업·디자인의 5개 분야로 분류합니다. `skills.items` 배열의 항목을 작은 배지로 표시합니다.
- 수상은 연도 구분 없이 날짜 오름차순으로 표시합니다. 수상명과 날짜는 카드 상단 전체 너비에 배치하고, 그 아래 본문만 flex로 구성해 텍스트 오른쪽에 작은 상장 썸네일을 표시합니다. `participants`에는 참석자와 역할을 기록합니다. `evidence`에는 원본 `url`, 미리보기 `preview`, 링크 `label`을 지정합니다. 썸네일 클릭 시 원본이 열리며 다운로드 링크는 텍스트 아래에 표시합니다.
- 상장 8건은 `public/awards`에 원본과 WebP 미리보기로 연결했습니다. 앙트레프레너상은 `image6.png`를 연결했습니다. 학습동아리 상장은 원본 6쪽 중 김태현님의 5쪽을 미리보기로 사용하며 다운로드는 제공된 원본 묶음입니다. 중복 파일 `image3.png`는 `image.png`와 동일하여 한 번만 사용했습니다. `sourceFiles`는 기존 전달 파일명을 기록한 참고 정보입니다.
- 2025년 우수논문발표상과 2025년 11월 26일 글로컬 창업캠프 경진대회는 사용자 요청에 따라 제외했습니다. 현재 수상은 2026년 2건, 2025년 6건입니다.
- 프로젝트의 links에 실제 URL을 추가하면 외부 링크가 표시됩니다.
- 프로젝트 카드 상단에는 16:9 대표 이미지 공간이 있습니다. `public/projects` 폴더에 이미지를 넣고 프로젝트의 `image`를 `/projects/파일명.webp`처럼 지정하세요. `imageAlt`에는 화면 설명을 적습니다. 이미지가 없거나 로드되지 않으면 기본 안내가 표시됩니다.
- 프로젝트는 데스크톱에서 3열, 태블릿에서 2열, 모바일에서 1열로 배치합니다.
- 각 프로젝트의 `slug`는 고유한 영문·숫자·하이픈으로 지정하세요. 카드를 클릭하면 `/projects/slug` 상세 페이지로 이동하며 `contributions`가 상세 본문으로 표시됩니다.
- Secupipeline 상세 주소는 `/projects/secupipeline`입니다. `summary`는 목록 요약, `description`은 서비스 설명, `roleDescription`은 본인 담당 범위이며 `technologyGroups`로 분야별 기술을 표시합니다. 대표 이미지는 `public/projects/secupipeline/thumbnail-v2.png`입니다.
- Secupipeline 상세 하단의 `screenshots`에는 전달된 원본 스크린샷 4장을 2열 그리드(모바일 1열)로 배치했습니다. 시작 화면, 저장소 관리, 실행 로그, 보안 분석 결과의 캡션을 표시하고 클릭하면 원본 이미지가 새 탭으로 열립니다. 원본은 `public/projects/secupipeline/screen-*.png`에 보관합니다.
- `background`에는 외부 보안 도구 연동의 번거로움과 기능 제약을 보완하기 위해 자체 CI/CD 엔진을 개발한 배경을 기록했습니다. 본인 작업은 `contributions`, 팀의 서비스 기능은 `features`에 따로 기록합니다.
- Secupipeline의 `contributions`는 주요 작업 5건입니다. Electron 앱 화면, 보안 통합 CI/CD 엔진, 실시간 로그 모니터링, 실행 이력 저장, 로그·상태 안정화로 정리했으며 상세 페이지에서 2열 카드(모바일 1열)로 표시합니다.
- 이름 오른쪽 사진은 가로:세로 3:4 비율입니다. 전달한 사진 원본을 `public/profile.jpg`에 복사해 연결했습니다. 원본 파일을 변형하지 않고 CSS 프레임에서 비율을 맞춥니다. `photoAlt`에는 사진 설명을 적습니다.
- 메인 하단과 프로젝트 상세 상단의 인쇄 · PDF 저장 버튼은 브라우저 인쇄 기능을 엽니다.
- 글꼴은 Google Fonts를 사용하며 연결할 수 없으면 시스템 글꼴로 표시됩니다.

## 파일

- src/App.tsx: 문서 구조
- src/App.css: 반응형 레이아웃과 인쇄 스타일
- src/index.css: 공통 스타일과 글꼴
- src/data/portfolio.ts: 교체할 콘텐츠
- docs/portfolio-research.md: 초기 조사 자료

React 19 / TypeScript / Vite 기반입니다. 외부 배포는 진행하지 않았습니다.

## 상세 주소 배포 설정

페이지 이동은 일반 링크로 이루어집니다. Vite 개발 서버와 `npm run preview`에서는 상세 주소 직접 접속과 새로고침을 지원합니다. 추후 정적 호스팅에 배포할 때는 `/projects/*` 요청도 `index.html`로 연결하는 SPA fallback 설정이 필요합니다.

