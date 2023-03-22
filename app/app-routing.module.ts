import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralChannelComponent } from './general-component/general-channel.component';
import { LgtmChannelComponent } from './lgtm-channel/lgtm-channel.component';
import { TechnologyChannelComponent } from './technology-channel/technology-channel.component';

const routes: Routes = [
  {
    path: '',
    component: LgtmChannelComponent,
  },
  {
    component: LgtmChannelComponent,
    path: 'lgtm',
  },
  {
    component: GeneralChannelComponent,
    path: 'general',
  },
  {
    component: TechnologyChannelComponent,
    path: 'technology',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
