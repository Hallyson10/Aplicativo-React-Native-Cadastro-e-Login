import { BUSCA_USUARIOS, USUARIO_PROCURANDO_IMOVEL,PROFILE, LIMPA } from './types'

const INITIAL_STATE = {
    usuario : []
}

export default AtivarBuscaImovel = (state = INITIAL_STATE, action) => {

        switch(action.type){
            case PROFILE : return{
                ...state,
                usuario : action.payload
            }
            case BUSCA_USUARIOS: return{
                ...state,
                usuario : action.payload
            
            }
            case USUARIO_PROCURANDO_IMOVEL: return{
                ...state,
                usuarios: action.payload
            }
            case LIMPA: return{
                ...state,
                ...INITIAL_STATE
            }
            default:{
                return {
                    ...state
                }
            }
        }

}