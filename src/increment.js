// 증가시키기 버튼 기능
// increment-button branch 에서 추가되었습니다

export function increment() {
  // p#number textContent -> 숫자형으로 바꿔준다
  // 숫자에 1을 더해서 다시 textContent 로 업데이트 시켜준다

  const incrementButton = document.getElementById("increment");
  incrementButton.addEventListener("click", () => {
    const p = document.getElementById("number");
    p.textContent = `${parseInt(p.textContent) + 1}`;
  });
}
