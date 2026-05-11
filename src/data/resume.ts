/**
 * 이력서 데이터 파일
 * 
 * 이 파일만 수정하면 이력서 내용이 변경됩니다.
 * 각 섹션은 주석으로 구분되어 있어 쉽게 찾을 수 있습니다.
 * 
 * PDF 저장 방법:
 * 1. npm run dev 실행
 * 2. 브라우저에서 열기
 * 3. Ctrl+P (또는 Cmd+P) 누르기
 * 4. PDF로 저장
 */

export interface PersonalInfo {
  name: string;
  nameEn: string;
  position: string;
  email: string;
  github: string;
  blog: string;
  portfolio?: string;
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface Project {
  title: string;
  subject: string;
  period: string;
  role: string;
  repository?: {
    backend?: string;
    frontend?: string;
    repo?: string;
  };
  description: string;
  techStack: {
    backend?: string;
    frontend?: string;
    database?: string;
    infra?: string;
  };
  responsibilities: string[];
  achievements?: string[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
}

export interface Qualification {
  title: string;
  issuer: string;
  period: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: SkillCategory[];
  projects: Project[];
  education: Education[];
  qualifications?: Qualification[];
}

// ============================================
// 이력서 데이터
// 이 파일만 수정하면 이력서 내용이 변경됩니다.
// ============================================

export const resumeData: ResumeData = {
  // ============================================
  // 개인 정보
  // ============================================
  personalInfo: {
    name: '박성찬',
    nameEn: 'SungChan Park',
    position: 'Back-End Developer',
    email: 'psc0729@naver.com',
    github: 'github.com/chaniii999',
    blog: 'velog.io/@chaniii999',
    portfolio: 'https://jewel-mayonnaise-b37.notion.site/SungChan-Park-12f062a2be8d803faf10e3845e22a72c?pvs=74',
  },
  // ============================================
  // 자기소개 (Summary)
  // ============================================
  summary: `실시간 서비스와 문서 AI 파이프라인을 안정적으로 운영 가능한 구조로 설계하는 백엔드 엔지니어입니다.

사용자가 바로 체감하는 응답성과 운영 관점의 안정성을 동시에 달성하는 것을 중요하게 생각합니다. Java·Spring 기반 커뮤니티 메신저 프로젝트에서는 WebSocket·RabbitMQ 아키텍처와 성능 개선을 주도했고, 의회문서요약 프로젝트에서는 PaddleOCR 엔진 로컬 구현, OCR·LLM 워커 분리 설계, vLLM 기반 VRAM 점유율 최적화, 최대 16인 동시 병렬성 제어 구조 검증, RAG 아키텍처 설계·구현을 담당했습니다.

기술 선택의 이유를 지표로 검증하고, 팀이 유지보수하기 쉬운 구조로 구현해 서비스 품질을 꾸준히 높여가는 것이 강점입니다.`,
  // ============================================
  // 기술 스택 (Skills)
  // ============================================
  skills: [
    {
      category: 'Backend Core',
      items: 'Java 17, Spring Boot 3.x, Spring Security, Spring Data JPA, Spring WebSocket (STOMP), Python, FastAPI, vLLM, LlamaIndex',
    },
    {
      category: 'Database & Cache',
      items: 'MySQL, MongoDB, Redis, SQLite, ChromaDB',
    },
    {
      category: 'Message Queue & Real-time',
      items: 'RabbitMQ, WebSocket (STOMP)',
    },
    {
      category: 'Authentication & Security',
      items: 'JWT, OAuth2, Spring Security',
    },
    {
      category: 'Infrastructure & DevOps',
      items: 'AWS (EC2, S3, RDS, Route53, ACM, ALB, VPC, CloudFront), Docker, GitHub Actions, CUDA',
    },
    {
      category: 'Testing & Monitoring',
      items: 'k6 (부하 테스트), JUnit 5, Spring Boot Test, sentence-transformers',
    },
    {
      category: 'Frontend (보조)',
      items: 'React, React Native, Electron',
    },
  ],
  // ============================================
  // 프로젝트 (Projects)
  // ============================================
  projects: [
    {
      title: '01. 의회문서요약프로젝트',
      subject: '의회 문서 OCR·요약 및 질의응답 시스템',
      period: '2026.03 ~ 2026.04',
      role: '팀장 및 OCR·LLM 구축 담당 (총 4명)',
      description: `메인 서버와 리소스 집약적 NLP 워커를 분리한 아키텍처 하에서 OCR 추출·장문 요약·RAG를 설계·구현하고, 팀장으로 OCR·LLM 구축을 총괄`,
      techStack: {
        backend: 'Python, FastAPI, httpx, pydantic, uvicorn, vLLM(OpenAI-compatible), LlamaIndex, sentence-transformers',
        database: 'ChromaDB',
        infra: 'CUDA, SSE Streaming, WSL2(Ubuntu), .env 기반 운영 설정',
      },
      responsibilities: [
        '팀장(4인): 메인 서버와 NLP 워커 분리 아키텍처 설계·통합, 도메인·요약·RAG 경계 정의 및 구축 범위·일정 총괄',
        'OCR 파이프라인: 텍스트 레이어 판별 기반 추출 분기, 페이지 단위 yield 스트리밍, DPI·리사이즈·배치 파라미터 튜닝, OCR 오프로딩·SSE 진행률 설계·구현',
        'LLM 서빙·자원: vLLM 기반 Continuous Batching·Prefix Caching·AWQ·enforce-eager 및 GPU/CPU 연산 분산·동시성 정책 수립·적용',
        '장문 요약: `POST /api/vllm/process` 중심 청킹·부분·재요약·최종·메타 생성, 계층적 재압축, asyncio.to_thread로 OCR·인제스트·생성 단계 오케스트레이션',
        'RAG·검색·보안: 맵-리듀스 기반 의미론적 청킹, BM25+벡터 하이브리드 및 유사도 하한 필터, RBAC 메타·파일 단위 격리',
        'UI/UX: 메인 화면 정보 구조·컴포넌트 톤 정리, 요약 스트리밍 상태(진행/완료/오류) 가시화, 핵심 액션 동선 정리',
    
      ],
      achievements: [
        '[OCR] 텍스트 레이어 존재 여부 판별로 스캔본이 아닌 PDF의 OCR 엔진 호출 100% 차단, 불필요 GPU 추론·엔진 초기화 오버헤드 제거',
        '[OCR] 페이지 단위 Generator(yield) 스트리밍으로 대용량 PDF도 전체 메모리 적재 없이 추출·시스템 크래시 방지',
        '[OCR] DPI 300·960px 리사이즈·rec_batch_num 튜닝으로 추출 속도 약 20% 향상(정확도 유지)',
        '[OCR] OCR 작업 스레드 분리 및 SSE 진행률로 메인 서버 블로킹 방지·체감 대기 완화',
        '[LLM] Prefix Caching으로 동일 문서 반복 질의 시 첫 토큰 생성 시간 최대 80% 이상 단축',
        '[LLM] AWQ 양자화·GPU/CPU 연산 분산·enforce-eager로 VRAM 점유 약 39% 절감, CUDA Graph 오버헤드 제거로 약 1GB 추가 확보·8B 로컬 서빙 안정화',
        '[LLM] 메인 서버와 NLP 워커 분리로 요약 중에도 메인 응답 지연 제거·시스템 가용성 100% 유지',
        '[LLM] asyncio.to_thread 기반 비동기 파이프라인으로 OCR·인제스트 병목 제거, 전체 요약 프로세스 시간 약 30% 감축',
        '[LLM] 계층적 재압축으로 단일 컨텍스트 한계를 넘어 최대 80페이지 이상 의안을 정보 유실 없이 요약',
        '[LLM] Continuous Batching·Prefix Caching 최적화로 8인 동시 추론 실측 VRAM 50% 미만, Throughput 순차 대비 약 400% 이상 향상·단일 RTX 3060에서 이론상 16인 이상 확장 가능 구조 입증',
        '[LLM] 맵-리듀스 기반 의미론적 청킹(1024토큰 분석 후 약 400토큰 핵심 요약)으로 임베딩·LLM 컨텍스트 밀도 향상',
        '[LLM] BM25+벡터 하이브리드 검색 및 유사도 하한(0.5)으로 저신뢰 문맥 유입 차단·할루시네이션 방지',
      ],
    },
    {
      title: '02. 커뮤니티 메신저 어플 프로젝트',
      subject: '커뮤니티 + 실시간 통신 시스템',
      period: '2024.11 – 2025.02',
      role: '백엔드 개발 리드 / 팀장',
      description: `WebSocket·RabbitMQ 기반 실시간 커뮤니티 메신저 백엔드 구축`,
      techStack: {
        backend: 'Spring Boot 3.2, WebSocket(STOMP), RabbitMQ',
        frontend: 'React, Electron',
        database: 'MySQL, MongoDB, Redis',
        infra: 'Docker, GitHub Actions, AWS',
      },
      responsibilities: [
        'WebSocket + STOMP + RabbitMQ를 활용한 실시간 메시징 백엔드 아키텍처를 설계·구축',
        'Electron 기반 데스크톱 앱으로 클라이언트를 개발하고 배포 흐름을 구성',
        '앱 전반 컨셉에 맞춘 UI/UX 설계 및 화면 구현',
        '스레드풀·캐싱·브로커 튜닝으로 동시성 처리 흐름을 최적화',
        'MongoDB 인덱스·쿼리 설계로 대용량 메시지 성능을 개선',
      ],
      achievements: [
        'RabbitMQ를 활용해 1:1 채팅, 그룹 채팅, 메시지 검색 등 메시징 도메인 흐름을 설계·구현',
        'STOMP 인터셉터로 채팅방 보안·인증을 구현',
        'p95 지연 시간 27% 단축 (91.9ms → 67ms)',
        '최대 지연시간 72% 개선',
        '300명 동시 접속 환경에서 메시지 송수신 성공률 100% 달성',
      ],
    },
    {
      title: '03. 뽀모도로 AI 피드백 앱 (iOS)',
      subject: '학습 AI 피드백 통계 앱',
      period: '2025.06 ~ 2025.10',
      role: '1인 개발 (풀스택)',
      repository: {
        backend: 'https://github.com/chaniii999/StudyMate',
        frontend: 'https://github.com/chaniii999/studyMateFrontApp',
      },
      description: `뽀모도로 학습 데이터를 기반으로 AI 피드백과 통계를 제공하는 iOS 앱`,
      techStack: {
        backend: 'Java 17, Spring Boot 3.3.6, Spring Security, Spring Data JPA, Spring WebSocket (STOMP), Spring WebFlux, JJWT',
        frontend: 'React Native (iOS)',
        database: 'MySQL, Redis',
        infra: 'OpenAI API (GPT-4o-mini), Spring Mail, Xcode',
      },
      responsibilities: [
        'JWT 인증/이메일 인증을 설계하고 보안 필터·Handshake를 구성',
        'WebSocket 타이머와 학습 목표·일정 관리 기능을 설계·구현',
        'OpenAI API 연동과 프롬프트 설계로 피드백 생성 파이프라인 구축',
      ],
      achievements: [
        'Pomodoro 모드 2종 지원 (25/5, 50/10)',
        'API 재시도 최대 3회 적용으로 호출 안정성 확보',
        '커스텀 예외 14개 정의 및 테스트 체계화',
      ],
    },
    {
      title: '04. 텍스트 편집 프로그램(실행가능)',
      subject: '키보드 중심의 파일 탐색 및 텍스트 편집 데스크톱 애플리케이션',
      period: '2025.12 ~ 진행중',
      role: '1인 개발',
      repository: {
        repo: 'https://github.com/chaniii999/FolderingApp',
      },
      description: `키보드 중심 파일 탐색·텍스트 편집 데스크톱 애플리케이션`,
      techStack: {
        backend: 'Node.js, Electron',
        frontend: 'React, TypeScript, Tailwind CSS, Vite',
        database: 'SQLite (better-sqlite3)',
        infra: 'Vitest, electron-builder',
      },
      responsibilities: [
        'Context Isolation 보안 구조와 IPC 통신을 설계',
        '서비스 레이어로 상태 흐름을 분리해 유지보수성을 확보',
        '빌드·배포 자동화를 구성해 운영 흐름을 표준화',
      ],
      achievements: [
        '리렌더링 50~70% 감소',
        'Windows/macOS 2종 빌드·배포 자동화',
      ],
    },
    {
      title: '05. 캘린더 웹사이트 : 애브리플랜 (everyplan.site)',
      subject: '캘린더 푸시알림 앱(EveryPlan)',
      period: '2025.08 ~ 2025.09',
      role: '풀스택 1인',
      repository: {
        backend: 'https://github.com/chaniii999/calendar',
        frontend: 'https://github.com/chaniii999/calendar-front',
      },
      description: `SSE 기반 실시간 알림과 일정 관리를 제공하는 캘린더 웹`,
      techStack: {
        backend: 'Java, Spring Boot, Spring Security, JPA, OAuth2',
        frontend: 'HTML, CSS, JavaScript, React',
        database: 'MySQL, Redis',
        infra: 'AWS (EC2, CloudFront, S3, Route53, ACM, ALB, VPC), GitHub Actions, Postman, Swagger, SLF4J',
      },
      responsibilities: [
        'SSE 알림 흐름을 설계하고 연결 관리 로직을 구축',
        'REST API와 OAuth2+JWT 인증 플로우를 설계·구현',
        'AWS 인프라와 CI/CD 파이프라인을 구성',
      ],
      achievements: [
        'AWS 7개 서비스 구성 (EC2, CloudFront, S3, Route53, ACM, ALB, VPC)',
        '알림 스케줄러 1분 단위 동작 구현',
      ],
    },
    {
      title: '06. DayLongCafe 단골왕 이벤트 배너 (실서비스)',
      subject: '무인 카페 단골왕 랭킹',
      period: '2025.02 - 2025.03',
      role: 'BE 담당, FE 1인 (총 2명)',
      repository: {
        repo: 'https://github.com/chaniii999/DayLongCafe',
      },
      description: `무인 카페 단골 랭킹 이벤트용 API 및 웹 연동`,
      techStack: {
        backend: 'Java, Spring Boot, Google Spread API',
        infra: 'AWS (EC2, Route53, ACM), Github Actions',
      },
      responsibilities: [
        '랭킹 집계 API를 설계하고 데이터 수집 파이프라인을 구성',
        '검색·조회 로직을 정리해 사용자별 리워드 정보를 제공',
        '운영 로그 수집으로 검색 지표를 추적',
      ],
      achievements: [
        '실제 무인 카페(Daylong)에 도입되어 운영, 3월, 4월 간 매장 내 QR 포스터 부착 및 이벤트 페이지를 통해 고객 참여 유도',
        '이벤트 기간 중 159명의 회원이 가입 및 음료 구매, 이 중 약 90%가 신규 유입 회원으로 신규 회원 확보',
        '이벤트 시행 전 월 평균 구매량은 3.07잔이었으며, 이벤트가 진행된 기간에는 3.99잔으로 증가',
        '회원별 소비 변화를 분석 결과, 중앙값 기준 2.39배, 평균 2.72배, 상위 10% 고객은 5.98배까지 증가',
        '단기 프로모션을 통해 기존 고객의 재방문 유도 및 충성 고객 소비 확대에 성공',
      ],
    },
  ],
  // ============================================
  // 학력 (Education)
  // ============================================
  education: [
    {
      title:
        '심화 AI 학습모델과 생성형 AI를 활용한 문서 인식, 분류 자동화 시스템 개발 과정 수료',
      institution: '글로벌 아카데미',
      period: '2026.02 ~ 2026.04',
    },
    {
      title: '풀스택 백엔드 개발자 양성 과정 수료',
      institution: '플레이데이터 평생교육원',
      period: '2024.08 - 2025.02',
    },
    {
      title: '4년제 학사 컴퓨터공학 전공 학위 취득',
      institution: '학점은행제',
      period: '2021.01 - 2024.08',
    },
    {
      title: '우아한테크코스 프리코스 수료',
      institution: '우아한형제들',
      period: '2023.10 - 2023.11',
    },
    {
      title: '42SEOUL 프리코스 (La Piscine) 수료',
      institution: '이노베이션아카데미',
      period: '2023.08 - 2023.09',
    },
  ],
  // ============================================
  // 자격증 (Qualifications)
  // ============================================
  qualifications: [
    {
      title: '정보처리기사 필기 합격',
      issuer: '한국산업인력공단',
      period: '',
    },
    {
      title: '컴퓨터활용능력 1급',
      issuer: '대한상공회의소',
      period: '',
    },
    {
      title: '시각디자인산업기사',
      issuer: '한국산업인력공단',
      period: '',
    },
  ],
};

