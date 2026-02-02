import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePresentesComponent } from './lista-de-presentes.component';

describe('ListaDePresentesComponent', () => {
  let component: ListaDePresentesComponent;
  let fixture: ComponentFixture<ListaDePresentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDePresentesComponent]
    });
    fixture = TestBed.createComponent(ListaDePresentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
