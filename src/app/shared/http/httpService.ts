import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe(
        (result: any) => {
          resolve(result)
        },
        (error: any) => {
          reject(error)
        }
      )
    })
  }
}
