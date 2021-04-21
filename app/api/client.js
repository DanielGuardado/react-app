import {create} from 'apisauce';
// const base64 = require('base-64')
const base64 = require('base-64');

// const base64str = str.toBase64('LnKdqNAGAQiAreMAwY0UDMNei2OFApja:LnKdqNAGAQiAreMAwY0UDMNei2OFApja')

const apiClient = create({
    baseURL: 'https://test-krameramerica.locateinv.com',
    headers: {
        'Authorization': "Basic " + base64.encode("LnKdqNAGAQiAreMAwY0UDMNei2OFApja:LnKdqNAGAQiAreMAwY0UDMNei2OFApja"),
      },
})

// apiClient.setHeader('Authorization', "Basic " + base64.encode("LnKdqNAGAQiAreMAwY0UDMNei2OFApja:LnKdqNAGAQiAreMAwY0UDMNei2OFApja"))


export default apiClient