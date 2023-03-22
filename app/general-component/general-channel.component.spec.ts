import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralChannelComponent } from './general-channel.component';

describe('GeneralChannelComponent', () => {
  let component: GeneralChannelComponent;
  let fixture: ComponentFixture<GeneralChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
