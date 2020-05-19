import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreambuleComponent } from './preambule.component';

describe('PreambuleComponent', () => {
  let component: PreambuleComponent;
  let fixture: ComponentFixture<PreambuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreambuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreambuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
