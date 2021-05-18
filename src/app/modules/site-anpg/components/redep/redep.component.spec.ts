import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedepComponent } from './redep.component';

describe('RedepComponent', () => {
  let component: RedepComponent;
  let fixture: ComponentFixture<RedepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
