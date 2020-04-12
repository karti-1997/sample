import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatMenuModule, MatIconModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatListModule,
   MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatExpansionModule, MatGridListModule, MatDialogModule, MatStepperModule, MatSelectModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { FlexLayoutModule } from '@angular/flex-layout';*/
import { NgModule } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
//import { PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HeaderComponent } from './header/header.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { StudentComponent } from './header/student/student.component';
import { FacultyComponent } from './header/faculty/faculty.component';
import { LoginComponent } from './header/login/login.component';
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { FilterPipe} from './posts/post-list/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighchartsChartComponent,
    PostCreateComponent,
    PostListComponent,
    StudentComponent,
    FacultyComponent,
    LoginComponent,
    FilterPipe,
    FileDropDirective,
    FileSelectDirective,
    //PdfViewerComponent
  ],
  imports: [
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    PdfViewerModule,
    MatTabsModule,
    MatSidenavModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
