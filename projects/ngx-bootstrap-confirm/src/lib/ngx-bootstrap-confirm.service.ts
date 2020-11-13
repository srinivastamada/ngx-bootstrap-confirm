import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxBootstrapConfirmComponent } from './ngx-bootstrap-confirm.component';
@Injectable()
export class NgxBootstrapConfirmService {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  confirm(options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.modalRef = this.modalService.show(NgxBootstrapConfirmComponent);
      this.modalRef.content.title = options.title;
      this.modalRef.content.confirmLabel = options.confirmLabel;
      this.modalRef.content.declineLabel = options.declineLabel;
      this.modalRef.content.onClose.subscribe((result: boolean) => {
        resolve(result);
      });
    });
  }
}
