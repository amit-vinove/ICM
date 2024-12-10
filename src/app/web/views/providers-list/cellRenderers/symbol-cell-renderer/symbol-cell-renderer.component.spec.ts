import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolCellRendererComponent } from './symbol-cell-renderer.component';

describe('SymbolCellRendererComponent', () => {
  let component: SymbolCellRendererComponent;
  let fixture: ComponentFixture<SymbolCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymbolCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
