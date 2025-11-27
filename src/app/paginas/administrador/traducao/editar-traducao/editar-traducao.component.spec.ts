import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTraducaoComponent } from './editar-traducao.component';

describe('EditarTraducaoComponent', () => {
  let component: EditarTraducaoComponent;
  let fixture: ComponentFixture<EditarTraducaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTraducaoComponent]
    });
    fixture = TestBed.createComponent(EditarTraducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
