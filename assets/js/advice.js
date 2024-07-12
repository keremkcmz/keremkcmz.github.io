let advices = [];

function renderAdvice() {
  textDiv.innerHTML = `<p>"${advices.slip.advice}"</p>`;
  id.innerText = `ADVİCE #${advices.slip.id}`;
}

function handleRefresh() {
  init();
}

function init() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((res) => {
      advices = res;
      renderAdvice();
    });
}

init();
