import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyCellRendererComponent } from './strategy-cell-renderer.component';

describe('StrategyCellRendererComponent', () => {
  let component: StrategyCellRendererComponent;
  let fixture: ComponentFixture<StrategyCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrategyCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
