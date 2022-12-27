// 버튼들 삭제 기능 구현 파일
// remove-button branch 에서 만들었습니다

export function remove() {
  // 삭제하는 기능을 추가할 버튼 가져오기
  // HTML에 있는 모든 버튼들 가져와서 하나하나 지워주기

  const removeButton = document.getElementById("remove");
  removeButton.addEventListener("click", () => {
    const allButtons = document.querySelectorAll("button");
    // remove all buttons
    allButtons.forEach((eachButton) => {
      eachButton.remove();
    });
    // remove p#number 
    document.getElementById("number").remove();
  });
}
