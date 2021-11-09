const axios = require('https')

class api{
  constructor(){
  
    this.URL = 'http://45.77.153.120'
    this.PORT = 4000;
  
  }
  post(endpoint, params, callback, err) {
    
    axios
      .post(this.URL + this.PORT, params)
      .then(callback)
      .catch(err);
  }
  get(endpoint, query, callback, err){
    axios
      .post(this.URL + this.PORT, params)
      .then(callback)
      .catch(err);
  }
}