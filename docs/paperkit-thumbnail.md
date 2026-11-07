# Paperkit 썸네일과 자료 출처

생성 방식: 내장 image_gen 도구 (imagegen 스킬)

적용 파일: public/projects/paperkit/thumbnail.png

입력: public/projects/paperkit/screen-home.png — 실행 중인 Paperkit 앱의 실제 시작 화면입니다. 상세 페이지의 화면 원본과 카드용 생성 목업은 구분합니다.

최종 프롬프트:

Use case: product-mockup. Asset: wide 16:9 portfolio project thumbnail, for Paperkit, a Windows PDF editor.
Input image 1 is a supporting compositing input: the real Paperkit application start screen. Place this precise screen inside one realistic desktop monitor, preserving its Korean upload screen and light warm interface without inventing editing UI.
Scene: a single flat deep forest-green background matching the app's signature green (#005b46). One graphite metal desktop monitor centered in the lower two-thirds, fully visible including stand, with soft subtle grounding shadow. Straight-on view, slight studio product perspective, clean premium product photograph. No desk, extra props, gradients, decorative blobs, badges or floating cards.
Composition: leave upper 25% clear for exactly two centered lines, generous padding and line spacing, no overlap with monitor. Large bold warm-white sans-serif title "Paperkit". Beneath it smaller clear Korean warm-white sans-serif text "문서 변환 없이, PDF를 바로 편집".
The monitor should occupy roughly 70% of canvas width and its complete silhouette should fit in the lower 68% with generous bottom and side margins. Keep all content well inside a centered 16:9 safe area, as this image will appear on a portfolio card.
Keep the real app screen recognizable and do not claim OCR, AI editing, or free unlimited availability anywhere. Do not add any other text outside the monitor.

내용 근거:

- 개발 배경과 무료·무제한 제공 목표: 사용자가 전달한 경험과 개발 방향. 유료 서비스의 시장 비율은 주장하지 않습니다.
- 구현 기능과 한계: https://github.com/NekoNyangYee/Paperkit 의 README.md, ARCHITECTURE.md, crates/pdf-core/README.md, .github/releases/README.md 및 apps/desktop/package.json (2026-11-08 확인).
- OCR은 개발 동기이며 현재 지원 기능이 아닙니다. PDFium 기반 엔진으로, PDFium 자체를 새로 구현한 것으로 표현하지 않습니다.
- 정확한 개발 시작일은 전달되지 않아 기간은 ‘개발·개선 중’으로 표시합니다.
