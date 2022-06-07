import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:4000'
})

 export default {
    getListRequest: ()=> {
        
        return http.get('/getListPedido')
    },

    getListCategory: ()=> {
        
        return http.get('/getlLstCategory')
    },

    addProduto: (payload)=> {
        console.log("salvou", payload) 
        return http.post('/addProduto', payload)
    }   
 }
 