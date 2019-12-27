import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoEnderecoComponent } from './confirmacao-endereco.component';

describe('ConfirmacaoVendaComponent', () => {
  let component: ConfirmacaoEnderecoComponent;
  let fixture: ComponentFixture<ConfirmacaoEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacaoEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
