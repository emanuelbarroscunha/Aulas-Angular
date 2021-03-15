import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMEgeneratorComponent } from './read-megenerator.component';

describe('ReadMEgeneratorComponent', () => {
  let component: ReadMEgeneratorComponent;
  let fixture: ComponentFixture<ReadMEgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMEgeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMEgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
