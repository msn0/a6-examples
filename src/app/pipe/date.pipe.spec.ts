import { TestBed } from "@angular/core/testing";
import { DatePipe } from "./date.pipe";

describe('Date Pipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DatePipe ]
    });
  });

  it('should format date', () => {
    const pipe = TestBed.get(DatePipe);

    expect(pipe.transform(4123456789000)).toEqual('środa, 1 września 2100, 06:39:49');
  });
});
