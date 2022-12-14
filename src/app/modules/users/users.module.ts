import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './components/views/main/main.component';
import {UsersTableComponent} from './components/shared/users-table/users-table.component';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {
  UserInformationDialogComponent
} from './components/shared/user-information-dialog/user-information-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {UserFormComponent} from './components/shared/user-form/user-form.component';
import { UserPostListComponent } from './components/shared/user-post-list/user-post-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PostCardComponent } from './components/shared/post-card/post-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { CloseButtonComponent } from './components/shared/close-button/close-button.component';


@NgModule({
  declarations: [
    MainComponent,
    UsersTableComponent,
    UserInformationDialogComponent,
    UserFormComponent,
    UserPostListComponent,
    PostCardComponent,
    CloseButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: {}},
    FormBuilder
  ],
})
export class UsersModule {
}
