import { MatDatepickerModule } from '@angular/material/datepicker';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from'@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from'@angular/material/card';
import { TasksCrudComponent } from './views/tasks-crud/tasks-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { TasksCreateComponent } from './components/tasks/tasks-create/tasks-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from  '@angular/forms'
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import { TaskReadComponent } from './components/tasks/task-read/task-read.component';
import {TaskUpdateComponent} from './components/tasks/task-update/task-update.component';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component'
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { TaskArchiveComponent } from './components/tasks/task-archive/task-archive.component';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TasksCrudComponent,
    RedDirective,
    ForDirective,
    TasksCreateComponent,
    TaskReadComponent,
    TaskUpdateComponent,
    TaskDeleteComponent,
    TaskArchiveComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
