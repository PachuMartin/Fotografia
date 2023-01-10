import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpocComponent } from './cuerpoc.component';

describe('CuerpocComponent', () => {
  let component: CuerpocComponent;
  let fixture: ComponentFixture<CuerpocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
