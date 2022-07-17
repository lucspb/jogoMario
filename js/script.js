const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    // add a funcao do jump
    mario.classList.add('jump');


    setTimeout(()=>{
        //remove a funcao do jump, para poder fazer o jump novamente
        mario.classList.remove('jump');

     }, 500);
}

const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // o + altera a string para number

    console.log(marioPosition)
    
    // caso o mario encoste no pipe
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        
        //acaba a animacao do pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        //acaba a animacao do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        //finalizar o loop
        clearInterval(loop);
    }

} , 10)

// pressiona uma tecla e dispara a funcao do jump
document.addEventListener('keydown', jump);

