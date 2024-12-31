import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTamplateBackComponent } from './all-tamplate-back.component';

describe('AllTamplateBackComponent', () => {
  let component: AllTamplateBackComponent;
  let fixture: ComponentFixture<AllTamplateBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTamplateBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTamplateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
