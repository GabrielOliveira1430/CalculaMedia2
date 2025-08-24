const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout,
})


let notas = [];


function perguntarNota(numero){
    return new Promise((resolve) => {
        readline.question(`Digite a nota ${numero}:` , (resposta) => {
            resolve(parseFloat(resposta))
        })
    })
}

async function main(){
    console.log('calculadora de média')

    for(let i = 1; i <=3; i++){
        let nota = await perguntarNota(i);
        notas.push(nota)
    }

    let soma = notas.reduce((acc,val) => acc + val, 0  );
    let media = soma/ notas.length;
    console.log(`\nMédia do aluno: ${media.toFixed(2)}`);

    if(media >= 7 ){
        console.log('Aluno aprovado')
    }else { console.log('Aluno reprovado')}
    readline.close()
}

main()

//Calculadora mais complexa