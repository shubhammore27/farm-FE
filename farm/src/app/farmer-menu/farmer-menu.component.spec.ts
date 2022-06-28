import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerMenuComponent } from './farmer-menu.component';

describe('FarmerMenuComponent', () => {
  let component: FarmerMenuComponent;
  let fixture: ComponentFixture<FarmerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
