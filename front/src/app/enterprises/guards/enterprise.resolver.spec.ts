import { TestBed } from '@angular/core/testing';

import { EnterpriseResolver } from './enterprise.resolver';

describe('EnterpriseResolver', () => {
  let resolver: EnterpriseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EnterpriseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
