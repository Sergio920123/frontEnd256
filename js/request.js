// const url = 'http://localhost:4000/apiLibros/'; // variable que captura el servidor que yo hice comunicacion baken fontend esto se ve en el .env del backend

const url ='https://backend256-lotc.onrender.com/apiLibros/';

function sendRequest(endPoint, method, data){  // se crea esta funcion para que le crud funcione sin problema
    let request = new XMLHttpRequest(); //  en esta variable se llama el metodo XMLHttp etc
    request.open(method, url+endPoint)
    request.responseType ='json';    
    request.setRequestHeader('Content-type','application/json');
    request.send(data ? JSON.stringify(data): data);
    return request
}