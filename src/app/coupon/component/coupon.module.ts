import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CouponRoutingModule } from './coupon-routing.module'
import { CouponComponent } from './coupon.component'
import { MaterialModule } from '../../material/material.module'
import { HttpClientModule } from '@angular/common/http'
import { CouponService } from '../service/coupon.service'
import { HttpService } from 'src/app/shared/http/httpService'
import { TranslateModule } from '@ngx-translate/core'

@NgModule({
  declarations: [CouponComponent],
  imports: [
    CommonModule,
    CouponRoutingModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forChild(),
  ],
  providers: [HttpService, CouponService],
})
export class CouponModule {}
