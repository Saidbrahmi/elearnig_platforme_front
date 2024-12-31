import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPreSellerComponent } from './board-pre-seller.component';

describe('BoardPreSellerComponent', () => {
  let component: BoardPreSellerComponent;
  let fixture: ComponentFixture<BoardPreSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPreSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardPreSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
