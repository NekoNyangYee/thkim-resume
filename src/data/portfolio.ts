export type PortfolioLink = { label: string; url: string }

export type Project = {
  slug: string
  name: string
  subtitle?: string
  summary?: string
  image?: string
  imageAlt?: string
  period: string
  context: string
  roleDescription?: string
  background?: { problem: string; approach: string }
  description: string
  technologies: string[]
  technologyGroups?: { category: string; items: string[] }[]
  contributions: { title: string; description: string }[]
  contributionsHeading?: string
  featuresHeading?: string
  features?: { title: string; description: string }[]
  screenshots?: { src: string; title: string; caption: string; width?: number; height?: number }[]
  links: PortfolioLink[]
}

export type ResearchEntry = {
  date: string
  title: string
  venue: string
  authors: string[]
  authorPosition: number
  link: PortfolioLink
  attachments?: PortfolioLink[]
}

export type Award = {
  date: string
  title: string
  event: string
  participants: { name: string; role?: string }[]
  // 파일명만 전달된 자료입니다. 실제 파일 경로가 확인되면 evidence에 연결하세요.
  sourceFiles: { label: string; filename: string }[]
  evidence?: (PortfolioLink & { preview: string; page?: number })[]
}

// 개인 정보와 실제 성과는 이 파일에서 교체하세요.
// 프로필 연락처, Secupipeline, 논문·학회, 수상, 기술은 제공된 실제 정보입니다.
export const profile = {
  name: '김태현',
  photo: '/profile.jpg',
  photoAlt: '김태현 프로필 사진',
  introduction: '사용하기 쉬운 화면과 안정적인 데이터 흐름을 만드는 프론트엔드 개발자입니다.',
  about: [
    '기술 블로그와 학교 정보 서비스를 직접 개발·운영했습니다. 학교 정보 서비스는 Google 검색에서 클릭 약 1,100회, 노출 약 1.8만 회를 기록했습니다(2024.12~2026.04).',
    '사용자가 현재 상태를 이해할 수 있는 화면과 안정적인 데이터 흐름을 중요하게 생각합니다. Secupipeline 팀에서는 Electron 앱 화면 설계와 자체 CI/CD 엔진 개발을 맡아 로그 모니터링과 실행 상태 안정화를 구현했습니다.',
  ],
  email: 'best08122570@gmail.com',
  github: 'https://github.com/NekoNyangYee',
  blog: 'https://thkim.localplayer.dev',
}

export const projects: Project[] = [
  {
    slug: 'secupipeline',
    name: 'Secupipeline',
    subtitle: '보안 중심 CI/CD 통합 관리 서비스',
    image: '/projects/secupipeline/thumbnail-v2.png',
    imageAlt: 'Secupipeline — 자체 CI/CD 엔진으로 보안 검사부터 배포까지. 민트색 배경과 앱 대시보드를 담은 모니터 목업',
    period: '2026.03 — 2026.11',
    context: '팀 프로젝트 · CI/CD 엔진 개발·화면 설계',
    roleDescription: 'CI/CD 엔진 개발을 중심으로 백엔드 개발에 참여했으며, 프론트엔드 앱의 화면 설계·반영을 담당했습니다.',
    summary: '외부 보안 도구를 따로 연동하는 번거로움을 줄이기 위해, 자체 CI/CD 엔진에 보안 검사와 배포 제어를 통합한 데스크톱 서비스입니다.',
    description: '팀에서 개발한 Electron 기반 CI/CD 통합 관리 애플리케이션입니다. GitHub 저장소와 브랜치, 검사 항목을 선택해 파이프라인을 실행하고, 보안 분석 결과를 확인한 뒤 배포를 승인할 수 있습니다.',
    background: {
      problem: '프로젝트를 시작하며 기존 CI/CD 도구에 외부 보안 검사 도구를 따로 연결하는 방식의 번거로움에 주목했습니다. 검사를 실행하는 것뿐 아니라 분석 결과를 해석하고 배포 여부를 제어하려면 추가 설정과 연동이 필요했고, 원하는 기능을 하나의 흐름으로 구성하는 데 제약이 있었습니다.',
      approach: '이 과정을 보완하기 위해 팀은 보안 검사를 실행 흐름에 포함하는 자체 CI/CD 엔진을 만들기로 했습니다. 보안 검사부터 빌드·배포까지 함께 관리하고, 검사 결과가 실제 배포 판단으로 이어지는 서비스를 목표로 Secupipeline을 개발했습니다.',
    },
    technologies: ['React', 'Electron', 'FastAPI', 'PostgreSQL'],
    technologyGroups: [
      { category: '프론트엔드', items: ['TypeScript', 'React', 'Electron', 'Tailwind CSS', 'React Router', 'Chart.js'] },
      { category: '백엔드', items: ['Python', 'FastAPI'] },
      { category: '데이터베이스', items: ['PostgreSQL'] },
      { category: '개발 도구', items: ['Vite', 'Vitest'] },
    ],
    contributionsHeading: '주요 작업',
    contributions: [
      { title: 'Electron 기반 앱 화면 설계·구현', description: 'React와 TypeScript로 저장소 관리, 파이프라인 실행, 보안 분석 결과 확인까지 이어지는 앱 화면을 설계·구현했습니다. GitHub 로그인과 백엔드 API를 연결해 실제 저장소와 실행 데이터를 앱에서 관리하도록 구성했습니다.' },
      { title: '보안 검사를 통합한 자체 CI/CD 엔진', description: 'Python으로 저장소 복제, 의존성 설치, 보안 검사, 테스트, 빌드를 실행하는 엔진을 구현했습니다. Gitleaks·Semgrep의 검사 결과를 공통 형식으로 정리하고, YAML 설정으로 실행 단계와 명령, 환경 변수, 실패 시 처리 방식을 조정하도록 구성했습니다.' },
      { title: '실시간 실행 상태와 로그 모니터링', description: 'FastAPI에서 엔진의 로그와 단계별 상태 이벤트를 받아 WebSocket으로 앱에 전달했습니다. 진행 상황과 실행 시간을 표시하고, 연결이 끊기면 자동 재연결과 REST 폴링으로 모니터링을 이어가도록 구현했습니다.' },
      { title: '사용자별 실행 이력과 로그 저장', description: '실행 이력과 단계별 로그를 PostgreSQL에 저장하고, 사용자별 조회 API와 대시보드를 구현했습니다. 저장소 검색과 페이지 단위 조회를 지원하며, 앱을 다시 실행해도 이전 작업의 진행 상태와 결과를 확인할 수 있도록 구성했습니다.' },
      { title: '중복 로그 처리와 파이프라인 상태 안정화', description: '콜백 재전송에 따른 로그 중복 저장과 짧은 로그가 기존 내용을 덮어쓰는 문제를 방지했습니다. 엔진 시작 지연과 장시간 응답 중단을 감지해 실패 처리하고, 늦게 도착한 이벤트가 이미 종료된 작업의 상태를 변경하지 않도록 개선했습니다.' },
    ],
    featuresHeading: '팀에서 완성한 서비스',
    features: [
      { title: '보안 분석과 배포 승인', description: '서비스는 위험도별 취약점 목록과 보안 점수, 차트를 제공하며, 결과 확인 이후 배포 승인과 보고서 내보내기로 이어집니다.' },
      { title: '실행 상태와 예외 상황 안내', description: '동일한 저장소·브랜치의 중복 실행을 안내하고 기존 작업 화면으로 이동할 수 있습니다. 필수 입력 검증, 요청 중 실행 버튼 비활성화, 로딩·오류 표시와 인증 만료 시 재로그인 안내를 제공합니다.' },
      { title: '데스크톱 실행 환경', description: 'Electron의 컨텍스트 격리와 샌드박스를 적용하고 렌더러의 Node.js 직접 접근을 비활성화한 환경에서 동작합니다.' },
    ],
    screenshots: [
      { src: '/projects/secupipeline/screen-home.png', title: '시작 화면', caption: '보안 검사를 먼저 수행하는 서비스 방향과 시작하기·문서 보기 진입점을 안내하는 초기 화면입니다.' },
      { src: '/projects/secupipeline/screen-repositories.png', title: '저장소 관리 대시보드', caption: '연동한 GitHub 저장소를 검색하고 브랜치와 탐지 활성 상태를 확인하며, 새 파이프라인을 시작할 수 있습니다.' },
      { src: '/projects/secupipeline/screen-execution.png', title: '단계별 실행 현황과 로그', caption: '저장소 복제부터 각 실행 단계의 성공·실패 여부와 소요 시간, 상세 로그를 확인하는 화면입니다.' },
      { src: '/projects/secupipeline/screen-security.png', title: '보안 분석과 배포 판단', caption: '위험도별 취약점과 보안 점수, 배포 게이트의 차단 사유를 함께 보여주는 분석 결과 화면입니다.' },
    ],
    links: [],
  },
  {
    slug: 'paperkit',
    name: 'Paperkit',
    subtitle: '문서 변환 없이 직접 수정하는 PDF 편집기',
    image: '/projects/paperkit/thumbnail.png',
    imageAlt: 'Paperkit — 문서 변환 없이, PDF를 바로 편집. 짙은 초록색 배경과 실제 앱 시작 화면을 담은 모니터 목업',
    period: '개발·개선 중',
    context: '개인 프로젝트 · 기획·설계·개발',
    summary: 'PDF를 다른 문서 형식으로 변환하지 않고 텍스트·이미지를 직접 수정하는 Windows 앱입니다. 문서 처리는 서버 업로드 없이 로컬에서 수행합니다.',
    description: '텍스트·이미지·도형을 페이지 위에서 직접 수정하고, 워터마크와 서명을 추가하는 Windows용 PDF 편집기입니다. React 기반 편집 화면과 Rust·PDFium 기반 엔진을 연결했으며, 원본을 보호하면서 편집 결과를 새 PDF로 저장하도록 구성했습니다.',
    background: {
      problem: '흐리거나 훼손된 글씨, 이미지 속 글자는 OCR로 정확히 추출하기 어려웠습니다. PDF를 한글·Word로 변환하면 글꼴과 배치가 깨지는 경우가 있었고, 편집 서비스를 이용할 때도 유료 기능과 무료 사용 횟수 제한이 걸림돌이었습니다.',
      approach: '문서 변환에 따른 서식 손상을 줄이기 위해 PDF를 원본 형식에서 직접 수정하는 Paperkit을 개발했습니다. 비용과 사용 횟수에 구애받지 않는 편집 도구를 목표로, 현재는 로컬 환경의 직접 편집 기능을 중심으로 개선하고 있습니다.',
    },
    technologies: ['React', 'TypeScript', 'Tauri', 'Rust'],
    technologyGroups: [
      { category: '프론트엔드', items: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Radix UI'] },
      { category: '데스크톱·PDF 엔진', items: ['Tauri', 'Rust', 'PDFium'] },
      { category: '개발·검증·배포', items: ['Vite', 'Vitest', 'Cargo', 'GitHub Actions'] },
    ],
    contributionsHeading: '주요 작업',
    contributions: [
      { title: 'Tauri 기반 문서 편집 화면', description: 'React와 TypeScript로 파일 열기, 페이지 탐색, 객체 선택과 편집 도구를 구성했습니다. Zustand로 문서 탭을 관리하고, 앱을 다시 실행해도 탭 목록과 페이지·확대 상태를 복원하도록 구현했습니다.' },
      { title: 'Rust 기반 PDF 편집 엔진', description: 'PDFium을 기반으로 렌더링·텍스트 추출·편집을 담당하는 Paperframe 엔진을 구성했습니다. 엔진을 Tauri와 분리하고, 전용 워커에서 문서 핸들과 요청을 관리해 화면과 PDF 처리의 책임을 나눴습니다.' },
      { title: '텍스트 직접 편집과 문단 재배치', description: '페이지의 텍스트를 직접 선택해 수정하고 글꼴·정렬·줄바꿈 폭을 조절하도록 구현했습니다. 문단이 길어지면 같은 열의 아래 객체를 이동시키며, PDF 내장 글꼴과 설치된 글꼴을 활용하도록 구성했습니다.' },
      { title: '편집 결과 검증과 원본 보호', description: '편집 명령마다 후보 PDF를 만들고 내용·서식 보존 여부와 다시 열기 성공을 확인한 뒤 문서 상태를 교체했습니다. 검증에 실패하면 기존 문서와 이력을 유지하며, 실행 취소·다시 실행과 새 파일 저장을 지원합니다.' },
      { title: '워터마크와 전자서명', description: '텍스트·이미지 워터마크의 투명도·크기·각도를 미리 확인하고 현재 또는 전체 페이지에 적용하도록 구현했습니다. 직접 그린 서명은 투명 이미지로 만들어 이동·크기 조절이 가능하도록 연결했습니다.' },
      { title: '검증부터 Windows 릴리스까지', description: 'GitHub Actions에서 프론트엔드와 Rust 테스트, Windows 설치 파일 빌드를 수행하도록 구성했습니다. 검증을 통과한 버전의 설치 파일과 체크섬을 게시하고, 앱에서 새 릴리스를 확인하도록 연결했습니다.' },
    ],
    featuresHeading: '현재 지원 범위와 개선 방향',
    features: [
      { title: '로컬에서 처리하는 PDF 직접 편집', description: 'PDF 열기·편집·렌더링은 사용자 컴퓨터에서 처리합니다. 텍스트와 이미지 편집, 워터마크·서명, 실행 취소·다시 실행을 지원하며, 문서 구조와 내장 글꼴에 따라 편집 가능한 범위에는 차이가 있습니다.' },
      { title: '무료·무제한 제공을 목표로', description: '비용이나 사용 횟수 제한 때문에 문서 작업을 중단하지 않아도 되는 도구를 지향합니다. OCR의 추출 한계는 개발을 시작한 배경 중 하나이며, 현재 버전은 스캔된 글자의 OCR을 지원하지 않습니다.' },
    ],
    screenshots: [
      { src: '/projects/paperkit/screen-home.png', title: '문서 열기', caption: 'PDF를 창에 끌어 놓거나 파일 선택으로 여는 실제 앱 시작 화면입니다. 문서를 연 뒤 페이지 탐색과 직접 편집으로 이어집니다.', width: 1202, height: 802 },
    ],
    links: [
      { label: 'GitHub 저장소', url: 'https://github.com/NekoNyangYee/Paperkit' },
      { label: 'Windows 앱 다운로드', url: 'https://github.com/NekoNyangYee/Paperkit/releases/latest' },
    ],
  },
]

export const research: ResearchEntry[] = [
  {
    date: '2026.10.30',
    title: 'Design and Implementation of a CI/CD Security Pipeline with CWE-Based Severity Reclassification and Deployment Control',
    venue: 'AsiaSim 2026 — 제25회 아시아 시뮬레이션 학술대회',
    authors: ['YunGyu Eo', 'TaeHyun Kim', 'SeoYeon Kim', 'JuWon Won', 'GyuHong Lee', 'Su Man Nam'],
    authorPosition: 2,
    link: { label: '학술대회 정보', url: 'https://asiasim2026.org/' },
    attachments: [
      { label: '논문 원문', url: '/research/asiasim2026-paper33.pdf' },
    ],
  },
  {
    date: '2026.06.04–05',
    title: 'CI/CD 파이프라인에서 SBOM과 NVD 자동 매핑을 통한 소스 코드 취약점 탐지 기법 연구',
    venue: '대한산업공학회·한국경영과학회·한국시뮬레이션학회 춘계공동학술대회',
    authors: ['어윤규', '김태현', '김서연', '남수만'],
    authorPosition: 2,
    link: { label: '논문 정보', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12935767' },
    attachments: [
      { label: '논문 원문', url: '/research/sbom-nvd-2026.pdf' },
    ],
  },
  {
    date: '2026.05.08',
    title: 'OWASP Top 10 취약점 탐지를 위한 CI/CD 보안 파이프라인 개발',
    venue: '한국정보보호학회 하계학술대회(CISC-S’26)',
    authors: ['어윤규', '김태현', '김서연', '남수만'],
    authorPosition: 2,
    link: { label: '발표 정보', url: 'https://di0zxmb8pwajl.cloudfront.net/kiisc/conference/ciscs2026/ciscs2026-programbook-0507.pdf#page=29' },
    attachments: [
      { label: '논문 원문', url: '/research/ciscs2026-cicd-security.pdf' },
    ],
  },
  {
    date: '2025.12.12',
    title: 'IOT기기에서 MITRE ATT&CK을 활용한 APT 모델 분석 연구',
    venue: '한국시뮬레이션학회 추계학술대회(KSC25)',
    authors: ['김태현', '어윤규', '이우곤', '고성노', '이규홍', '남수만'],
    authorPosition: 1,
    link: { label: '학술대회 정보', url: 'https://asiasim2026.org/ksc-conf' },
    attachments: [
      { label: '발표 자료', url: '/research/ksc2025-iot-apt.pdf' },
    ],
  },
  {
    date: '2025.09.30',
    title: 'SOHO 환경에서 MITRE ATT&CK 프레임워크를 사용한 Wi-Fi 라우터 무차별 대입 공격 시나리오 분석 및 방어 연구',
    venue: '한국정보보호학회 충청지부 정보보호학술논문발표대회',
    authors: ['어윤규', '이우곤', '김태현', '고성노', '이규홍', '이해영', '남수만'],
    authorPosition: 3,
    link: { label: '학술대회 정보', url: 'https://kiisc.or.kr/bbs/pe/article/4425' },
    attachments: [
      { label: '논문 원문', url: '/research/kiisc2025-soho-caldera.pdf' },
    ],
  },
]

export const awards: Award[] = [
  {
    date: '2026.06.03',
    title: '대상',
    event: '2026학년도 1학기 오픈소스 프로젝트 경진대회',
    participants: [{ name: '김태현', role: '발표자' }, { name: '어윤규' }, { name: '이종하' }, { name: '류형민' }],
    sourceFiles: [{ label: '사진', filename: '20260602_174851.jpg' }],
    evidence: [{ label: '상장', url: '/awards/opensource-2026-grand-prize.pdf', preview: '/awards/opensource-2026-grand-prize-preview.webp' }],
  },
  {
    date: '2026.04.24',
    title: '앙트레프레너상',
    event: '2026학년도 우수창업아이템경진대회(1차)',
    participants: [{ name: '고성노', role: '팀장' }, { name: '김영재' }, { name: '김태현' }, { name: '어윤규' }, { name: '양혁주' }, { name: '임정민' }, { name: '최민우' }, { name: '김서연' }],
    sourceFiles: [{ label: '상장', filename: 'image6.png' }],
    evidence: [{ label: '상장', url: '/awards/startup-item-2026-entrepreneur.png', preview: '/awards/startup-item-2026-entrepreneur-preview.webp' }],
  },
  {
    date: '2025.12.18',
    title: '우수상',
    event: '2025 CJU 청년창업 Festa',
    participants: [{ name: '김영재', role: '팀장' }, { name: '김은성' }, { name: '김태현' }, { name: '박지우' }, { name: '어윤규' }, { name: '이진혁' }, { name: '홍지우' }, { name: '고성노' }, { name: '니즈센' }],
    sourceFiles: [{ label: '상장', filename: 'image.png' }],
    evidence: [{ label: '상장', url: '/awards/startup-festa-2025-excellence.png', preview: '/awards/startup-festa-2025-excellence-preview.webp' }],
  },
  {
    date: '2025.12.12',
    title: '장려상',
    event: '2025년 한국시뮬레이션학회 추계학술대회',
    participants: [{ name: '김태현' }, { name: '어윤규' }, { name: '이우곤' }, { name: '고성노' }, { name: '이규홍' }, { name: '남수만' }],
    sourceFiles: [{ label: '상장', filename: 'image.png' }],
    evidence: [{ label: '상장', url: '/awards/ksc2025-encouragement.png', preview: '/awards/ksc2025-encouragement-preview.webp' }],
  },
  {
    date: '2025.12.05',
    title: '대상',
    event: '2025학년도 창업활동우수사례경진대회 · 우수 사업계획서 부문',
    participants: [{ name: '김영재', role: '팀장' }, { name: '김은성' }, { name: '김태현' }, { name: '박지우' }, { name: '어윤규' }, { name: '이진혁' }, { name: '홍지우' }, { name: '고성노' }, { name: '니즈센' }],
    sourceFiles: [{ label: '상장', filename: 'image.png' }],
    evidence: [{ label: '상장', url: '/awards/business-plan-2025-grand-prize.png', preview: '/awards/business-plan-2025-grand-prize-preview.webp' }],
  },
  {
    date: '2025.12.04',
    title: '표창장',
    event: '2025 글로컬 창업대회+경진대회',
    participants: [{ name: '김영재' }, { name: '김태현' }, { name: '어윤규' }, { name: '박지우' }, { name: '김은성' }, { name: '이진혁' }, { name: '홍지우' }],
    sourceFiles: [{ label: '상장', filename: 'image.png' }],
    evidence: [{ label: '상장', url: '/awards/glocal-2025-citation.png', preview: '/awards/glocal-2025-citation-preview.webp' }],
  },
  {
    date: '2025.09.12',
    title: '최우수상',
    event: '2025학년도 우수창업아이템경진대회(2차)',
    participants: [{ name: '김영재' }, { name: '김은성' }, { name: '김태현' }, { name: '박지우' }, { name: '어윤규' }, { name: '이진혁' }, { name: '홍지우' }],
    sourceFiles: [{ label: '상장', filename: '최우수상.pdf' }],
    evidence: [{ label: '상장', url: '/awards/startup-item-2025-excellence.pdf', preview: '/awards/startup-item-2025-excellence-preview.webp' }],
  },
  {
    date: '2025.06',
    title: '우수상',
    event: '2025학년도 1학기 CJU학습동아리 프로그램',
    participants: [{ name: '어윤규' }, { name: '박지우' }, { name: '김은성' }, { name: '이진혁' }, { name: '김태현' }, { name: '김민성' }],
    sourceFiles: [{ label: '상장', filename: '2025학년도 1학기 CJU학습동아리 프로그램.pdf' }],
    evidence: [{ label: '상장 묶음', url: '/awards/study-group-2025.pdf', preview: '/awards/study-group-2025-preview.webp', page: 5 }],
  },
]

export const skills = [
  { category: '프론트엔드', items: ['JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { category: '백엔드', items: ['Node.js', 'Express', 'Python'] },
  { category: '데이터·백엔드 서비스', items: ['MariaDB', 'Supabase'] },
  { category: '개발·배포', items: ['GitHub Actions', 'Docker', 'Vercel'] },
  { category: '협업·디자인', items: ['GitHub', 'Figma'] },
]

export const education = {
  period: '2021.03 — 현재',
  school: '청주대학교',
  major: '디지털보안학과',
}

export const experience = {
  period: '2026.05 — 현재',
  company: '클라우드에어 주식회사',
  role: '풀스택 엔지니어 / MSP 엔지니어',
}

