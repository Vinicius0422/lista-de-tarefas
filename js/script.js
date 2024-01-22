let input = document.getElementById('inputText');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista');

let contador = 0;

function addTarefa(){
    //Pegar o valor do input
    let valorInput = input.value;

    if((valorInput !== '') && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novaTarefa = `<div id="${contador}" class="tarefa">
            <div onclick="marcarTarefa(${contador})" class="icon"><i id="icone_${contador}" class="large material-icons">panorama_fish_eye</i></div>
            <div onclick="marcarTarefa(${contador})" class="text">${valorInput}</div>
            <div class="delete">
                <button onclick="deletarTarefa(${contador})" class="botao"><i class="large material-icons">delete</i></button>
            </div>
        </div>`;
    
        //Adicionar nova tarefa
        main.innerHTML += novaTarefa;

        //Limpar o input
        input.value='';
        input.onfocus();
    } else {

    }
}

function deletarTarefa(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe === "tarefa"){
        item.classList.add('selecionada');
        
        var icone = document.getElementById('icone_'+ id);
        icone.classList.add('check_circle');
        icone.innerHTML = `<i id="id" class="large material-icons">check_circle</i>`;

        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('selecionada');
        
        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('check_circle');
        icone.innerHTML = `<i id="id" class="large material-icons">panorama_fish_eye</i>`;
    }
}

input.addEventListener("keyup", function(event){
    //Se teclar enter (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})