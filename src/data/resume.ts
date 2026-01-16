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
  summary: `사용자의 불편함을 발견하고 기술로 해결하는 것을 즐기는 개발자입니다.

일상에서 겪는 불편함을 관찰하고, 유틸리티 앱을 만들어 직접 해결한 경험이 있습니다.
백엔드 기술은 사용자에게 더 나은 경험을 제공하기 위한 도구로 생각하며,
실시간 메시징 시스템 구축과 데이터 기반 서비스 개선에 기여했습니다.`,
  // ============================================
  // 기술 스택 (Skills)
  // ============================================
  skills: [
    {
      category: 'Programming-BackEnd',
      items: 'Java, MySQL, Spring Boot, MongoDB, RabbitMQ, Hibernate, WebSocket',
    },
    {
      category: 'Programming-FrontEnd',
      items: 'Electron, WebSocket, React',
    },
    {
      category: 'Management Tool',
      items: 'AWS, - EC2, - S3, - RDS, - Route53, - ACM, GitHub, GitHub Actions',
    },
  ],
  // ============================================
  // 프로젝트 (Projects)
  // ============================================
  projects: [
    {
      title: '01. 텍스트 편집 프로그램',
      subject: '키보드 중심의 파일 탐색 및 텍스트 편집 데스크톱 애플리케이션',
      period: '2025.12 ~ 진행중  ',
      role: '1인 개발',
      repository: {
        repo: 'https://github.com/chaniii999/FolderingApp',
      },
      description: `마우스 없이도 모든 작업을 키보드 단축키로 수행할 수 있는 로컬 파일 관리 및 텍스트 편집 데스크톱 애플리케이션입니다.
Context Isolation 기반의 보안 아키텍처와 서비스 레이어 패턴을 적용하여 안정성을 확보했으며,
React.memo 및 useCallback을 활용한 성능 최적화로 리렌더링을 50-70% 감소시켰습니다.
Windows와 macOS (Intel & Apple Silicon) 크로스 플랫폼을 지원합니다.`,
      techStack: {
        backend: 'node.js, Electron',
        frontend: 'React, TypeScript, Tailwind CSS, Vite',
        database: 'SQLite (better-sqlite3)',
        infra: 'Vitest, electron-builder',
      },
      responsibilities: [
        '보안 아키텍처 설계(Context Isolation, IPC 통신), 서비스 레이어 패턴 기반 전역 상태 관리',
        '키보드 단축키 시스템 및 파일 탐색/편집 기능 개발',
        'React 성능 최적화(리렌더링 50-70% 감소)',
        '크로스 플랫폼 빌드 및 배포 자동화',
        'TypeScript 기반 타입 안정성 확보 및 코드 리팩터링',
      ],
    },
    {
      title: '02. 뽀모도로 AI 피드백 앱 (iOS)',
      subject: '학습 AI 피드백 통계 앱',
      period: '2025.06 ~ 2025.10',
      role: '1인 개발 (풀스택)',
      repository: {
        backend: 'https://github.com/chaniii999/StudyMate',
        frontend: 'https://github.com/chaniii999/studyMateFrontApp',
      },
      description: `뽀모도로 타이머로 기록한 학습 데이터를 바탕으로 OpenAI API를 활용한 AI 피드백 문서를 생성하여,
사용자에게 전략적 학습 방법과 상세한 학습 통계를 제공하는 학습 관리 플랫폼입니다.
WebSocket 기반 실시간 타이머, 학습 목표 및 스케줄 관리, 다양한 통계 분석 기능을 포함합니다.`,
      techStack: {
        backend: 'Java 17, Spring Boot 3.3.6, Spring Security, Spring Data JPA, Spring WebSocket (STOMP), Spring WebFlux, JJWT',
        frontend: 'React Native (iOS)',
        database: 'MySQL, Redis',
        infra: 'OpenAI API (GPT-4o-mini), Spring Mail, Xcode',
      },
      responsibilities: [
        'JWT 기반 인증 시스템 구축 (Access/Refresh Token), 이메일 인증 (Redis TTL 관리), Spring Security 필터 체인 및 WebSocket Handshake Interceptor를 통한 보안 강화',
        'WebSocket(STOMP) 기반 실시간 Pomodoro 타이머 구현, 클라이언트/서버 시간 분리로 정확한 학습 시간 추적, 다양한 Pomodoro 모드 지원 (25/5, 50/10 등)',
        'OpenAI API(GPT-4o-mini) 연동 및 프롬프트 엔지니어링, 지수 백오프 전략(최대 3회 재시도) 및 Rate Limiting(ConcurrentLinkedQueue)을 통한 API 비용 관리',
        '학습 목표 CRUD 및 진행도 추적, 반복 일정 관리(DAILY, WEEKLY, MONTHLY), 계획 대비 실제 학습 시간 기반 완료율 자동 계산',
        '일별/주별/월별/연도별 학습 통계 조회, 학습 목표별 통계 추적, JPA 쿼리 메서드 활용한 DB 집계 쿼리 최적화',
        '14개 커스텀 예외 클래스 정의 및 전역 예외 핸들러 구현, 단위 테스트 및 통합 테스트 작성 (JUnit 5, Spring Boot Test)',
      ],
    },
    {
      title: '03. 커뮤니티 메신저 어플 프로젝트',
      subject: '커뮤니티 + 실시간 통신 시스템',
      period: '2024.03 – 2024.11',
      role: '백엔드 개발 리드 / 팀장',
      description: `WebSocket, RabbitMQ + STOMP를 활용한 커뮤니티 + 실시간 통신 시스템 구축`,
      techStack: {
        backend: 'Spring Boot 3.2, WebSocket(STOMP), RabbitMQ',
        frontend: 'React, Electron',
        database: 'MySQL, MongoDB, Redis',
        infra: 'Docker, GitHub Actions, AWS',
      },
      responsibilities: [
        'Spring Boot 3.2, WebSocket(STOMP), RabbitMQ를 활용한 실시간 메시징 백엔드 시스템 설계, 구축',
        'k6 기반 부하 테스트로 WebSocket 채팅 서버 성능을 정량적으로 검증하며, p95 지연 시간 27% 단축 (91.9ms → 67ms), 최대 지연시간 72% 개선 등 실질 성과 도출',
        '스레드풀 구조 개선, Redis 캐싱 최적화, RabbitMQ 브로커 튜닝 등 백엔드 코드 레벨 최적화를 직접 주도하여 300명 동시 접속 환경에서 메시지 송수신 성공률 100% 달성',
        'ExecutorService(스레드풀)와 비동기 메시지 소비 구조를 직접 설계·구현하며, 실시간 대화 서비스의 동시성 문제를 효과적으로 해결',
        'MongoDB 인덱스 설계, 효율적인 쿼리 작성, 불필요한 데이터 접근 최소화 등 대용량 메시지 데이터 환경에서의 데이터 모델링과 성능 최적화',
        '메시지 삭제/수정 시 권한 검증, 파일 전송 시 예외 처리, 불필요한 로깅/트랜잭션/캐싱 제거 등, 실무에서 요구되는 견고한 예외 처리와 구조적 코드 리팩터링',
      ],
      achievements: [
        'p95 지연 시간 27% 단축 (91.9ms → 67ms)',
        '최대 지연시간 72% 개선',
        '300명 동시 접속 환경에서 메시지 송수신 성공률 100% 달성',
      ],
    },
    {
      title: '04. 캘린더 웹사이트 : 애브리플랜 (everyplan.site)',
      subject: '캘린더 푸시알림 앱(EveryPlan)',
      period: '2025.08 ~ 2025.09',
      role: '풀스택 1인',
      repository: {
        backend: 'https://github.com/chaniii999/calendar',
        frontend: 'https://github.com/chaniii999/calendar-front',
      },
      description: `SSE(Server-Sent Events) 기반 실시간 푸시 알림 시스템을 핵심으로 하는 일정 관리 웹 애플리케이션입니다.
이벤트 기반 아키텍처를 설계하여 스케줄러와 알림 시스템을 느슨하게 결합하고,
Google OAuth2 + JWT 하이브리드 인증으로 보안성과 성능을 동시에 확보했습니다.
프론트엔드(React), 백엔드(Spring Boot), 클라우드 인프라(AWS)까지 완성하여, 실시간 통신 기술과 확장 가능한 아키텍처 설계 능력을 입증했습니다.`,
      techStack: {
        backend: 'Java, Spring Boot, Spring Security, JPA, OAuth2',
        frontend: 'HTML, CSS, JavaScript, React',
        database: 'MySQL, Redis',
        infra: 'AWS (EC2, CloudFront, S3, Route53, ACM, ALB, VPC), GitHub Actions, Postman, Swagger, SLF4J',
      },
      responsibilities: [
        'RESTful API 설계 및 ULID 기반 고유 식별자로 시간순 정렬 최적화, 데이터베이스 인덱스 최적화를 통한 조회 성능 향상, 전역 예외 처리기 및 Swagger API 문서화',
        'SSE(Server-Sent Events)를 활용한 실시간 단방향 통신 구현, 다중 탭 지원을 위한 연결 관리 시스템, 매분 정각 알림 시간 체크 스케줄러 구현',
        'React 기반 SPA 프론트엔드 및 Spring Boot 기반 RESTful API 백엔드 개발, Google OAuth2 인증 시스템 통합 및 JWT 토큰 기반 인증 구현',
        'AWS 인프라 구성 (EC2, CloudFront, S3, Route53, ACM, ALB, VPC), GitHub Actions를 통한 CI/CD 파이프라인 구축 및 환경별 프로파일 분리',
      ],
    },
    {
      title: '05. DayLongCafe 단골왕 이벤트 배너 (실서비스)',
      subject: '무인 카페 단골왕 랭킹',
      period: '2025.02 - 2025.03',
      role: 'BE 담당, FE 1인 (총 2명)',
      repository: {
        repo: 'https://github.com/chaniii999/DayLongCafe',
      },
      description: `한 달간 무인 카페의 음료 구매 횟수를 집계하여
상위 고객에게 리워드를 제공하는 단골 고객 랭킹 시스템을 구축.

구매 이력은 Google Spreadsheet로 수집되며, 이를 주기적으로 수집-갱신하여
랭킹 결과를 시각화된 웹 페이지에서 확인할 수 있도록 API 서버를 개발.`,
      techStack: {
        backend: 'Java, Spring Boot, Google Spread API',
        infra: 'AWS (EC2, Route53, ACM), Github Actions',
      },
      responsibilities: [
        'API 서버 구축, 유지보수',
        '구글 스프레드시트에서 가져온 데이터에서 핸드폰 번호로 데이터 검색',
        '소비잔수를 기준으로 자신의 현재 순위, 소비잔 수, 다음 리워드까지 필요한 잔 수를 응답',
        '페이지 검색량 기록을 위해 검색시 로그저장',
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
    {
      title: '디지털콘텐츠디자인학과 중퇴',
      institution: '오산대학교',
      period: '2019.03 - 2020.12',
    },
  ],
  // ============================================
  // 자격증 (Qualifications)
  // ============================================
  qualifications: [
    {
      title: '컴퓨터활용능력 1급',
      issuer: '대한상공회의소',
      period: '2024.06',
    },
    {
      title: '시각디자인산업기사',
      issuer: '한국산업인력공단',
      period: '2020.12',
    },
  ],
};

