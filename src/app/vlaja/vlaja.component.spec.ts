import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlajaComponent } from './vlaja.component';

describe('VlajaComponent', () => {
  let component: VlajaComponent;
  let fixture: ComponentFixture<VlajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
