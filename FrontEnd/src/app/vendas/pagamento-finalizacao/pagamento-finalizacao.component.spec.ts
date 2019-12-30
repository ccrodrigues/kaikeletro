import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoFinalizacaoComponent } from './pagamento-finalizacao.component';

describe('PagamentoFinalizacaoComponent', () => {
  let component: PagamentoFinalizacaoComponent;
  let fixture: ComponentFixture<PagamentoFinalizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentoFinalizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoFinalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
