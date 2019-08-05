//adicionar imóvel
//buscar imóveis
//remover imóvel
//editar imóvel
import firebase from 'firebase'
import { CADASTROVAGA } from '../reducers/types'

export const AddPropertieVaga = (propertieVaga) => {
    alert(JSON.stringify(propertieVaga))
    try {
        return dispatch => {
           
        }
    } catch (error) {
        alert('Houve um erro no cadastra Vagas actions'+error)
    }
}

export const FindPropertieVaga = (cidade)=>{

       try {
           return dispatc =>{
                firebase.database().ref('/PropertiesVagas/').endAt(cidade).on((snapshot)=>{
                 var data = snapshot.val()
                 alert(data)
                })
           }
           
       } catch (error) {
           
       }
}