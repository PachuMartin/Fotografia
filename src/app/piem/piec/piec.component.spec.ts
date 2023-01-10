import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecComponent } from './piec.component';

describe('PiecComponent', () => {
  let component: PiecComponent;
  let fixture: ComponentFixture<PiecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
