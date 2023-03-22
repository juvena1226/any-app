import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgtmChannelComponent } from './lgtm-channel.component';

describe('LgtmChannelComponent', () => {
  let component: LgtmChannelComponent;
  let fixture: ComponentFixture<LgtmChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgtmChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgtmChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
