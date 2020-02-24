import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsArticlesComponent } from './clubs-articles.component';

describe('ClubsArticlesComponent', () => {
  let component: ClubsArticlesComponent;
  let fixture: ComponentFixture<ClubsArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
