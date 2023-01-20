import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
function postData(urlApi, data) {
    const response = fetch(urlApi,{
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    return response;
}
const data = {
    "title": "212",
    "price": 212,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}
postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));


    const anotherfunction = async (urlApi) => {
    try {
        const products = await fecthData(`${urlApi}/products`);
        const product = await fecthData(`${urlApi}/products/${products[0].id}`);
        const category = await fecthData(`${urlApi}/categories/${product.category.id}`);
        console.log (products)
        console.log (product.title)
        console.log (category.name)
    } catch (error){
        console.log (error)
    }
}