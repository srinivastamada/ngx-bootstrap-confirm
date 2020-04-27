import { TestBed } from '@angular/core/testing';

import { NgxBootstrapConfirmService } from './ngx-bootstrap-confirm.service';

describe('NgxBootstrapConfirmService', () => {
  let service: NgxBootstrapConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBootstrapConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
