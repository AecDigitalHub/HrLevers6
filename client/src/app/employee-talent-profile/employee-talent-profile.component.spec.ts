import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTalentProfileComponent } from './employee-talent-profile.component';

describe('EmployeeTalentProfileComponent', () => {
  let component: EmployeeTalentProfileComponent;
  let fixture: ComponentFixture<EmployeeTalentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTalentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTalentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
