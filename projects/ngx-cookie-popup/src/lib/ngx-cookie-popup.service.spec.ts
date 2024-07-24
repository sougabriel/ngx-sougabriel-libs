import { TestBed } from '@angular/core/testing';

import { CookiePopup } from './ngx-cookie-popup.service';

describe('CookiePopup', () => {
  let service: CookiePopup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiePopup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
