import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserWithPosts} from '../../../types/UserWithPosts';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../types/reqres';

@Component({
  selector: 'app-user-information-dialog',
  templateUrl: './user-information-dialog.component.html',
  styleUrls: ['./user-information-dialog.component.sass']
})
export class UserInformationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userWithPosts: UserWithPosts
  ) {
  }
  user: User = {} as User;

  ngOnInit(): void {
    this.user = {...this.userWithPosts};
  }
  ngAfterViewInit(): void {

  }

}
