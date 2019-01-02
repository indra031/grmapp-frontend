import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlmnComponent } from './home-plmn.component';

describe('HomePlmnComponent', () => {
  let component: HomePlmnComponent;
  let fixture: ComponentFixture<HomePlmnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlmnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
