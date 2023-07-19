// const h = document.querySelector('.h');

// h.onclick = function () {
//     this.classList.toggle('active');
//     console.log("selected")
// }

const alkalii = document.querySelector('.alkali-label');
const alkali = document.querySelector('.alkali');

// alkalii.onclick = function () {
//     alkali.classList.toggle('active')
//     console.log("done");
// }

alkalii.addEventListener('click', function () {
    alkali.classList.toggle('active')
    console.log("done");
})