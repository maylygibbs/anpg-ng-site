import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobredadosComponent } from './sobredados.component';

describe('SobredadosComponent', () => {
  let component: SobredadosComponent;
  let fixture: ComponentFixture<SobredadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobredadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobredadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
