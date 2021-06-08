import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogoutComponent } from './list-logout.component';

describe('ListLogoutComponent', () => {
  let component: ListLogoutComponent;
  let fixture: ComponentFixture<ListLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
