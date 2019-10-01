import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page02Page } from './page02.page';

describe('Page02Page', () => {
  let component: Page02Page;
  let fixture: ComponentFixture<Page02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page02Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
