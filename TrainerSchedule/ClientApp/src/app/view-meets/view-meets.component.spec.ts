import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetsComponent } from './view-meets.component';

describe('ViewMeetsComponent', () => {
  let component: ViewMeetsComponent;
  let fixture: ComponentFixture<ViewMeetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMeetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
