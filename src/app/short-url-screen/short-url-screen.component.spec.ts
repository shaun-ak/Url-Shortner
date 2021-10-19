import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlScreenComponent } from './short-url-screen.component';

describe('ShortUrlScreenComponent', () => {
  let component: ShortUrlScreenComponent;
  let fixture: ComponentFixture<ShortUrlScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortUrlScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
