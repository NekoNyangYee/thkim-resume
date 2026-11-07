# TaeHyun Devlog 자료와 썸네일

사용자가 제공한 기간: 2025.01 — 현재. 개인 프로젝트이며 디자인부터 개발·배포까지 직접 진행했습니다.

## 스크린샷

첨부한 원본 4장의 순서는 메인, 아티클 상세, 아티클 목록, 검색 모달입니다. 브라우저 탭·주소창·북마크 바와 왼쪽 바깥 여백의 펫 오버레이, 오른쪽 스크롤 바를 제외하도록 동일한 영역을 잘랐습니다. 화면 내용은 다시 그리거나 보정하지 않았습니다.

- 원본 크기: 1920 × 1032
- 자른 영역: x=96, y=120, width=1808, height=912
- 적용 파일: public/projects/taehyun-devlog/screen-home.png, screen-article.png, screen-articles.png, screen-search.png
- 표시: 기존 2열 그리드, 모바일 1열, 각 화면의 캡션과 원본 링크

## 내용 근거

개발 배경은 사용자의 첫 번째 마크다운·Contentlayer 블로그 경험과 두 번째 블로그의 풀스택 학습 목적을 바탕으로 정리했습니다. 첫 블로그의 검색 클릭·노출 수치는 이 프로젝트의 성과로 옮기지 않았습니다.

확인한 저장소: https://github.com/NekoNyangYee/taehyun-devlog (master, 2026-11-08)

- package.json: 기술 스택
- queries/postQueries.ts, queries/postMutations.ts, queries/commentMutations.ts: 조회 범위, 좋아요·북마크·댓글과 캐시 갱신
- app/articles/_hooks/usePostsFilter.ts: URL 기반 카테고리 필터
- components/SearchBar.tsx: 제목 기반 검색
- lib/hooks/useLogin.ts: Google·Kakao OAuth
- app/articles/[category]/[id]/PostDetailClient.tsx: 본문 목차와 사용자 기능
- app/articles/[category]/[id]/page.tsx 및 og-image/route.tsx: 메타데이터·동적 OG 이미지
- lib/util/cloudinary.ts, next.config.mjs: 이미지 변환과 설정
- 서비스 주소는 사용자 스크린샷과 lib/siteUrl.ts의 https://thkim.localplayer.dev 사용

구현 유무를 코드에서 확인했으며 블로그 저장소의 기능 테스트를 새로 실행한 것은 아닙니다. 포트폴리오 자체의 빌드와 페이지 렌더링을 검증합니다.

## 썸네일

생성 방식: 내장 image_gen 도구 (imagegen 스킬)

입력: 크롭한 실제 메인 화면 public/projects/taehyun-devlog/screen-home.png

적용 파일: public/projects/taehyun-devlog/thumbnail.png

카드용 모니터 목업은 생성 이미지이고, 상세 페이지의 4장은 사용자가 제공한 화면 원본을 잘라 사용했습니다.

최종 프롬프트:

Use case: product-mockup. Create a polished wide 16:9 developer portfolio project thumbnail for "TaeHyun Devlog", a personal technical blog.
Supporting compositing input: the provided image is the real blog homepage with browser chrome already removed. Preserve the actual homepage composition, black Next.js feature image, Korean headline, white background, navigation, article list and popular sidebar inside the monitor. Do not invent an alternative interface.
Scene: single realistic graphite desktop monitor against a completely flat, single-color pale blue background (#D5E6FA), inspired by the blog's blue labels and links. Only a subtle grounding shadow. No desk, floating objects, extra cards, gradients, patterned background, labels, browser tabs, address bars, or bookmarks.
Composition: device in the lower two-thirds, centered, complete stand visible with generous bottom margin, device roughly 72% canvas width. Upper 25% has exactly two centered lines of clear typography:
line 1: "TaeHyun Devlog" large bold dark navy sans-serif.
line 2: "디자인부터 데이터까지 직접 만든 기술 블로그" smaller medium-weight dark navy Korean sans-serif.
Leave comfortable space between title, subtitle and monitor, avoid overlap. Strong legibility at small project-card scale. Entire image wide 16:9. No additional text outside the monitor.
