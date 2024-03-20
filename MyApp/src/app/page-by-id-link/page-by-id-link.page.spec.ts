import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageByIdLinkPage } from './page-by-id-link.page';

describe('PageByIdLinkPage', () => {
  let component: PageByIdLinkPage;
  let fixture: ComponentFixture<PageByIdLinkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageByIdLinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
