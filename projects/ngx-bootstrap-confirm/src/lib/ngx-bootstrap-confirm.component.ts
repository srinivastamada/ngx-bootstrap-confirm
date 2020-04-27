import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-ngx-bootstrap-confirm',
  templateUrl: './ngx-bootstrap-confirm.component.html',
  styleUrls: ['./ngx-bootstrap-confirm.component.scss',
})
export class NgxBootstrapConfirmComponent {
  prompt: any;
  constructor(public bsModalRef: BsModalRef) {}

  confirm() {
    if (this.bsModalRef.content.callback != null) {
      this.bsModalRef.content.callback('yes');
      this.bsModalRef.hide();
    }
  }

  decline() {
    if (this.bsModalRef.content.callback != null) {
      this.bsModalRef.content.callback('no');
      this.bsModalRef.hide();
    }
  }
}
