import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderListProfileComponent } from './provider-list-profile.component';

describe('ProviderListProfileComponent', () => {
  let component: ProviderListProfileComponent;
  let fixture: ComponentFixture<ProviderListProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProviderListProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderListProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
