import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPresentesComponent } from './listar-presentes.component';

describe('ListarPresentesComponent', () => {
  let component: ListarPresentesComponent;
  let fixture: ComponentFixture<ListarPresentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPresentesComponent]
    });
    fixture = TestBed.createComponent(ListarPresentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
