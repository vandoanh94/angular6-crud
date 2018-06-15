import { TestBed, inject } from '@angular/core/testing';

import { ListFilesService } from './list-files.service';

describe('ListFilesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListFilesService]
    });
  });

  it('should be created', inject([ListFilesService], (service: ListFilesService) => {
    expect(service).toBeTruthy();
  }));
});
