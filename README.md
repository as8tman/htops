# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Frontend

- 컴포넌트 재사용 우선
- 기존 CSS 구조를 최대한 유지
- 새로운 라이브러리 추가 금지
- 기존 컴포넌트가 있으면 재사용

## Backend

- 기존 API 구조 유지
- DB 스키마 임의 변경 금지

## 작업 원칙

- 요청받은 범위만 수정한다.
- 관련 없는 파일은 수정하지 않는다.
- 기존 기능을 깨뜨리지 않는다.
- 작업 전에 필요한 파일만 확인한다.
- 작업 후 변경사항을 간단하게 요약한다.

## 금지

- 프로젝트 전체를 무조건 탐색하지 않는다.
- 필요하지 않은 리팩터링을 하지 않는다.
- 라이브러리를 임의로 추가하지 않는다.
