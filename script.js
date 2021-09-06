document.addEventListener('DOMContentLoaded', function(){

    const play1 = document.querySelector('.play1-input');
    const play2 = document.querySelector('.play2-input');
    const play_div1 = document.querySelector('.play-div-1');
    const play_div2 = document.querySelector('.play-div-2');
    const play1_button = document.querySelector('.play1-button');
    const play2_button = document.querySelector('.play2-button');
    const finalizar_button = document.querySelector('.finalizar-button');
    const result = document.querySelector('.result-area');

    result.style.display = 'none';

    let value1 = 1;
    let value2 = 1;

    play1_button.addEventListener("click", numberPlay1);
    play2_button.addEventListener("click", numberPlay2);
    finalizar_button.addEventListener("click", comparaNumero);

    function numberPlay1(){
        value1 = Number(play1.value);
        play1.value = 00;

        play_div2.style.display = 'block';
        play_div1.style.display = 'none';
    }

    function numberPlay2(){
        value2 = Number(play2.value);
        play2.value = 00;

        play_div2.style.display = 'none';
        finalizar_button.style.display = 'block';
    }

    function comparaNumero(){
        
        finalizar_button.style.display = 'none';

        if(value1>value2){
            vencedor1();
        } else if(value1<value2){
            vencedor2();
        } else {
            empate();
        }
    }

    function vencedor1(){
        result.style.display = 'block';

        let resultado = `
        <h2 class="result-description">
            O vencedor foi o jogador 1
        <h2>
        `;
        result.innerHTML = resultado;
    }

    function vencedor2(){
        result.style.display = 'block';

        let resultado = `
        <h2 class="result-description">
            O vencedor foi o jogador 2
        <h2>
        `;
        result.innerHTML = resultado;
    }

    function empate(){
        result.style.display = 'block';

        let resultado = `
        <h2 class="result-description">
            Foi empate!
        <h2>
        `;
        result.innerHTML = resultado;
    }

});