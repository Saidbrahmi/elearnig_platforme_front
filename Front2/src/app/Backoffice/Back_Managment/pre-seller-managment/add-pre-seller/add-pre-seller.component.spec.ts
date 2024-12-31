import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreSellerComponent } from './add-pre-seller.component';

describe('AddPreSellerComponent', () => {
  let component: AddPreSellerComponent;
  let fixture: ComponentFixture<AddPreSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPreSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPreSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
