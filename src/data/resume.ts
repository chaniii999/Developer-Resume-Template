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
  },
  // ============================================
  // 자기소개 (Summary)
  // ============================================
  summary: `지속 가능한 서버 아키텍처와 사용자 중심의 성능 개선을 추구합니다.

Java 및 Spring Boot 기반의 실시간 시스템 구축과 성능 최적화 경험을 보유한 백엔드 개발자입니다.

팀장으로 프로젝트 기획부터 배포까지 주도하였으며, WebSocket 메시징 최적화와 데이터 기반 문제 해결에 강점을 갖고 있습니다.`,
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
      items: 'AWS (EC2, S3, RDS, Route53, ACM), GitHub, GitHub Actions',
    },
  ],
  // ============================================
  // 프로젝트 (Projects)
  // ============================================
  projects: [
    {
      title: '01. 텍스트 편집 프로그램',
      subject: '텍스트 편집 어플리케이션',
      period: '2025.12 ~ 2025.12 (진행중)',
      role: '1인 개발',
      repository: {
        repo: 'https://github.com/chaniii999/FolderingApp',
      },
      description: `키보드 중심의 빠른 파일 탐색 및 텍스트 편집 데스크톱앱.
마우스 없이도 모든 작업을 키보드로 수행할 수 있도록 설계되어
개발자, 작가, 메모 작성자에게 최적화된 사용자 경험을 제공함.`,
      techStack: {
        backend: 'node.js, Electron',
        frontend: 'React, TypeScript, Tailwind CSS, Vite',
        database: 'SQLite (beter-sqlite3)',
        infra: 'Vitest, electron-builder',
      },
      responsibilities: [
        '총 개발',
      ],
    },
    {
      title: '02. 뽀모도로 AI 피드백 앱 (IOS)',
      subject: '학습 AI 피드백 통계 앱',
      period: '2025.06 ~ 2025.10 (잠정 중단)',
      role: '1인 개발',
      repository: {
        backend: 'https://github.com/chaniii999/StudyMate',
        frontend: 'https://github.com/chaniii999/studyMateFrontApp',
      },
      description: `뽀모도로 타이머로 기록한 데이터를 바탕으로 AI 피드백 문서를 생성해, 사용자에게 전략적 학습 방법과 학습 통계를 제공함.`,
      techStack: {
        backend: 'Java, Spring Boot, JPA',
        frontend: 'React-Native',
        database: 'MySQL, MongoDB',
        infra: 'Xcode',
      },
      responsibilities: [
        '총 개발',
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
      period: '2025.08.14 ~ 2025.08.24 (10일)',
      role: '풀스택 1인',
      repository: {
        backend: 'https://github.com/chaniii999/calendar',
        frontend: 'https://github.com/chaniii999/calendar-front',
      },
      description: `EveryPlan은 기본적인 프론트엔드, 백엔드, CI/CD 규격화를 위해 만들어졌습니다.
중요 기능으로는 푸시알림으로,
일정 시작시간 지정을 통해 정해진 시간에 푸시알람을 받을 수 있습니다.`,
      techStack: {
        backend: 'Java, Spring, JPA, OAuth2',
        frontend: 'HTML, CSS, JS, React, Electron',
        database: 'MySQL, Redis',
        infra: 'AWS EC2, CloudFront, S3, Route53, ACM, ALB, VPC, Git Actions, PostMan, Swagger, SLF4J',
      },
      responsibilities: [
        '일정 CRUD 설계',
        'SSE 푸시알람 설계',
        '프론트엔드, 백엔드 구현',
        'AWS CLOUD를 통해 웹사이트 운영',
      ],
    },
    {
      title: '05. DayLongCafe 단골왕 이벤트 배너 (실서비스)',
      subject: '무인 카페 단골왕 랭킹',
      period: '2025.02 - 2025.03',
      role: 'BE 담당, FE 1인 (총 2명)',
      repository: {
        repo: 'https://github.com/chanii999/DayLongCafe',
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

