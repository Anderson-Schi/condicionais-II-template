//const idadeDependente = prompt(`Solicitacao de dependente. \n Qual a idade do dependente? `);
//const rIdadedpendente = Number(idadeDependente);

/* if(idadeDependente >=13){
    if(idadeDependente < 18){
        console.log(`Seu dependente com idade ${idadeDependente} anos \n pode ter um cartao de credito vinculado ao seu`);
    }else{
        console.log(`O dependente ja pode ter seu proprio cartao Labank`);
    }   
}else{
    console.log(`Consulte outras possibilidades do Labank`);
}; */

//usando operador logico

/* if(idadeDependente >= 13 && idadeDependente < 18){
    console.log(`Seu dependente com idade ${idadeDependente} anos \n pode ter um cartao de credito vinculado ao seu`);
}else if(idadeDependente > 17){
    console.log(`O dependente ja pode ter seu proprio cartao Labank`);
}else {
    console.log(`Consulte outras possibilidades do Labank`);
}; */

// IF ternario

//idadeDependente == 13 ? console.log(`A idade do dependente e ${idadeDependente} anos e ja pode ter um cartao.`) : console.log("Verifique as opcoes possiveis.");

//Switch-case

/* const ramal = Number(prompt("Digite o numero do ramal \n 1 para `Facil`; \n 2 para `Black`; \n 3 para `Platinum`; \n 4 para `Master Gold`"));

switch(ramal){
    case 1:
    console.log("Cartao Facil");
    break;

    case 2:
    console.log("Cartao Black");
    break;

    case 3:
    console.log("Cartao Platinum");
    break;

    case 4:
    console.log("Cartao Master Gold");
    break;

    default:
    console.log("Escolha uma das quatro opcoes disponiveis");
}; */

// Para guardar na cabeca

const num = Number(prompt("Digite um numero"));

/* if(num%2 === 0){
    if(num%3 === 0){
        console.log(`O numero digitado ${num}, e divisivel por 2 e 3`)
    }
}else{
    console.log(`O numero ${num}, nao e divisivel por 2 e por 3`)
}; */

if(num%2 === 0 && num%3 === 0){
    //console.log(`O numero digitado ${num}, e divisivel por 2 e 3`)
    //num === 30 ? console.log("Uffa ACERTEII !!! ") : console.log("nao foi dessa vez :(");
    switch(num){
        case 6:
        console.log(`O Numero 6 e divisivel por 2 e 3 `);
        break;

        case 12:
        console.log(`O Numero 12 e divisivel por 2 e 3 `);
        break;

        case 18:
        console.log(`O Numero 18 e divisivel por 2 e 3 `);
        break;

        case 24:
        console.log(`O Numero 24 e divisivel por 2 e 3 `);
        break;

        case 30:
        console.log(`O Numero 30 e divisivel por 2 e 3 `);
        break;
    }

}else{
    //console.log(`O numero ${num}, nao e divisivel por 2 e por 3`);
    console.log(`Ou numero e maior que 30 ou menor 6 `);
};


