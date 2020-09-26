import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorrowscopeComponent } from './sorrowscope.component';

describe('SorrowscopeComponent', () => {
  let component: SorrowscopeComponent;
  let fixture: ComponentFixture<SorrowscopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorrowscopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorrowscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
