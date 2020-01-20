import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosListComponent } from './sos-list.component';

describe('SosListComponent', () => {
  let component: SosListComponent;
  let fixture: ComponentFixture<SosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
