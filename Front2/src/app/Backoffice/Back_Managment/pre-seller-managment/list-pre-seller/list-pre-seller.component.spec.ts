import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPreSellerComponent } from './list-pre-seller.component';

describe('ListPreSellerComponent', () => {
  let component: ListPreSellerComponent;
  let fixture: ComponentFixture<ListPreSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPreSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPreSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
