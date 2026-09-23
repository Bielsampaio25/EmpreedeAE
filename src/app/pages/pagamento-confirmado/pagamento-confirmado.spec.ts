import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoConfirmado } from './pagamento-confirmado';

describe('PagamentoConfirmado', () => {
  let component: PagamentoConfirmado;
  let fixture: ComponentFixture<PagamentoConfirmado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentoConfirmado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoConfirmado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
