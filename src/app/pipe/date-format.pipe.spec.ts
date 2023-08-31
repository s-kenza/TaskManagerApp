import { TestBed } from '@angular/core/testing';
import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pipe = new DateFormatPipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform date string to localized date format', () => {
    const inputDateString = '2023-08-28';
    const transformedDate = pipe.transform(inputDateString);
    expect(transformedDate).toBe(new Date(inputDateString).toLocaleDateString());
  });

  it('should handle invalid date string', () => {
    const invalidDateString = 'invalid-date';
    const transformedDate = pipe.transform(invalidDateString);
    expect(transformedDate).toBe(invalidDateString); // Pipe should return the input as-is for invalid date strings
  });
});
