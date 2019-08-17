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
            //<item name="gallery_toolbar_close_image">@mipmap/ic_launcher</item>
            //<string name="gallery_media_grid_image_title">Fotos</string>
            //<item name="gallery_toolbar_text_size">16dp</item>
            //  <item name="gallery_page_bg">#FFFFFF</item>
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
                return state
            }
        }
}