import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

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

export class NgxBootstrapConfirmComponent implements OnInit {
  public onClose: Subject<boolean>;
  title: string;
  confirmLabel: string;
  declineLabel: string;
  constructor(public bsModalRef: BsModalRef) {}

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  confirm() {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  decline() {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
