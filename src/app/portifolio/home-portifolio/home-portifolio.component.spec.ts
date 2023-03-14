import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortifolioComponent } from './home-portifolio.component';

describe('HomePortifolioComponent', () => {
  let component: HomePortifolioComponent;
  let fixture: ComponentFixture<HomePortifolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePortifolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
