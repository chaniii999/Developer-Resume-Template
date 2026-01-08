# 이력서 PDF 생성기

A4 사이즈로 최적화된 이력서를 PDF로 저장할 수 있는 프로젝트입니다.

## 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속 후, **Ctrl+P (또는 Cmd+P)**로 PDF 저장하세요.

## 이력서 내용 수정

`src/data/resume.ts` 파일만 수정하면 됩니다. 파일 내 주석을 참고하여 각 섹션을 쉽게 찾아 수정할 수 있습니다.

- **개인 정보**: `personalInfo` 섹션
- **자기소개**: `summary` 섹션
- **기술 스택**: `skills` 섹션
- **프로젝트**: `projects` 섹션
- **학력**: `education` 섹션
- **자격증**: `qualifications` 섹션

## PDF 저장 방법

1. 개발 서버 실행 (`npm run dev`)
2. 브라우저에서 열기
3. **Ctrl+P** (Windows) 또는 **Cmd+P** (Mac) 누르기
4. 대상: **PDF로 저장** 선택
5. 저장

인쇄 설정에서 여백을 "없음" 또는 "최소"로 설정하면 더 깔끔하게 저장됩니다.
