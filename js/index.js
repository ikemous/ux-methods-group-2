const ADD_TASK_BUTTON = document.getElementById("add-task");
const MODAL_CONTAINER = document.getElementById("modal-container");
const MODAL = document.getElementById("modal");


const toggleModal = () => MODAL_CONTAINER.classList.contains("d-flex") ? MODAL_CONTAINER.classList.remove("d-flex") : MODAL_CONTAINER.classList.add("d-flex");
ADD_TASK_BUTTON.addEventListener("click", function() {
    toggleModal();
});

MODAL_CONTAINER.addEventListener("click", function(event) {
    toggleModal();
});

MODAL.addEventListener("click", function(event) {
    event.stopPropagation();
});