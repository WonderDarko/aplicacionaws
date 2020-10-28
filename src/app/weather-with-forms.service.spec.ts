import { TestBed } from '@angular/core/testing';

import { WeatherWithFormsService } from './weather-with-forms.service';

describe('WeatherWithFormsService', () => {
  let service: WeatherWithFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherWithFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
