import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

import { TechnologyChannelComponent } from './technology-channel/technology-channel.component';
import { LgtmChannelComponent } from './lgtm-channel/lgtm-channel.component';
import { GeneralChannelComponent } from './general-component/general-channel.component';

@NgModule({
  declarations: [
    AppComponent,

    TechnologyChannelComponent,
    LgtmChannelComponent,
    GeneralChannelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
