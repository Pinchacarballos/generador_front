import { Injectable } from '@angular/core'
import { HttpService } from 'src/app/shared/http/httpService'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private httpService: HttpService) {}

  getCoupons(): Promise<string[]> {
    const url = `${environment.apiUrl}/coupon`
    return this.httpService.get(url)
  }
}
