import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoApp } from './to-do-app';

describe('ToDoApp', () => {
  let component: ToDoApp;
  let fixture: ComponentFixture<ToDoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoApp],
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
