import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqauareComponent } from './sqauare.component';

describe('SqauareComponent', () => {
  let component: SqauareComponent;
  let fixture: ComponentFixture<SqauareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqauareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqauareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
