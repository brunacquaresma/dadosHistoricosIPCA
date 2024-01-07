import express from 'express';
import { buscarHistorico, buscarHistoricoPorAno, buscarHistoricoPorId, calculoIPCA, validacaoErro } from './servicos/servico.js';

const app = express();

app.get('/historicoIPCA', (req, res) => {
    const ano = parseInt(req.query.ano);

    if (!isNaN(ano) && ano >= 2015 && ano <= 2023) {
        let resultado = buscarHistoricoPorAno(ano);
        res.json(resultado);

    } else if (isNaN(ano) || ano === undefined) {
        let resultado = buscarHistorico();
        res.json(resultado);

    } else {
        res.status(404).send({ "erro": "Nenhum histórico encontrado para o ano especificado" });
    }
});

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseFloat(req.query.valor);
    const mesInicial = parseInt(req.query.mesInicial);
    const anoInicial = parseInt(req.query.anoInicial);
    const mesFinal = parseInt(req.query.mesFinal);
    const anoFinal = parseInt(req.query.anoFinal);

    if (validacaoErro(valor, mesInicial, anoInicial, mesFinal, anoFinal)) {
        res.status(400).json({ erro: 'Parâmetros inválidos' });
    }
    const resultado = calculoIPCA(valor, mesInicial, anoInicial, mesFinal, anoFinal);
    res.json({ resultado: resultado })
});

app.get('/historicoIPCA/:id', (req, res) => {
    const id = req.params.id;
    const idIPCA = buscarHistoricoPorId(id);

    if(idIPCA) {
        res.json(idIPCA);
    } else {
        res.status(404).send({ "erro": "Elemento não encontrado" });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});