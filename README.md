# Developer Resume Template

이력서 템플릿 프로젝트입니다. React + TypeScript + Tailwind CSS로 구성되어 있으며, A4 사이즈로 최적화된 이력서를 생성할 수 있습니다.

## 기술 스택

- React 18
- TypeScript
- Vite
- Tailwind CSS 4.x
- shadcn/ui 컴포넌트

## 시작하기

### 의존성 설치

```bash
npm install
```

또는

```bash
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 이력서 내용 수정

이력서 내용을 수정하려면 `src/data/resume.ts` 파일을 편집하세요.

- 개인 정보: `personalInfo`
- 자기소개: `summary`
- 기술 스택: `skills`
- 프로젝트: `projects`
- 학력: `education`
- 자격증: `qualifications`

## 프로젝트 구조

```
src/
├── app/
│   ├── App.tsx                    # 메인 앱 컴포넌트
│   └── components/
│       └── resume/                # 이력서 섹션 컴포넌트들
│           ├── Header.tsx
│           ├── Summary.tsx
│           ├── Skills.tsx
│           ├── Projects.tsx
│           ├── ProjectItem.tsx
│           ├── Education.tsx
│           └── Qualifications.tsx
├── data/
│   └── resume.ts                  # 이력서 데이터
└── styles/                        # 스타일 파일
```

## 인쇄

브라우저의 인쇄 기능(Ctrl+P / Cmd+P)을 사용하여 PDF로 저장할 수 있습니다.
인쇄 시 A4 사이즈로 최적화되어 있습니다.

## 라이선스

이 프로젝트는 개인 사용 목적으로 자유롭게 사용할 수 있습니다.
