import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSite } from './editar-site';

describe('EditarSite', () => {
  let component: EditarSite;
  let fixture: ComponentFixture<EditarSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
