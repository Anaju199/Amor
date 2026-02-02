import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPresentesComponent } from './cadastrar-presentes.component';

describe('CadastrarPresentesComponent', () => {
  let component: CadastrarPresentesComponent;
  let fixture: ComponentFixture<CadastrarPresentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPresentesComponent]
    });
    fixture = TestBed.createComponent(CadastrarPresentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
