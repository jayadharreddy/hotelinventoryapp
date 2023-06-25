import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    ImageComponentComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
