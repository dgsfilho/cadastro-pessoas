import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDetalharComponent } from './pessoa-detalhar.component';

describe('PessoaDetailsComponent', () => {
  let component: PessoaDetalharComponent;
  let fixture: ComponentFixture<PessoaDetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaDetalharComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
