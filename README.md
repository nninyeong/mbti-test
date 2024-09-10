# MBTI 테스트 프로젝트

## 프로젝트 소개

MBTI 테스트하기는 개인 프로젝트로, 20가지 질문을 통해 사용자의 MBTI를 확인할 수 있는 웹 애플리케이션입니다. 회원가입 시 등록한 닉네임과 테스트 결과를 다른 사용자들과 공유할 수 있으며, 자신의 테스트 결과에 대한 공개 여부는 언제든지 수정하거나 삭제할 수 있습니다.

- **진행 기간**: 2024.09.08 ~ 2024.09.10

<br/>
<br/>

## 배포 링크

[MBTI 테스트](https://mbti-test-taupe.vercel.app)

<br/>
<br/>

## 개발 환경

- **프론트엔드**: React, JavaScript
- **상태 관리**: context API, Tanstack Query
- **HTTP 클라이언트**: axios
- **스타일링**: Tailwind CSS

<br/>
<br/>

## 구현 기능

### 1. 회원가입/로그인/프로필 관리

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1994453e-339d-43aa-b761-e6a92a5781de" alt="스크린샷 1" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/973eb102-9594-4897-82cd-c9f709413ddb" alt="스크린샷 2" width="400"></td>
  </tr>
</table>


- JWT 인증 서버를 사용하여 사용자 인증을 구현했습니다.
- 사용자 프로필에서 닉네임 변경 기능을 제공하며, 인증된 사용자는 이 기능을 이용할 수 있습니다.

### 2. MBTI 테스트
- 20가지 질문을 통해 MBTI 테스트 결과를 얻을 수 있으며, 테스트 결과는 서버에 저장됩니다.
- 테스트 결과의 공개 여부는 사용자가 설정할 수 있으며, 다른 사용자는 공개된 결과를 조회할 수 있습니다.

### 3. 테스트 결과 관리 기능
![공개변경삭제, 낙관적업데이트 비교](https://github.com/user-attachments/assets/8c5b2d3c-f1a8-4372-b537-7edb6fe13538)

- 사용자는 자신의 테스트 결과를 삭제하거나 공개 여부를 수정할 수 있습니다.
- 모든 사용자가 다른 사용자의 공개된 테스트 결과를 볼 수 있는 페이지가 구현되어 있습니다.
- 공개/비공개 변경은 Optimistic Update를 적용해 바로 UI에 변경 상태가 표시되도록 구현했습니다.
- 삭제는 서버에서 처리되는 것을 기다리는 동안 삭제중이라는 안내가 표시되도록 구현했습니다.

### 4. 전역 상태 관리
- context API를 이용해 로그인 후 access token, 사용자 ID, 닉네임을 프로젝트 전반에서 사용할 수 있도록 전역 상태를 관리했습니다.

### 5. Tanstack Query와 axios를 이용한 테스트 결과 관리
- Tanstack Query를 활용해 서버 요청 시 `isPending`, `isError`, `isSuccess` 등의 상태를 제어하고, axios로 데이터를 주고받는 기능을 구현했습니다.

### +) 반응형 UI 구현 (update 24.09.11)
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a872660a-c130-403e-aac1-bf20cdbfb2ae" alt="responsive ui" width="600"></td>
    <td><img src="https://github.com/user-attachments/assets/f84415bb-e16b-403b-bf88-bab70849e878" alt="image" width="200"></td>
  </tr>
</table>

- width 1024px 보다 좁은 환경에서 Home.jsx에 접속하는 경우 내부 요소들이 잘린 형태로 보여 1024 이하인 경우 캐러셀로 GuidePanel.jsx을 렌더링하게 수정했습니다.


<br/>
<br/>

## 트러블슈팅

### 1. Tailwind group hover를 활용한 호버 스타일 적용
- **문제**: Link 태그에 마우스 호버 시 Link를 감싼 div에만 호버 스타일이 적용됨.
- **해결**: Tailwind에서 그룹으로 호버 이벤트를 인식할 수 있는 속성을 추가하여 해결.

### 2. 정확한 API 명세 확인과 formData 객체 활용
- **문제**: 로그인 요청 시 헤더에 인증 토큰이 없다는 에러 발생.
- **해결**: API 명세를 확인하여 body에 form 형식으로 데이터를 전달해야 함을 파악하고, formData 객체를 사용해 문제 해결.

### 3. useEffect를 활용한 유저 정보 fetch
- **문제**: 로그아웃하지 않고 재접속 시 프로필 페이지에서 닉네임이 표시되지 않음.
- **해결**: useEffect를 사용해 access token을 확인하고, 로그인 이벤트 없이도 access Token이 유효한 경우 유저 프로필 정보를 fetch하도록 수정.

<br/>
<br/>

## 회고
Tanstack Query를 처음 사용해보고, 컴포넌트 내에서 fetch하는 것이 아니라 네트워크 요청을 스크립트로 분리하는 등 익숙하지 않은 점들이 많아 생각보다 시간이 오래 걸렸다. 심지어 Tailwind를 활용하는 방식까지 생소해 스타일 적용에도 애를 먹었지만 반복하다보니 처음보다 확실히 익숙해진 느낌이다. 아직은 어색한 Tanstack Query를 포함해 앞으로 배울 다른 요소들까지 처음에는 어렵더라도 포기하지 않고 계속해서 반복연습을 해야겠다는 생각이 확실히 든 프로젝트였다.

아쉬운 점은 UX를 고려한 요소들을 더 구현하고 싶었는데, 필수 요구사항을 먼저 구현하다보니 적용하지 못한 점이 많다는 것이다. 시간 여유가 된다면 테스트 입력 유효성검사시 입력하지 않은 문항으로 이동하는 것, 반응형 UI를 구현해보고싶다!
