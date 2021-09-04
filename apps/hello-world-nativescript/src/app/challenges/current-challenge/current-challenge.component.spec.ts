import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentChallengeComponent } from './current-challenge.component';

describe('CurrentChallengeComponent', () => {
  let component: CurrentChallengeComponent;
  let fixture: ComponentFixture<CurrentChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
