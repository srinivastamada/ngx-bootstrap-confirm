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
  `,
  styles: [`.modal-dialog {
    width: 360px !important;
    margin-top: 120px;
    .confirm {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      height: 170px;
      .content {
        padding: 20px;
        border-radius: 10px;
        background-color: #fff !important;
        font-weight: 700;
      }
      .buttons {
        padding: 10px 15px;
        float: right;
        button {
          margin-right: 10px;
        }
      }
    }
  }
  `]
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
