import axios from 'axios';

export class Http {

  // public async get(url: string, params: any) {
  //   return new Promise((resolve, reject) => {
  //     console.log(url)
  //     axios.get(url, {
  //       headers: {
  //         'Accept': '*/*',
  //         'Accept-Encoding': 'gzip, deflate, br',
  //         'Content-Type': 'application/json'
  //       },
  //       params
  //     })
  //       .then((res) => { resolve(res) })
  //       .catch((error) => { reject(error) })
  //   })
  // }

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