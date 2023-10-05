import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualComponent } from './actual.component';

describe('ActualComponent', () => {
  let component: ActualComponent;
  let fixture: ComponentFixture<ActualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualComponent]
    });
    fixture = TestBed.createComponent(ActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
