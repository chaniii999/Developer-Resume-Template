# 박성찬, SungChan Park

<aside>
🔥

일이 너무나도 하고싶은 개발자, 박성찬입니다.

</aside>

![KakaoTalk_20240707_194648358.jpg](KakaoTalk_20240707_194648358.jpg)

## 🖥️ Back-End Developer

✉️ Email : psc0729@naver.com

✏️ Notion : [chani’s portfolio](https://www.notion.so/SungChan-Park-12f062a2be8d803faf10e3845e22a72c?pvs=21)

📔 Blog : [chani’s velog](https://velog.io/@chaniii999)

🌐 GitHub :  [chani’s github](https://github.com/chaniii999)

## 안녕하세요. 힘세고 강한 아침, 박성찬입니다.

### [간략 소개]

Spring Boot 기반 백엔드 시스템과 로컬 LLM 기반 서비스 아키텍처에 특화된 백엔드 개발자입니다.

실시간 메시징 시스템 구축, WebSocket·RabbitMQ 기반 비동기 아키텍처 설계 경험과 함께
3060 12GB 환경에서 vLLM·FastAPI·Chroma를 활용한 LocalLLM-OCR 요약/RAG 시스템을 직접 설계·구현했습니다.

성능 관점에서는 k6 부하 테스트로 p95 지연시간 27% 개선, 300명 동시 접속 환경에서
메시지 송수신 성공률 100%를 달성했으며, GPU/메모리 제약을 고려한 추론·RAG 파이프라인 설계까지 경험했습니다.

### 💡대표 프로젝트

- 의회문서요약프로젝트: 팀장·OCR·LLM 담당(4인), 하이브리드 OCR·스트리밍 추출·vLLM 최적화·장문 요약·RAG로 의회 문서 파이프라인 구축
- 커뮤니티 메신저 어플 프로젝트: WebSocket·RabbitMQ + STOMP 기반 실시간 메시징 서버 구축 및 성능 튜닝(p95 지연시간 27% 단축)

### [핵심 역량]

- GPU 제약(3060 12GB)을 고려한 vLLM 추론 파이프라인 및 RAG 아키텍처 설계 경험
- Chroma + LlamaIndex 기반 RAG 설계 및 RBAC 메타데이터 필터링 구현 경험
- WebSocket + RabbitMQ + STOMP 기반 실시간 메시징 서버 설계 및 성능 최적화 경험
- Docker와 GitHub Actions를 활용한 CI/CD 자동화 및 AWS 배포 경험
- React·Electron·React Native를 활용한 프론트엔드/데스크톱 클라이언트 협업 경험
- 프로젝트 팀장 경험 (기획, 설계, 개발, 배포 전체 프로세스 리딩)

> *백엔드 개발을 통해 안정적인 서비스 아키텍처를 구축하고, 
성능 최적화를 통해 효율적인 시스템을 개발하는 엔지니어로 성장하고 싶습니다.*
> 

---

# ✔️  SKILLS

**Programming-BackEnd**

☕️ java

🍃 Spring Boot

🍃 Eureka

🗃️ Hibernate

💬 WebSocket

💾 Mysql

💾 MongoDB

🐇 RabbitMQ

node.js

🐍 Python

⚡ FastAPI

🧠 vLLM

🧩 LlamaIndex

🧬 sentence-transformers

🗂️ ChromaDB

**Programming-FrontEnd**

⚡ Electron

💬 WebSocket

🔅 React

**Management Tool**

🐳 Docker

💠 Notion

📨 Slack

💫 AWS - EC2, S3, RDS, Route53, ACM

🔧 GitHub

🔧 GitHub Actions

🖥️ CUDA

---

# ✔️  PROJECTS

# 1. 의회문서요약프로젝트
[메인웹페이지-사진]
| 항목 | 내용 |
| --- | --- |
| 주제 | 의회 문서 OCR·요약 및 질의응답 시스템 |
| 프로젝트 기간 | 2026.03 ~ 2026.04 |
| 역할 및 인원 | 팀장 및 OCR·LLM 구축 담당 (총 4명) |
| 프로젝트 소개 | 메인 서버와 리소스 집약적 NLP 워커를 분리한 아키텍처 하에서 OCR 추출·장문 요약·RAG를 설계·구현하고, 팀장으로 OCR·LLM 구축을 총괄함. |
| 기술 스택 | Backend: Python, FastAPI, httpx, pydantic, uvicorn<br>LLM/RAG: vLLM(OpenAI 호환), LlamaIndex, sentence-transformers, ChromaDB<br>Infra/Tool: CUDA, SSE Streaming, WSL2(Ubuntu), `.env` 기반 운영 설정 |
| 담당 업무 | 팀장으로 OCR·LLM 구축 총괄·메인·워커 분리 설계, 하이브리드 추출·yield 스트리밍·전처리·배치 튜닝·비동기·SSE 진행률, vLLM·Prefix Caching·AWQ·동시성, 장문 요약·RAG·의미론적 청킹·하이브리드 검색·RBAC, 메인 UI 정보 구조·스트리밍 상태 가시화 |
| 성과 | **[OCR]** 텍스트 레이어 판별로 비스캔 PDF OCR 호출 100% 차단·GPU 비용 절감 / yield 스트리밍으로 대용량 PDF 안정 처리 / DPI·배치 튜닝으로 추출 속도 약 20% 향상 / 스레드 분리·SSE로 블로킹 방지·진행률 가시화<br>**[LLM]** Prefix Caching으로 동일 문서 반복 질의 TTFT 최대 80% 이상 단축 / AWQ·분산·enforce-eager로 VRAM 약 39% 절감·8B 안정 서빙 / 워커 분리로 메인 가용성 100% / asyncio.to_thread로 전체 요약 시간 약 30% 감축 / 재압축으로 80페이지 이상 요약 / 8인 동시 VRAM 50% 미만·Throughput 약 400% 이상·16인 확장 가능성 / 의미론적 청킹·BM25+벡터·유사도 0.5 하한으로 QA 신뢰성 강화 |
| 참고 자료 | architecture: `localLLM-project/architecture.md`<br>전략 문서: `localLLM-project/기존아키텍처설계전략.md` |

## localLLM-project 이미지 가이드라인

- 목적: 노션 포트폴리오에서 설계 근거와 실행 화면을 빠르게 이해시키기 위한 시각 자료 표준
- 권장 순서: 시스템 아키텍처 → 데이터/권한 구조(ERD) → 요청 플로우(Sequence) → 실행 화면(요약/QA 결과)
- 권장 이미지 목록
  - `localLLM-architecture-overview.png` (전체 아키텍처)
  - `localLLM-rag-dual-mode.png` (QA/요약 이중 RAG)
  - `localLLM-rbac-filter-flow.png` (권한 필터 흐름)
  - `localLLM-summary-sse-sample.png` (SSE 요약 응답 예시)
  - `localLLM-qa-response-sample.png` (질의응답 결과 예시)
- 작성 규칙
  - 해상도: 가로 1400px 이상, 16:9 비율 권장
  - 텍스트: 한글 기준 12pt 이상, 핵심 지표는 굵게 표기
  - 파일명: 소문자-케밥케이스, 프로젝트 접두사(`localLLM-`) 필수
  - 캡처 화면에는 민감 정보(토큰, 사용자 식별자) 노출 금지
[요약페이지-사진]
## 장문요약가능
- 청킹 → 부분요약 → 부분재요약(input 토큰 넘어갈시) → 전체요약 → 메타데이터 생성
- 최대 80페이지 이상 요약 처리

## 제목,대분류,키워드,핵심 요약 생성

- 제목: 원제목 (혹은 AI생성)
- 대분류: 템플릿에서 AI가 지정
- 키워드: 핵심주체를 AI가 선별
- 핵심요약: 전체요약을 최종요약하여 핵심만 정리

## 핵심 내용

- 3060 12GB 단일 GPU 환경에서 문서 요약/질의응답을 안정적으로 제공하는 로컬 LLM Worker 구축
- 요약 API는 SSE 기반으로 진행 상태와 최종 결과를 순차 전달해 사용자 대기 체감 개선
- 긴 문서는 단계형 요약 파이프라인(청킹/부분요약/최종요약/메타생성)으로 토큰 한계 대응
- RAG 문맥은 접근 권한(`access_level`)과 소유자(`owner_user_id`) 기준으로 필터링해 보안성 확보

## 적용 전략

- 아키텍처 분리: 메인 서버(도메인)와 Worker(LLM/RAG) 분리, vLLM은 별도 프로세스로 운영
- 모드 분리: QA는 벡터 검색 중심, 요약은 파일 순서 스캔+stride 선택으로 목적별 최적화
- 운영 중심 설정: `.env` 기반 샘플링/동시성/토큰 예산을 분리해 환경별 튜닝 가능하게 설계
- 장애 대응 우선: WSL/CUDA 이슈와 재인덱싱 조건을 문서화해 재현 가능한 운영 가이드 구축

---

# 2. 커뮤니티 메신저 어플 프로젝트

| 항목 | 내용 |
| --- | --- |
| 주제 | 커뮤니티 + 실시간 통신 시스템 |
| 프로젝트 기간 | 2024.11 ~ 2025.02 |
| 역할 및 인원 | 백엔드 개발 리드 / 팀장 |
| 프로젝트 소개 | WebSocket, RabbitMQ + STOMP를 활용한 실시간 메시징 백엔드 시스템 구축 |
| 기술 스택 | Backend: Spring Boot 3.2, WebSocket(STOMP), RabbitMQ<br>Frontend: React, Electron<br>DB: MySQL, MongoDB, Redis<br>Infra: Docker, GitHub Actions, AWS |
| 담당 업무 | 실시간 메시징 아키텍처 설계/구현, 스레드풀·캐싱·브로커 튜닝, MongoDB 인덱스 및 쿼리 최적화 |
| 성과 | p95 지연시간 27% 단축(91.9ms→67ms), 최대 지연시간 72% 개선, 300명 동시 접속 송수신 성공률 100% |

---

# 3. 뽀모도로 AI 피드백 앱 (iOS)

| 항목 | 내용 |
| --- | --- |
| 주제 | 학습 AI 피드백 통계 앱 |
| 프로젝트 기간 | 2025.06 ~ 2025.10 |
| 역할 및 인원 | 1인 개발 (풀스택) |
| 프로젝트 소개 | 뽀모도로 학습 데이터를 기반으로 AI 피드백 문서와 학습 통계를 제공하는 iOS 앱 |
| 기술 스택 | Backend: Java, Spring Boot, JPA<br>Frontend: React Native<br>DB: MySQL, MongoDB |
| 참고 자료 | BE: https://github.com/chaniii999/StudyMate<br>FE: https://github.com/chaniii999/studyMateFrontApp |
| 담당 업무 | JWT 인증/이메일 인증, WebSocket 타이머, OpenAI 연동 피드백 생성 파이프라인 구현 |

---

# 4. 텍스트 편집 프로그램 (실행가능)

| 항목 | 내용 |
| --- | --- |
| 주제 | 키보드 중심의 파일 탐색 및 텍스트 편집 데스크톱 애플리케이션 |
| 프로젝트 기간 | 2025.12 ~ 진행중 |
| 역할 및 인원 | 1인 개발 |
| 프로젝트 소개 | 마우스 없이 키보드 중심 작업이 가능한 로컬 파일 관리/텍스트 편집 앱 |
| 기술 스택 | Backend: Node.js, Electron<br>Frontend: React, TypeScript, Tailwind CSS, Vite<br>DB: SQLite (better-sqlite3)<br>Infra/Tool: Vitest, electron-builder |
| 참고 자료 | REPO: https://github.com/chaniii999/FolderingApp |
| 담당 업무 | Context Isolation/IPC 설계, 서비스 레이어 상태 분리, 빌드/배포 자동화 |

---

# 5. 캘린더 웹사이트 : 애브리플랜 (everyplan.site)

| 항목 | 내용 |
| --- | --- |
| 주제 | 캘린더 푸시알림 앱(EveryPlan) |
| 프로젝트 기간 | 2025.08 ~ 2025.09 |
| 역할 및 인원 | 풀스택 1인 |
| 프로젝트 소개 | SSE 기반 실시간 알림과 일정 관리를 제공하는 캘린더 웹 서비스 |
| 기술 스택 | Backend: Java, Spring, JPA, OAuth2<br>Frontend: HTML, CSS, JS, React, Electron<br>DB: MySQL, Redis<br>Infra: AWS, GitHub Actions |
| 참고 자료 | BE: https://github.com/chaniii999/calendar<br>FE: https://github.com/chaniii999/calendar-front |
| 담당 업무 | 일정 CRUD, SSE 알림 설계, 프론트엔드/백엔드 구현, AWS 운영 |

---

# 6. DayLongCafe 단골왕 이벤트 배너 (실서비스)

| 항목 | 내용 |
| --- | --- |
| 주제 | 무인 카페 단골왕 랭킹 |
| 프로젝트 기간 | 2025.02 ~ 2025.03 |
| 역할 및 인원 | BE 담당, FE 1인 (총 2명) |
| 프로젝트 소개 | 구글 스프레드시트 기반 구매 이력을 집계해 고객 랭킹/리워드 정보를 제공하는 이벤트 시스템 |
| 기술 스택 | Backend: Java, Spring Boot, Google Spread API<br>Infra: AWS (EC2, Route53, ACM), GitHub Actions |
| 참고 자료 | 저장소: https://github.com/chaniii999/DayLongCafe |
| 담당 업무 | API 서버 구축/운영, 데이터 조회/검색, 랭킹 및 리워드 계산 API 개발 |
| 성과 | 이벤트 기간 회원 159명 참여(약 90% 신규), 월 평균 구매량 3.07잔→3.99잔 증가 |

---

# ✔️ EDUCATION

**플레이데이터 평생교육원**                                                                                     **2024. 08 - 2025. 02**

- 풀스택 백엔드 개발자 양성 과정 수료

**학점은행제**                                                                                                             **2021. 01 - 2024. 08**

- 4년제 학사 컴퓨터공학 전공 학위 취득

**우아한형제들**                                                                                                         **2023. 10 - 2023. 11**

- 우아한테크코스 프리코스 수료

**이노베이션아카데미**                                                                                             **2023. 08 - 2023. 09**                                  

- 42SEOUL 프리코스 (La Piscine)  수료

**오산대학교**                                                                                                            **2019. 03 - 2020. 12**

- 디지털콘텐츠디자인학과 중퇴

---

# ✔️ QUALIFICATION

**컴퓨터활용능력 1급 / 대한상공회의소**                                                                                     

**시각디자인산업기사 / 한국산업인력공단**                                                                                 

**정보처리기사 필기 합격 / 한국산업인력공단**                                                                                 

---

Copyright © Sungchan Park. All rights reserved.