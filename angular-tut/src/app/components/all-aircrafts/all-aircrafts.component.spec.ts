import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAircraftsComponent } from './all-aircrafts.component';

describe('AllAircraftsComponent', () => {
  let component: AllAircraftsComponent;
  let fixture: ComponentFixture<AllAircraftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAircraftsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAircraftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
