import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdetailComponent } from './hotdetail.component';

describe('HotdetailComponent', () => {
  let component: HotdetailComponent;
  let fixture: ComponentFixture<HotdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
