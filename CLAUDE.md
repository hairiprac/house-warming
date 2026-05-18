# 해리집 — 하우스워밍 초대장

Next.js 16 App Router 기반 모바일 웹 초대장.

## 기술 스택

- **Next.js 16** (App Router, RSC)
- **Tailwind CSS v4** (`@import "tailwindcss"` 방식, config 파일 없음)
- **shadcn/ui** — style: `base-nova`, base-ui 기반 primitives
- **TypeScript**, **pnpm**

## 디자인 토큰 (Figma: haereeHome)

모든 색상은 Tailwind arbitrary value로 직접 사용한다.

| 이름 | 값 | 용도 |
|---|---|---|
| ParkGreen | `#255435` | 주요 텍스트, 메뉴 배경 |
| ParkOffwhite | `#F5F0E8` | 페이지 배경, 아이콘 포인트 |
| ParkSage | `#819E7A` | GNB 탭, 하단 영역 |

## 프로젝트 구조

```
src/
  app/
    layout.tsx       # 전역 레이아웃 (Noto Sans KR, lang=ko, 모바일 중앙정렬)
    page.tsx         # 메인 진입 페이지
    globals.css      # Tailwind 임포트, shadcn CSS 변수
  components/
    ui/              # shadcn add 로 추가된 컴포넌트만 위치 (직접 수정 가능)
  lib/
    utils.ts         # cn() 유틸
```

## 컴포넌트 재사용 규칙

### shadcn 컴포넌트 추가

```bash
pnpm dlx shadcn add <component>
```

`src/components/ui/`에 생성된다. 프로젝트 요구에 맞게 수정해도 된다.

### 페이지 전용 컴포넌트

페이지에서 한 번만 쓰이는 컴포넌트는 해당 `page.tsx` 안에 함수로 작성한다.  
두 곳 이상에서 쓰이는 순간 `src/components/` 아래로 분리한다.

```
src/components/
  ui/          # shadcn 컴포넌트
  <기능명>/    # 공유 컴포넌트 (예: src/components/menu/)
```

### cn() 사용

조건부 클래스 조합 시 `cn()`을 사용한다.

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-class", isActive && "active-class")} />
```

## shadcn 사용 지침

- **style**: `base-nova` — Base UI primitives 위에 구성됨
- **아이콘**: `lucide-react` (프로젝트에 설치됨)
- **경로 alias**: `@/components`, `@/components/ui`, `@/lib`, `@/hooks`
- CSS 변수는 `globals.css`의 `:root`에 정의됨
- 새 컴포넌트를 추가할 때 `components.json`의 aliases를 따른다

### 주의

- `shadcn/ui`는 자체 CSS 변수 시스템을 사용하지만, 이 프로젝트의 실제 색상은 Figma 디자인 토큰(ParkGreen 등)을 우선한다
- shadcn 기본 팔레트(primary, secondary 등)가 아닌 `#255435`, `#F5F0E8`, `#819E7A`를 직접 사용한다

## 레이아웃 규칙

- 모바일 기준 설계: `max-w-[420px] mx-auto`
- `min-h-full flex flex-col`을 body에 적용하고, 각 page의 `<main>`은 `flex-1 flex flex-col`로 채운다
- 데스크톱에서는 중앙에 모바일 뷰가 표시된다

## 커밋 정책

**논리 작업 단위 하나 = 커밋 하나.** 여러 기능을 한 커밋에 묶지 않는다.

### 형식

```
<타입>: <한 줄 요약>
```

### 타입

| 타입 | 사용 시점 |
|---|---|
| `feat` | 새 페이지·기능 추가 |
| `fix` | 버그 수정 |
| `style` | 시각적 조정 (로직 변경 없음) |
| `refactor` | 컴포넌트 분리, 코드 정리 |
| `chore` | 패키지 설치, 설정 변경 |

### 예시

```
feat: 메인 진입 페이지 구현
feat: 방문예약 페이지 추가
fix: 모바일 하단 safe-area 여백 누락 수정
style: 메뉴 항목 호버 색상 조정
refactor: MenuItem을 공유 컴포넌트로 분리
chore: shadcn dialog 컴포넌트 추가
```
