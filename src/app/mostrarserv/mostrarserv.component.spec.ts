import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarservComponent } from './mostrarserv.component';

describe('MostrarservComponent', () => {
  let component: MostrarservComponent;
  let fixture: ComponentFixture<MostrarservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
