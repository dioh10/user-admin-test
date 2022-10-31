import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserWithPosts} from '../../../types/UserWithPosts';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-user-information-dialog',
  templateUrl: './user-information-dialog.component.html',
  styleUrls: ['./user-information-dialog.component.sass']
})
export class UserInformationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserWithPosts
  ) {
  }

  ngOnInit(): void {
  }

}
