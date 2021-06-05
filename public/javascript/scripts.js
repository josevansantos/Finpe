const Modal = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-transaction").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do modal
    document.querySelector(".modal-transaction").classList.remove("active");
  },
};

const ModalRegister = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-register").classList.add("active");
  },
  close() {
    // fechar o modal
    // remover a class active do modal
    document.querySelector(".modal-register").classList.remove("active");
  },
};


