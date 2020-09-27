let closeButton = document.querySelector('.close-button');
let quoshModal = document.querySelector(".quosh-modal")


function handleClose(){
    quoshModal.style.display = "none";
}
closeButton.addEventListener('click', handleClose)