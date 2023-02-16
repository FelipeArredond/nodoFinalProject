import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargettcursosComponent } from './targettcursos.component';

describe('TargettcursosComponent', () => {
  let component: TargettcursosComponent;
  let fixture: ComponentFixture<TargettcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargettcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargettcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
