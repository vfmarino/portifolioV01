import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFormsComponentComponent } from './google-forms-component.component';

describe('GoogleFormsComponentComponent', () => {
  let component: GoogleFormsComponentComponent;
  let fixture: ComponentFixture<GoogleFormsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleFormsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
