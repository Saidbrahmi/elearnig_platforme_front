import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatPreSellerComponent } from './updat-pre-seller.component';

describe('UpdatPreSellerComponent', () => {
  let component: UpdatPreSellerComponent;
  let fixture: ComponentFixture<UpdatPreSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatPreSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatPreSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
