import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'

import { Banner } from './banner.component'

const routes = [
  {
    path: '',
    component: Banner,
  },
]

@NgModule({
  declarations: [Banner],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Banner],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerModule {}
