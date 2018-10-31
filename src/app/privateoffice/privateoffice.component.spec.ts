import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateofficeComponent } from './privateoffice.component';

describe('PrivateofficeComponent', () => {
  let component: PrivateofficeComponent;
  let fixture: ComponentFixture<PrivateofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
