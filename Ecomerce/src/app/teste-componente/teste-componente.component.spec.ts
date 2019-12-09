import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponenteComponent } from './teste-componente.component';

describe('TesteComponenteComponent', () => {
  let component: TesteComponenteComponent;
  let fixture: ComponentFixture<TesteComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
