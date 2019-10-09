import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDoneComponent } from './data-table-done.component';

describe('DataTableDoneComponent', () => {
  let component: DataTableDoneComponent;
  let fixture: ComponentFixture<DataTableDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
