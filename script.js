let caixaDeSuprimentos = [];
let higiene = ['sabonete', 'papel higiênico', 'escova de dente', 'pasta de dente', 'desodorante'];
let alimentacao = ['pao de forma', 'água', 'carne enlatada', 'balas', 'café'];
let farmacia = ['curativo', 'analgésico', 'álcool', 'antialérgico', 'anti-inflamatório'];
let lazer = ['baralho', 'livro', 'jogos', 'bola', 'peteca'];

caixaDeSuprimentos.push(higiene, alimentacao, farmacia, lazer);

if (caixaDeSuprimentos.length === 4) {
    let totalItens = 0;
    for (let i = 0; i < caixaDeSuprimentos.length; i++) {
        totalItens += caixaDeSuprimentos[i].length;
    }

    if (totalItens === 20) {
        console.log('Podemos acampar.');
    } else if (totalItens > 20) {
        console.log('Tem itens demais, não precisamos de tantos.');
    } else if (totalItens < 20) {
        console.log('Precisamos de mais itens desta seção.');
    }
} else if (caixaDeSuprimentos.length < 4) {
    console.log('Algum amigo ainda não retornou com os intens');
} else if (caixaDeSuprimentos.length > 4) {
    console.log('Acho que temos um intruso.');
}