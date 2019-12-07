import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoUniComponent } from './produto-uni.component';

describe('ProdutoUniComponent', () => {
  let component: ProdutoUniComponent;
  let fixture: ComponentFixture<ProdutoUniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoUniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
