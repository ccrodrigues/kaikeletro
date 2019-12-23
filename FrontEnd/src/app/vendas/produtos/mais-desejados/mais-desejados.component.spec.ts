import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisDesejadosComponent } from './mais-desejados.component';

describe('MaisDesejadosComponent', () => {
  let component: MaisDesejadosComponent;
  let fixture: ComponentFixture<MaisDesejadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisDesejadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisDesejadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
