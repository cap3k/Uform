import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosComplementairesComponent } from './infos-complementaires.component';

describe('InfosComplementairesComponent', () => {
  let component: InfosComplementairesComponent;
  let fixture: ComponentFixture<InfosComplementairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosComplementairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosComplementairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
