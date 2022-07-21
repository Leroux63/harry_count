import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryCountComponent } from './harry-count.component';

describe('HarryCountComponent', () => {
  let component: HarryCountComponent;
  let fixture: ComponentFixture<HarryCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarryCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
