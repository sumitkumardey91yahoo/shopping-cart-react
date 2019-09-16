export default class Actions {

    actGetData() {
        return new Promise((resolve, reject) => {
            fetch('/database.json').then((res) => {
                return res.json();
              }).then((success) => {
                if (success && success.result && success.result.products) {
                    resolve(success.result.products);
                } else {
                    reject({error: "data are not proper"})
                }
                    
              }).catch((error) => {
                reject(error)
              })
        })
    }
}