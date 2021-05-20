import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadospublicosComponent } from './dadospublicos.component';

describe('DadospublicosComponent', () => {
  let component: DadospublicosComponent;
  let fixture: ComponentFixture<DadospublicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadospublicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadospublicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
