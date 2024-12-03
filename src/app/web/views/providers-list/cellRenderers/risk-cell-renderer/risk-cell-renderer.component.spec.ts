import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCellRendererComponent } from './risk-cell-renderer.component';

describe('RiskCellRendererComponent', () => {
  let component: RiskCellRendererComponent;
  let fixture: ComponentFixture<RiskCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RiskCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
