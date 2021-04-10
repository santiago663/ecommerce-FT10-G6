/* eslint-disable */
import axios from 'axios'
import * as TYPES from '../types/index'


const requestData = () => ({ //ejemplo
    type: TYPES.REQUEST_DATA,
})

export default async function addProduct (product) {
    await axios.post("http://localhost:3001/products", product )    
}
