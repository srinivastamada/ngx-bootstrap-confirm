import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxBootstrapConfirmComponent } from './ngx-bootstrap-confirm.component';
@Injectable()
export class NgxBootstrapConfirmService {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  confirm(options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.modalRef = this.modalService.show(NgxBootstrapConfirmComponent, {
        initialState: {
          title: options.title,
          confirmLabel: options.confirmLabel,
          declineLabel: options.declineLabel,
          callback: (result: boolean) => {
            resolve(result);
          },
        },
      });
    });
  }
}
