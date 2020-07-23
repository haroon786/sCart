import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdasboardComponent } from './listdasboard.component';

describe('ListdasboardComponent', () => {
  let component: ListdasboardComponent;
  let fixture: ComponentFixture<ListdasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
