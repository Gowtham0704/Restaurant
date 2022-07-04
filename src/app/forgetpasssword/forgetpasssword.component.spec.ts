import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpassswordComponent } from './forgetpasssword.component';

describe('ForgetpassswordComponent', () => {
  let component: ForgetpassswordComponent;
  let fixture: ComponentFixture<ForgetpassswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetpassswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetpassswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
