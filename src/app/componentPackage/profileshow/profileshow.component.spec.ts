import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileshowComponent } from './profileshow.component';

describe('ProfileshowComponent', () => {
  let component: ProfileshowComponent;
  let fixture: ComponentFixture<ProfileshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
