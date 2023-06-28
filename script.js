const changeBtn = document.getElementById("change-advice-btn");

async function getAdvice() {
  const respones = await fetch("https://api.adviceslip.com/advice");
  const result = await respones.json();

  return result;
}
const advice = () => {
  const adviceDesc = document.getElementById("advice");
  adviceDesc.innerHTML = "Loading...";
  setTimeout(() => {
    getAdvice()
      .then((res) => {
        const adviceTitle = document.getElementById("advice-title");
        adviceDesc.innerText = res.slip.advice;
        adviceTitle.innerText = res.slip.id;
      })
      .catch(() => {
        console.log("Error happend");
      });
  }, 1500);
};
changeBtn.addEventListener("click", advice);
advice();
