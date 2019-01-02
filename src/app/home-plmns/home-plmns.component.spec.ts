import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlmnsComponent } from './home-plmns.component';

describe('HomePlmnsComponent', () => {
  let component: HomePlmnsComponent;
  let fixture: ComponentFixture<HomePlmnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePlmnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePlmnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
