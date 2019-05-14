import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErreurRechercheComponent } from './erreur-recherche.component';

describe('ErreurRechercheComponent', () => {
  let component: ErreurRechercheComponent;
  let fixture: ComponentFixture<ErreurRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErreurRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErreurRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
