import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page03Page } from './page03.page';

describe('Page03Page', () => {
  let component: Page03Page;
  let fixture: ComponentFixture<Page03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page03Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
