import fetch from 'isomorphic-fetch';
const HostUrl =  "http://pb-api.herokuapp.com";


const HttpHandler = () => {

  const ajax = (url) => {
    return new Promise( (resolve, reject) =>{
      fetch(url)
        .then(response => response.json())
        .then(response => {
          resolve(response);
        }).catch( (e) => {
          console.log('parsing failed', e);
          reject(e)
       });
    });
  }

  const findRecord = (serviceUrl, options = {}) =>{
    const url = `${HostUrl}${serviceUrl}`;
    return ajax(url);
  }

  return {  findRecord };
}

export default HttpHandler();
