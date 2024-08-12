import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacacionesFormComponent } from './vacaciones-from.component';

describe('VacacionesFromComponent', () => {
  let component: VacacionesFormComponent;
  let fixture: ComponentFixture<VacacionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacacionesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacacionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
