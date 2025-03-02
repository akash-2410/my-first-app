import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdatabaseComponent } from './edatabase.component';

describe('EdatabaseComponent', () => {
  let component: EdatabaseComponent;
  let fixture: ComponentFixture<EdatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
