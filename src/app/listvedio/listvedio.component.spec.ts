import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvedioComponent } from './listvedio.component';

describe('ListvedioComponent', () => {
  let component: ListvedioComponent;
  let fixture: ComponentFixture<ListvedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
