import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdrComponent } from './vdr.component';

describe('VdrComponent', () => {
  let component: VdrComponent;
  let fixture: ComponentFixture<VdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
