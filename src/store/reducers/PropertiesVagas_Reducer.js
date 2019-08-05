import { CADASTROVAGA } from './types'

const INITIAL_STATE = {
    user: {},
    tipomoradia: '',
    cidade: 'Crateús',
    bairro: 'Venancios',
    rua: 'Eduardo Albuquerque',
    latitude: '',
    longitude: '',
    images: {},
    qtdQuartos: 5,
    qtdBanheiros: 0,
    qtdQuartosSuites: 0,
    ceramica: '',
    forrada: '',
    tipoQuarto: '',
    preferencia: '',
    nome: 'AP do Jê',
    qtdPessoasMorando: 0,
    valorTotalAluguel: 0,
    aceitaAnimais: '',
    internet: '',
    garagem: '',
    fumantes: '',
    descricao: 'perto do colégio gaspar dutra, oferece muita coisa boa',
    date_postagem: new Date()
};
export default VagasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CADASTROVAGA: return {
            ...state,

        }
        default:
            {
                return {
                    ...state
                }
            }
    }
}