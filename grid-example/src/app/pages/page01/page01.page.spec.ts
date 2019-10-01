import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page01Page } from './page01.page';

describe('Page01Page', () => {
  let component: Page01Page;
  let fixture: ComponentFixture<Page01Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page01Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page01Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
