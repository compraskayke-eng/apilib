const tecnicoService = require('../services/tecnicoService')

function suporteN1(chamado){
    console.log("N1 recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1assumiu o chamado");
        return tecnicoService.buscaPorEspecialidade(chamado.especialidade);
    }
    console.log("N1 não conseguiu resolver");
    console.log("encaminhou para o N2..")
    return tecnicoService.buscaPorEspecialidade(chamado.especialidade);
};

function suporteN1(chamado){
    console.log("N2 recebeu o chamado");
    if(chamado.prioridade === "media"){
        console.log("N2 assumiu o chamado");
        return tecnicoService.buscaPorEspecialidade(chamado.especialidade);
    }
    console.log("N2 não conseguiu resolver");
    console.log("encaminhou para o especialista..")
    return tecnicoService.buscaPorEspecialidade(chamado.especialidade);
};

function especialista(chamado){
    console.log("especialista recebeu o chamado");
    if(chamado.prioridade === "alta"){
        console.log("especialista assumiu o chamado");
        return tecnicoService.buscaPorEspecialidade(chamado.especialidade);
    }

    throw new Error("Nenhum responsavel encontrado!")
};

module.exports ={
    suporteN1
}