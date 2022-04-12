import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnixStampComponent } from './unix-stamp.component';

describe('UnixStampComponent', () => {
  let component: UnixStampComponent;
  let fixture: ComponentFixture<UnixStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnixStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnixStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
