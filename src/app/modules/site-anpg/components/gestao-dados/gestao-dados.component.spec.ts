import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDadosComponent } from './gestao-dados.component';

describe('GestaoDadosComponent', () => {
  let component: GestaoDadosComponent;
  let fixture: ComponentFixture<GestaoDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
