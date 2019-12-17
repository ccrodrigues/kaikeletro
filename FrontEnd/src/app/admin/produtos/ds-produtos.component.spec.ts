import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSProdutosComponent } from './ds-produtos.component';

describe('ProdutosComponent', () => {
  let component: DSProdutosComponent;
  let fixture: ComponentFixture<DSProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
