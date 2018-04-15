import { TestBed, inject } from '@angular/core/testing';

import { NewemployeeService } from './newemployee.service';

describe('NewemployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewemployeeService]
    });
  });

  it('should be created', inject([NewemployeeService], (service: NewemployeeService) => {
    expect(service).toBeTruthy();
  }));
});
