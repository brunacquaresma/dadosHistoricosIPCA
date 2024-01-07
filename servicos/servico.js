import historicoInflacao from '../dados/dados.js';

export const buscarHistorico = () => {
    return historicoInflacao;
}

export const buscarHistoricoPorAno = (ano) => {
    return historicoInflacao.filter(historico => historico.ano === ano);
};

export const buscarHistoricoPorId = (id) => {
    const idIPCA = parseInt(id);
    return historicoInflacao.find(historico => historico.id === idIPCA);
}

export const calculoIPCA = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    const historicoFiltrado = historicoInflacao.filter(historico => {
        if (anoInicial === anoFinal) {
            return historico.ano === anoInicial && historico.mes >= mesInicial && historico.mes <= mesFinal; // Mesmo ano, período entre meses.
        } else {
        // anoInicial é diferente de anoFinal.
        // Se anoInicial é diferente de anoFinal, a função filtra eventos em um intervalo de anos. Os eventos incluídos podem ser:
            return (
                (historico.ano === anoInicial && historico.mes >= mesInicial) || // Na mesma data do ano inicial e cujo mês é maior ou igual a data do mês inicial.
                (historico.ano > anoInicial && historico.ano < anoFinal) ||  // Em anos intermediários (maiores que anoInicial e menores que anoFinal).
                (historico.ano === anoFinal && historico.mes <= mesFinal) // No mesmo ano final e cujo mês é menor ou igual a data do mês final.
            );
        }
    }
);

    let taxasMensais = 1;
    for (const elemento of historicoFiltrado) {
        taxasMensais *= (elemento.ipca / 100) + 1;
    }

    const resultado = valor * taxasMensais;
        return parseFloat(resultado.toFixed(2));
};

export const validacaoErro = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    const anoLimiteFinal = historicoInflacao[historicoInflacao.length - 1].ano;
    const anoLimiteInicial = historicoInflacao[0].ano
    const mesLimiteFinal = historicoInflacao[historicoInflacao.length - 1].mes;
    if (
        isNaN(valor) ||
        isNaN(mesInicial) ||
        isNaN(anoInicial) ||
        isNaN(mesFinal) ||
        isNaN(anoFinal) ||
        mesInicial < 1 || mesInicial > 12 ||
        anoInicial < anoLimiteInicial || anoInicial > anoLimiteFinal ||
        mesFinal < 1 || mesFinal > 12 ||
        anoFinal < anoLimiteInicial || anoFinal > anoLimiteFinal ||
        (anoFinal === anoLimiteFinal && mesFinal > mesLimiteFinal) ||
        anoFinal < anoInicial ||
        (anoFinal == anoInicial && mesFinal < mesInicial)
    ) {
        return true;
    } else {
        return false;
    }
};