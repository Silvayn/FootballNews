import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsEffectifsComponent } from './clubs-effectifs.component';

describe('ClubsEffectifsComponent', () => {
  let component: ClubsEffectifsComponent;
  let fixture: ComponentFixture<ClubsEffectifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubsEffectifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsEffectifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
