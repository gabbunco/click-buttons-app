// 인사해주기 버튼 기능 만들기
// greet-button branch 에서 만들었습니다.

export function greet() {
  const greetButton = document.getElementById("greet");
  greetButton.addEventListener("click", () => {
    alert("안녕하세요 유저분. 잘 오셨습니다.");
  });
}
