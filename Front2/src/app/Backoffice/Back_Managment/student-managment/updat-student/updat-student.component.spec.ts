import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatStudentComponent } from './updat-student.component';

describe('UpdatStudentComponent', () => {
  let component: UpdatStudentComponent;
  let fixture: ComponentFixture<UpdatStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
