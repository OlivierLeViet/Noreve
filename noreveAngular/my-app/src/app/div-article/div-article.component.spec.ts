import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivArticleComponent } from './div-article.component';

describe('DivArticleComponent', () => {
  let component: DivArticleComponent;
  let fixture: ComponentFixture<DivArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
