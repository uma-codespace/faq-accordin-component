const questions = document.querySelectorAll(".faq-qn");

questions.forEach((question) => {
  question.addEventListener("click", function (e) {
    const questionEl = e.target.closest(".faq-qn");
    if (!questionEl) return;
    console.log(questionEl);

    const icon = questionEl.querySelector(".action-icon");
    if (icon.src.includes("icon-plus")) {
      icon.src = "assets/images/icon-minus.svg";
    } else if (!icon.src.includes("icon-plus")) {
      icon.src = "assets/images/icon-plus.svg";
    }

    const answerEl = questionEl.nextElementSibling.querySelector(".faq-ans p");

    answerEl.classList.toggle("open");
  });
});
