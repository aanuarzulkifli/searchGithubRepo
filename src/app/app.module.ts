import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RepoComponent } from './components/repo/repo.component';
import { RepoService } from './services/repo.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
