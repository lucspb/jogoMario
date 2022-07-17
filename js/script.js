const mario = document.querySelector('.mario');

const jump = () => {
    // add a funcao do jump
    mario.classList.add('jump');


    setTimeout(()=>{
        //remove a funcao do jump, para poder fazer o jump novamente
        mario.classList.remove('jump');

     }, 500);
}
// pressiona uma tecla e dispara a funcao do jump
document.addEventListener('keydown', jump);

