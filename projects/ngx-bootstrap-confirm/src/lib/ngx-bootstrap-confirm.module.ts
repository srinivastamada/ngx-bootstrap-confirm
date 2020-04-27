import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxBootstrapConfirmComponent } from './ngx-bootstrap-confirm.component';
import { NgxBootstrapConfirmService } from './ngx-bootstrap-confirm.service';

@NgModule({
  declarations: [NgxBootstrapConfirmComponent],
  imports: [ModalModule.forRoot()],
  exports: [NgxBootstrapConfirmComponent],
  providers: [NgxBootstrapConfirmService],
})
export class NgxBootstrapConfirmModule {}
