import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterPaymentAnimationComponent } from './after-payment-animation.component';

describe('AfterPaymentAnimationComponent', () => {
  let component: AfterPaymentAnimationComponent;
  let fixture: ComponentFixture<AfterPaymentAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterPaymentAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfterPaymentAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
