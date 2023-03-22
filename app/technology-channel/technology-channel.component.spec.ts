import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyChannelComponent } from './technology-channel.component';

describe('TechnologyChannelComponent', () => {
  let component: TechnologyChannelComponent;
  let fixture: ComponentFixture<TechnologyChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
