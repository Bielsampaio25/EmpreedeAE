import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePreview } from './site-preview';

describe('SitePreview', () => {
  let component: SitePreview;
  let fixture: ComponentFixture<SitePreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitePreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitePreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
