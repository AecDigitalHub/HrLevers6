import { TestBed, inject } from '@angular/core/testing';

import { EmployeeTalentService } from './employee-talent.service';

describe('EmployeeTalentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeTalentService]
    });
  });

  it('should be created', inject([EmployeeTalentService], (service: EmployeeTalentService) => {
    expect(service).toBeTruthy();
  }));
});
