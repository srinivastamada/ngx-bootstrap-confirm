import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapConfirmComponent } from './ngx-bootstrap-confirm.component';

describe('NgxBootstrapConfirmComponent', () => {
  let component: NgxBootstrapConfirmComponent;
  let fixture: ComponentFixture<NgxBootstrapConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
