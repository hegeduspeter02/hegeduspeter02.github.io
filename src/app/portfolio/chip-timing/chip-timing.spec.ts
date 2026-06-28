import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTiming } from './chip-timing';

describe('ChipTiming', () => {
  let component: ChipTiming;
  let fixture: ComponentFixture<ChipTiming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ChipTiming,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipTiming);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
