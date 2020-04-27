import { NgModule } from '@angular/core';
import { NgxBootstrapConfirmComponent } from './ngx-bootstrap-confirm.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [NgxBootstrapConfirmComponent],
  imports: [
    ModalModule.forRoot()
  ],
  exports: [NgxBootstrapConfirmComponent]
})
export class NgxBootstrapConfirmModule { }

