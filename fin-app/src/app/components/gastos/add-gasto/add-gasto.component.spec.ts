import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGastoComponent } from './add-gasto.component';

describe('AddGastoComponent', () => {
  let component: AddGastoComponent;
  let fixture: ComponentFixture<AddGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddGastoComponent]
    });
    fixture = TestBed.createComponent(AddGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
