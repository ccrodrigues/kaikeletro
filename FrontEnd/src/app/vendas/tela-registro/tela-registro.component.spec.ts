import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRegistroComponent } from './tela-registro.component';

describe('TelaRegistroComponent', () => {
  let component: TelaRegistroComponent;
  let fixture: ComponentFixture<TelaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
