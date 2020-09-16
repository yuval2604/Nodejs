function myFetchData(url, callback) { 
    makeNetworkCall( url, (response) => {
      if (response.success) {
        callback(response.data, nil)
      } else {
        callback(nil, response.error)
      }
    });
  }
  /* Imagine makeNetworkCall makes a get call to the url which it accepts as the first param. On executing the call, it fills its response in the second argument it takes */
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  myFetchData(url, function(data, error) {
    if (error != nil) {
      console.log("data", data)
    } else {
      console.log("error", error)
    }
  });



  let myFetchData = (url) => {
    return new Promise((resolve, reject) => {
      makeNetworkCall( url , (response) => {
        if (response.success) {
          resolve(response.data)
        } else {
          reject(response.error)
        }
      });
    })
  }
  /* Imagine makeNetworkCall makes a get call to the url which it accepts as the first param. On executing the call, it fills its response in the second argument it takes */
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  myFetchData(url)
    .then(data) {
      console.log("data", data)
    }
    .catch(error) {
      console.log("error", error)
    }