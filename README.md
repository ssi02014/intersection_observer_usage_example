# 💻 Intersection Observer 활용

- 위 프로젝트는 Intersection Observer를 활용할 수 있는 예제를 모아놓을 저장소입니다.

<br />

## 활용 예제

1. 이미지 Lazy Loading
2. 무한 스크롤

계속 추가할 예정...

<br />

## ✅ 개념 정리 참고

- [Intersection Observer 개념 정리](https://blog.naver.com/ssi02014/222718621102)

<br />

## 📝 Intersection Observer란?

- `Intersection Observer(교차 관찰자 API)`는 타겟 엘리먼트와 타겟의 부모 혹은 상위 엘리먼트의 Viewport가 교차되는 부분을 비동기적으로 관찰하는 API이다.
- 여기서 Viewport란 현재 화면에 보여지고 있는 다각형의 영역을 말한다. 쉽게 생각하면 지금 보는 화면이다.
- 즉, Intersection Observer란 화면(Viewport) 상에 내가 지정한 타겟 엘리먼트가 보이고 있는지를 `관찰하는 API`인 것이다.
- 이러한 기능은 비동기적으로 실행되기 때문에, scroll 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제를 보완할 수 있다.

<br />

## 📝 Intersection Observer의 장점

1. 호출 수 제한 방법인 debounce와 throttle을 사용하지 않아도 된다.
   - 기존에 스크롤과 같은 이벤트는 굉장히 많은 호출이 일어나게 되는데 이를 컨트롤하기 위해 `debounce`와 `throttle`로 컨트롤한다. 하지만 Intersection Observer를 이용하면 훨씬 간편하게 해결할 수 있다.
2. reflow를 하지 않는다.
   - 참고로 스크롤 이벤트에서는 현재의 높이 값을 알기 위해 offsetTop을 이용하는데 정확한 값을 가져오기 위해 매번 layout을 새로 그리게 된다. 즉 렌더 트리를 다시 그린다는 건데 `reflow`라고도 불리는 이 일련의 과정이 반복되면 당연히 브라우저 성능에 악영향을 끼친다.
3. 호환성
   - IE를 제외하고 대부분의 브라우저에서 지원된다.

<br />
