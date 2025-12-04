import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFotosComponent } from './listar-fotos.component';

describe('ListarFotosComponent', () => {
  let component: ListarFotosComponent;
  let fixture: ComponentFixture<ListarFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarFotosComponent]
    });
    fixture = TestBed.createComponent(ListarFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
