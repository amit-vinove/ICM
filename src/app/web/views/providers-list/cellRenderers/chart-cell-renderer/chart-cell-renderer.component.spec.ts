import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCellRendererComponent } from './chart-cell-renderer.component';

describe('ChartCellRendererComponent', () => {
  let component: ChartCellRendererComponent;
  let fixture: ComponentFixture<ChartCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
