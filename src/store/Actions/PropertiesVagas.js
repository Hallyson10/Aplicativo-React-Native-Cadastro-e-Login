//adicionar imóvel
//buscar imóveis
//remover imóvel
//editar imóvel
import firebase from 'firebase'
import b64 from 'base-64'
import { CADASTROVAGA } from '../reducers/types'

//salva fotos selecionadas para publicação do imovel ou vaga
export const SavePhotos = (images) => {
    var image = images.map((images) => { return images })
    //alert(JSON.stringify(image))
    try {
        return ({ type: 'savePhotos', payload: image })
    } catch (error) {
        alert(error)
    }
}

//salva a foto tirada na camera para publicar o imóvel
export const SavePhotoCam = (image) => {
    try {
        return ({ type: 'savePhotos', payload: image })
    } catch (error) {
        alert(error)
    }
}
//remove fotos selecionadas para publicação do imovel ou vaga
export const RemovePhotos = (imge) => {
    try {
        return ({ type: 'RemovePhotos', payload: imge })
    } catch (error) {
        alert(error)
    }
}

//limpa a store de publicação da vaga
export const limpaVaga = () => {
    return ({ type: 'limpaVaga' })
}

//altera o tipo da vaga
export const AlterTypeImovel = (tipo) => {
    try {
        return {
            type: 'TIPO_VAGA',
            payload: tipo
        }
    } catch (error) {

    }
}
//salva o nome da cidade da publicação
export const LocationCity = (nomeCity) => {
    try {
        return{
            type: 'LocationCity',
            payload : nomeCity
        }
        
    } catch (error) {
        alert(error)
    }
}
//salva o nome da rua da publicação
export const LocationRua = (nomeRua) => {
    try {
        return{
            type: 'LocationRua',
            payload : nomeRua
        }
        
    } catch (error) {
        alert(error)
    }
}
//salva o nome do bairro da publicação
export const LocationBairro = (nomeBairro) => {
    try {
        return{
            type: 'LocationBairro',
            payload : nomeBairro
        }
        
    } catch (error) {
        alert(error)
    }
}

//salva o cep do imovel
export const LocationCep = (cep) => {
    try {
        return{
            type: 'LocationCep',
            payload : cep
        }
        
    } catch (error) {
        alert(error)
    }
}

//salva longitude e latitude do imovel
export const LocationMap = ({long,lat}) => {
    
    //alert(JSON.stringify(long + " "+lat))
    try {
        return{
            type: 'LongitudeLatitude',
            payload : {long,lat}
        }
        
    } catch (error) {
        alert(error)
    }
}
// Informações sobre o imovel





export const AlterQtdPeoples = (qtdPeople) => {
    try {
        return {
            type: 'QTD_PEOPLE',
            payload: qtdPeople
        }
    } catch (error) {

    }
}
export const AlterPriceTotal = (priceTotal) => {
    try {
        return {
            type: 'ALTER_PRICE',
            payload: priceTotal
        }
    } catch (error) {

    }
}


export const AddPropertieVaga = (propertieVaga) => {
    alert(JSON.stringify(propertieVaga))
    try {
        return dispatch => {

        }
    } catch (error) {
        alert('Houve um erro no cadastra Vagas actions' + error)
    }
}

export const FindPropertieVaga = (cidade) => {

    try {
        return dispatc => {
            firebase.database().ref('/PropertiesVagas/').endAt(cidade).on((snapshot) => {
                var data = snapshot.val()
                alert(data)
            })
        }

    } catch (error) {

    }
}