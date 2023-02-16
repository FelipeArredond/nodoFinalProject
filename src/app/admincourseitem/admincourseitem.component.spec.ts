import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincourseitemComponent } from './admincourseitem.component';

describe('AdmincourseitemComponent', () => {
  let component: AdmincourseitemComponent;
  let fixture: ComponentFixture<AdmincourseitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincourseitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincourseitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
