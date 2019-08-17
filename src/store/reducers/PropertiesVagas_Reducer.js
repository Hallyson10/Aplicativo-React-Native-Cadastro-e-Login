import { CADASTROVAGA } from './types'

const INITIAL_STATE = {
    user: {},
    tipomoradia: 'Vaga Compartilhada',
    cidade: '',
    bairro: '',
    rua: '',
    latitude: '0',
    longitude: '',
    images: [],
    qtdQuartos: 0,
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
    //alert(JSON.stringify(action.payload))
    //alert(JSON.stringify(state.images))
    switch (action.type) {
        case CADASTROVAGA: return {
            ...state,

        }
        
        case 'savePhotos':
            return {
                ...state,
                images: state.images.concat(action.payload)
            }
            break;

        case 'RemovePhotos':
                
            try {
                
                var im = [...state.images]
                var index = state.images.indexOf(action.payload)
                if (index > -1) {
                    im.splice(index, 1);
                }
                return {
                    ...state,
                    images: im
                }
            } catch (error) {
                alert(error)
            }
            break;

        case 'LocationCity':return{
            ...state,
            cidade : action.payload
        }
        case 'LocationRua':return{
            ...state,
            rua : action.payload
        }
        case 'LocationBairro':return{
            ...state,
            bairro : action.payload
        }
        case 'LongitudeLatitude':
        return{
            ...state,
            longitude : action.payload.long,
            latitude : action.payload.lat
        }

        case 'TIPO_VAGA': return {
            ...state,
            tipomoradia: action.payload
        }
            break;

        case 'limpaVaga': return {
            ...state,
            ...INITIAL_STATE
        }
            break;

        default: 
            return state
    }
}