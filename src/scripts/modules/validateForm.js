import Imask from "imask";

export const validateForm = () => {
  const element = document.getElementById("number");
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };
  const mask = IMask(element, maskOptions);
  mask.updateValue();

  const modalForm = document.querySelector(".modal__form");
  const submitBtn = document.querySelector(".modal__btn");
  const inputs = document.querySelectorAll(".modal__input");
  const labels = document.querySelectorAll(".modal__label");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  submitBtn.addEventListener("click", () => {
    inputs.forEach((input, i) => {
      if (inputs[i].value.length <= 0) {
        inputs[i].classList.add("validate-input");
        labels[i].classList.add("validate-label");
        modalForm.addEventListener("submit", handleSubmit);
      } else {
        inputs[i].classList.remove("validate-input");
        labels[i].classList.remove("validate-label");
      }
    });
  });
};
