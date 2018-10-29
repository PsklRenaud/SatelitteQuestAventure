import { TestBed } from '@angular/core/testing';

import { ConnexionAPIService } from './connexion-api.service';

describe('ConnexionAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnexionAPIService = TestBed.get(ConnexionAPIService);
    expect(service).toBeTruthy();
  });
});
