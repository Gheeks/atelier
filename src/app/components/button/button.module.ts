import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'

import { Button } from './button.component'

const routes = [
  {
    path: '',
    component: Button,
  },
]

@NgModule({
  declarations: [Button],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Button],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonModule {}
