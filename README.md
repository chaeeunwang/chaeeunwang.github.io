# 왕채은 포트폴리오

[포트폴리오](https://chaeeunwang.github.io/) · [PM](https://chaeeunwang.github.io/pm/) · [AI·백엔드 개발](https://chaeeunwang.github.io/developer/)

React·Vinext로 작성하고 GitHub Pages에 정적 HTML로 배포합니다. 디자인과 내용 편집 기준은 [DESIGN.md](DESIGN.md)에 있습니다.

## 실행과 검증

Node.js 24와 npm을 사용합니다.

```sh
npm ci
npm run dev
```

배포 결과 확인:

```sh
npm run build
npm run check:pages
npm start
```

`dist/client`가 배포 디렉터리입니다. `/`, `/pm/`, `/developer/`는 서버 없이 직접 열리는 HTML로 생성됩니다. 이미지는 `public/`에서 관리합니다.

Vinext 1.0.0-beta.5는 `trailingSlash: true` 내보내기에서 상세 경로를 누락합니다. 일반 HTML로 내보낸 뒤 `postbuild`가 상세 페이지를 디렉터리의 `index.html`로 옮기고, 세 경로·메타데이터·정적 자산을 검사합니다. 프레임워크에서 해당 오류가 해결되면 이 후처리를 제거할 수 있습니다.

## 배포

`main`에 push하면 GitHub Actions가 빌드·정적 출력 검사를 수행하고 GitHub Pages에 배포합니다. 저장소 Settings → Pages의 Source는 GitHub Actions를 사용합니다.

지원서 백업, Obsidian 원본, 로컬 검토 문서와 환경변수 파일은 저장소·배포에 포함하지 않습니다. 공개할 프로젝트 내용은 본인 역할과 팀 결과, 구현 범위와 검증 수준을 구분합니다.
