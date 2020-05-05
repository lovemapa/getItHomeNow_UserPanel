import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankLoginandsignupComponent } from './blank-loginandsignup.component';

describe('BlankLoginandsignupComponent', () => {
  let component: BlankLoginandsignupComponent;
  let fixture: ComponentFixture<BlankLoginandsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankLoginandsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankLoginandsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
