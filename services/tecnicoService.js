const tecnicos = [
    {
        nome:"João da Silva",
        especialidade:"redes"
    },
    {
        nome:"John connor",
        especialidade:"software"
    },
    {
        nome:"Maria dos Santos",
        especialidade:"hardware"
    }
]

function buscaPorEspecialidade(especialidade){
    return tecnicos.find(tecnico =>{
        return tecnico.especialidade === especialidade;
    });
}

module.exports = {
    buscaPorEspecialidade
};




