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
  summary: `Spring Boot 기반 백엔드 시스템 설계 및 개발에 특화된 개발자입니다.

실시간 메시징 시스템 구축 경험을 바탕으로 WebSocket, RabbitMQ를 활용한 
고성능 백엔드 아키텍처 설계 능력을 보유하고 있습니다. k6 기반 부하 테스트를 통해 
p95 지연시간 27% 개선, 300명 동시 접속 환경에서 메시지 송수신 성공률 100% 달성 등
정량적 성과를 도출한 경험이 있습니다.

데이터베이스 인덱스 최적화, Redis 캐싱 전략 수립, 스레드풀 구조 개선 등 
시스템 성능 향상에 대한 깊은 관심과 실무 경험을 가지고 있으며,
확장 가능하고 안정적인 백엔드 시스템 구축을 목표로 합니다.

협업에서는 요구사항을 명확히 문서화하고 지표 기반으로 문제를 공유해
의사결정 속도를 높였습니다. 자바·스프링 내부 동작과 성능 튜닝을
지속 학습하며 안정적인 서비스 확장을 추구합니다.`,
  // ============================================
  // 기술 스택 (Skills)
  // ============================================
  skills: [
    {
      category: 'Backend Core',
      items: 'Java 17, Spring Boot 3.x, Spring Security, Spring Data JPA, Spring WebSocket (STOMP)',
    },
    {
      category: 'Database & Cache',
      items: 'MySQL, MongoDB, Redis, SQLite',
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
      items: 'AWS (EC2, S3, RDS, Route53, ACM, ALB, VPC, CloudFront), Docker, GitHub Actions',
    },
    {
      category: 'Testing & Monitoring',
      items: 'k6 (부하 테스트), JUnit 5, Spring Boot Test',
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
      title: '01. 커뮤니티 메신저 어플 프로젝트',
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
        '실시간 메시징 백엔드 아키텍처를 직접 설계하고 구축',
        '스레드풀·캐싱·브로커 튜닝으로 동시성 처리 흐름을 최적화',
        'MongoDB 인덱스·쿼리 설계로 대용량 메시지 성능을 개선',
      ],
      achievements: [
        'p95 지연 시간 27% 단축 (91.9ms → 67ms)',
        '최대 지연시간 72% 개선',
        '300명 동시 접속 환경에서 메시지 송수신 성공률 100% 달성',
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
      title: '03. 텍스트 편집 프로그램(실행가능)',
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
      title: '04. 캘린더 웹사이트 : 애브리플랜 (everyplan.site)',
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
      title: '05. DayLongCafe 단골왕 이벤트 배너 (실서비스)',
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

