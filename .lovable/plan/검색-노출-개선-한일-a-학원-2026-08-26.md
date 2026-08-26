# 검색 노출 개선 (한일 A+ 학원)

## 지금 상황

- 사이트는 정상 공개되어 있습니다 (https://a-plus-math.lovable.app, 200 응답).
- 이 프로젝트에는 Google Search Console 연결이 없어서, 구글이 이 사이트를 실제로 색인했는지 확인할 데이터가 없습니다. "데이터 없음"이지 "노출 0 확정"은 아닙니다.
- 확인된 기술적 문제:
  - `public/sitemap.xml` 파일이 없음 (요청 시 앱 HTML이 대신 반환됨)
  - `robots.txt`에 사이트맵 주소가 없음
  - 페이지에 `canonical` / `og:url` 태그 없음
  - HTML `lang`이 `en`으로 되어 있음 (한국어 사이트인데 영어로 표기)
- 참고: 새로 만든 사이트는 구글 색인까지 보통 며칠~몇 주가 걸립니다. 또한 국내 검색은 네이버 비중이 커서 네이버 쪽 등록이 별도로 필요합니다.

## 할 일

1. **사이트맵 추가** — `public/sitemap.xml`에 홈 URL 등록.
2. **robots.txt 보강** — `Sitemap: https://a-plus-math.lovable.app/sitemap.xml` 추가.
3. **canonical / og:url 추가** — `src/routes/index.tsx`의 `head()`에 자기 자신을 가리키는 canonical과 og:url 추가.
4. **언어 설정** — 루트 라우트의 `<html lang>`을 `ko`로 변경.
5. **지역 검색 키워드 보강** — 제목·설명·본문에 "수원 수학학원", "조원동 영어수학 학원", "장안구 학원" 같은 실제 검색어가 자연스럽게 들어가도록 문구 조정 (디자인 변경 없음).
6. **구조화 데이터 보강** — 기존 EducationalOrganization JSON-LD에 `url`, `image`, 좌표/영업시간 형식 정리.

## 승인 후 추가로 제안드릴 것

- **Google Search Console 연결**: 승인해 주시면 사이트 소유권 확인 → 등록 → 사이트맵 제출까지 진행하고, 실제 색인 상태를 확인할 수 있습니다.
- **네이버 서치어드바이저 / 네이버 스마트플레이스 등록**: 국내 학원 검색에서는 이쪽이 더 중요합니다. 이건 직접 계정으로 하셔야 해서 필요한 절차를 안내해 드리겠습니다.

## 기술 메모

- 변경 파일: `public/sitemap.xml`(신규), `public/robots.txt`, `src/routes/index.tsx`, `src/routes/__root.tsx`
- canonical은 leaf 라우트에만 추가 (루트에 넣으면 중복 태그 발생)
- 변경 사항은 게시(Publish) 후에야 검색엔진이 볼 수 있습니다.
