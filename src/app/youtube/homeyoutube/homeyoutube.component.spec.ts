import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeyoutubeComponent } from './homeyoutube.component';

describe('HomeyoutubeComponent', () => {
  let component: HomeyoutubeComponent;
  let fixture: ComponentFixture<HomeyoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeyoutubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeyoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
