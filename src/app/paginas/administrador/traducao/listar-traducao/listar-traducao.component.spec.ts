import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTraducaoComponent } from './listar-traducao.component';

describe('ListarTraducaoComponent', () => {
  let component: ListarTraducaoComponent;
  let fixture: ComponentFixture<ListarTraducaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTraducaoComponent]
    });
    fixture = TestBed.createComponent(ListarTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
