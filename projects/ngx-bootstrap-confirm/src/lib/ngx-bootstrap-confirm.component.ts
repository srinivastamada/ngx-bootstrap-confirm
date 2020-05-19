import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'lib-ngx-bootstrap-confirm',
  template:`
  <div class="confirm modal-body">
      <div class="content" [innerHTML]="title"></div>
      <div class="buttons">
          <button type="button" class="btn btn-success" (click)="confirm()" [innerHTML]="confirmLabel"></button>
          <button type="button" class="btn btn-danger" (click)="decline()" [innerHTML]="declineLabel"></button>
      </div>
  </div>
  `
})

export class NgxBootstrapConfirmComponent {
  title: string;
  confirmLabel: string;
  declineLabel: string;
  constructor(public bsModalRef: BsModalRef) {}

  confirm() {
    if (this.bsModalRef.content.callback != null) {
      this.bsModalRef.content.callback(true);
      this.bsModalRef.hide();
    }
  }

  decline() {
    if (this.bsModalRef.content.callback != null) {
      this.bsModalRef.content.callback(false);
      this.bsModalRef.hide();
    }
  }
}
