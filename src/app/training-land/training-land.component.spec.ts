import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLandComponent } from './training-land.component';

describe('TrainingLandComponent', () => {
  let component: TrainingLandComponent;
  let fixture: ComponentFixture<TrainingLandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingLandComponent]
    });
    fixture = TestBed.createComponent(TrainingLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
