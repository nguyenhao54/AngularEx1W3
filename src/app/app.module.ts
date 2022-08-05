import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { ChildComponent } from './components/child/child.component';
import { RowComponent } from './components/row/row.component';
import { TableComponent } from './components/table/table.component';
import { ChildcontainerComponent } from './components/childcontainer/childcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ChildComponent,
    RowComponent,
    TableComponent,
    ChildcontainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
