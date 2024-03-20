import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageByEventPage } from './page-by-event.page';

describe('PageByEventPage', () => {
  let component: PageByEventPage;
  let fixture: ComponentFixture<PageByEventPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageByEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
