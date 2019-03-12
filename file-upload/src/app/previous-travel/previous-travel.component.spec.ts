import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousTravelComponent } from './previous-travel.component';

describe('PreviousTravelComponent', () => {
  let component: PreviousTravelComponent;
  let fixture: ComponentFixture<PreviousTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
