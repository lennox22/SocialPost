import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewpostComponent } from './show-newpost.component';

describe('ShowNewpostComponent', () => {
  let component: ShowNewpostComponent;
  let fixture: ComponentFixture<ShowNewpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNewpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
