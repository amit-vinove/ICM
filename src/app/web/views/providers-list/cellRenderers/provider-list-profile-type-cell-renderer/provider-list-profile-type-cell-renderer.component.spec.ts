import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderListProfileTypeCellRendererComponent } from './provider-list-profile-type-cell-renderer.component';

describe('ProviderListProfileTypeCellRendererComponent', () => {
  let component: ProviderListProfileTypeCellRendererComponent;
  let fixture: ComponentFixture<ProviderListProfileTypeCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderListProfileTypeCellRendererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderListProfileTypeCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
