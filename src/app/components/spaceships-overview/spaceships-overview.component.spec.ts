import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsOverviewComponent } from './spaceships-overview.component';

describe('SpaceshipsOverviewComponent', () => {
  let component: SpaceshipsOverviewComponent;
  let fixture: ComponentFixture<SpaceshipsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
