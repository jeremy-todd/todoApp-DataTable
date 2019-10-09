import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDoingComponent } from './data-table-doing.component';

describe('DataTableDoingComponent', () => {
  let component: DataTableDoingComponent;
  let fixture: ComponentFixture<DataTableDoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
