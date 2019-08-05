import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    MODIFICA_FOTO,
    CADASTRO_ERRO,
    CADASTRO_SUCESSO,
    LOADING_CADASTRO,
    CADASTRADO,
    MODIFICA_NUMBER,
    MODIFICA_DATA,
    MODIFICA_SEXO,
    LIMPA
} from './types'
import _ from 'lodash'

const INITIAL_STATE = {
    email: '',
    nome: '',
    dataNascimento:'',
    senha: '',
    sexoMasculino: false,
    sexoFeminino: false,
    number: '',
    cargo: '',
    sexo: '',
    descricao: '',
    photo: [],
    message_error: '',
    erro_login: '',
    loading_login: false,
    loading_cadastro: false,
    isCadastrado: false,
    uri:null
};

const Register_Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MODIFICA_EMAIL:
            return {
                ...state,
                email: action.payload,
                message_error: ''
            }
        case MODIFICA_SENHA:
            return {
                ...state,
                senha: action.payload,
                erro_login: '',
                message_error: ''
            }
        case MODIFICA_FOTO:
            return {
                ...state,
                uri: action.payload
            }
        case MODIFICA_SEXO:
            return{
                ...state,
                sexo: action.payload
            }
        case MODIFICA_NOME:
            return {
                ...state,
                nome: action.payload,
                message_error: ''
            }
        case MODIFICA_DATA:
            return{
                ...state,
                dataNascimento : action.payload
            }
        case MODIFICA_NUMBER:{
            return{
                ...state,
                number: action.payload
            }
        }
        case CADASTRO_ERRO:
            return {
                ...state,
                message_error: 'Ops! houve um erro. Verifique todos os campos!',
                loading_cadastro: false,
                isCadastrado: false
            }
        case CADASTRO_SUCESSO:
            return {
                ...state,
                isCadastrado: true,
                ...INITIAL_STATE
            }
        case LOADING_CADASTRO:
            return {
                ...state,
                loading_cadastro: true,
                message_error: ''
            }
        case LIMPA:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case CADASTRADO: return{
            ...state,
            isCadastrado:true
        }
        case 'DeletePerfil': return {
            ...state,
            uri:action.payload
        }
        default:
            return state;
    }

};
export default Register_Reducer;