import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageContainerComponent } from './homepage-container.component';

describe('HomepageContainerComponent', () => {
  let component: HomepageContainerComponent;
  let fixture: ComponentFixture<HomepageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
