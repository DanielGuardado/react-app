import client from './client'

const endpoint = '/part';

const getSalesOrder = () => client.get('/picklinebyorder');

const createPick = (x) => {
    console.log(x)
    client.post('/picklinebyorder', {order_id : x})
    // .then(response => console.log(response.data.id))
}
export default {
    getSalesOrder,
    createPick
  };