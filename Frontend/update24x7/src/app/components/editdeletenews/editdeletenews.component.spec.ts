import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdeletenewsComponent } from './editdeletenews.component';

describe('EditdeletenewsComponent', () => {
  let component: EditdeletenewsComponent;
  let fixture: ComponentFixture<EditdeletenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdeletenewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdeletenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
