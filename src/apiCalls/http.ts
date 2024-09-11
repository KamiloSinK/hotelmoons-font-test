export class Http {
  public async get(url: string, params: any) {    
    return new Promise((resolve, reject) => {
      fetch(url + '?' + new URLSearchParams(params), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((res) => resolve(res.json()))
      .catch((error) => reject(error) )
    })
  }
}