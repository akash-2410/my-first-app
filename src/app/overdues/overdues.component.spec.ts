import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduesComponent } from './overdues.component';

describe('OverduesComponent', () => {
  let component: OverduesComponent;
  let fixture: ComponentFixture<OverduesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverduesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverduesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
