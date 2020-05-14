import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'lib-ngx-bootstrap-confirm',
  template:`
  <div class="confirm modal-body">
      <div class="content">{{prompt}}</div>
      <div class="buttons">
          <button type="button" class="btn btn-primary" (click)="confirm()">Okay</button>
          <button type="button" class="btn btn-secondry" (click)="decline()">Cancel</button>
      </div>
  </div>
  `
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
