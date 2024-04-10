import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemDisplayerComponent } from './cart-item-displayer.component';

describe('CartItemDisplayerComponent', () => {
  let component: CartItemDisplayerComponent;
  let fixture: ComponentFixture<CartItemDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartItemDisplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartItemDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
