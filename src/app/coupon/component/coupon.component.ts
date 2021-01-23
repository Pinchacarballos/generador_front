import { Component, OnInit } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from '@ngx-translate/core'
import { CouponService } from '../service/coupon.service'

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent {
  coupons: string[]

  constructor(
    private couponService: CouponService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {}

  async loadCoupons(): Promise<void> {
    try {
      this.coupons = await this.couponService.getCoupons()
    } catch (error) {
      delete this.coupons
      console.error(error)
      this.showErrorMessage()
    }
  }

  private showErrorMessage(): void {
    this.snackBar.open(this.translateService.instant('COUPONS.ERROR'), '', {
      panelClass: 'error',
      duration: 3000,
    })
  }
}
