import {
    MODIFICA_EMAIL,
    MODIFICA_PASSWORD,
    LOADING_EM_ANDAMENTO,
    USUARIO_SUCESSO,
    USUARIO_ERRO,
    DESLOGADO,
    LIMPA
} from './types'


const INITIAL_STATE = {
    senha: 'je sim',
    erro_login: '',
    loading_login: false,
    isAutenticaded: false,
};

export default Auth = (state = INITIAL_STATE, action) => {
        switch(action.type){
            case MODIFICA_PASSWORD: return{
                ...state,
                senha : action.payload,
                erro_login: ''
            }
            case USUARIO_SUCESSO: return{
                ...state,
                isAutenticaded : true,
                email:'',
                senha:'',
                loading_login: false
            }
            case LOADING_EM_ANDAMENTO: return {
                ...state,
                loading_login: true,
                erro_login: ''
            }
            case USUARIO_ERRO: return {
                ...state,
                erro_login: 'Erro,verifique seus dados!',
                loading_login: false
            }
            case DESLOGADO: return {
                ...state,
                ...INITIAL_STATE
            }
            case LIMPA : return{
                ...state,
                ...INITIAL_STATE
            }
            default:
                return state;
        }
}
