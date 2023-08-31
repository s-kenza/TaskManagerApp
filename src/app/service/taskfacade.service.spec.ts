import { TestBed } from '@angular/core/testing';

import { TaskfacadeService } from './taskfacade.service';

describe('TaskfacadeService', () => {
  let service: TaskfacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskfacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
