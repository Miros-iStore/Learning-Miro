import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './Components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './Components/counter/counter.component';
import { TimerWatchComponent } from './Components/timer-watch/timer-watch.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    CounterComponent,
    TimerWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
