export const toggleModal = () => {
  const modal = document.querySelector(".modal");
  const closeModalBtn = document.querySelector(".modal__close-btn");
  const modalBtns = document.querySelectorAll(".open-modal");
  modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
      modal.classList.toggle("modal-open");
    });
  });
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("modal-open");
  });
  modal.addEventListener("click", (e) => {
    e.target === modal ? modal.classList.remove("modal-open") : "";
  });
};
