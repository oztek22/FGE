import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarReferencesComponent } from './far-references.component';

describe('FarReferencesComponent', () => {
  let component: FarReferencesComponent;
  let fixture: ComponentFixture<FarReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
