import {Component, OnInit} from '@angular/core';
import {DataUser, User} from '../../../types/reqres';
import {ReqresService} from '../../../services/api/reqres.service';
import {JpService} from '../../../services/api/jp.service';
import {Post} from '../../../types/jp';
import {mergeMap} from 'rxjs';
import {UserWithPosts} from '../../../types/UserWithPosts';
import {MatDialog} from '@angular/material/dialog';
import {UserInformationDialogComponent} from '../../shared/user-information-dialog/user-information-dialog.component';
import {CommunicatorService} from '../../../services/communication/communicator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private reqresService: ReqresService,
              private jpService: JpService,
              public dialog: MatDialog,
              private communicatorService: CommunicatorService) {
  }

  currentUser: User = {} as User;
  currentUserPosts: Post[] = [] as Post[];
  userWithPosts: UserWithPosts = {} as UserWithPosts;

  ngOnInit(): void {
  }

  catchSelectedUser(user: User) {
    this.getUserInformation(user.id);
  }

  getUserInformation(userId?: number) {
    this.reqresService.getUserById(userId).pipe(
      mergeMap((user: DataUser) => {
        this.currentUser = user.data;
        return this.jpService.getPostsByUserId(userId);
      })
    ).subscribe({
      next: (posts) => {
        this.currentUserPosts = posts;
        this.userWithPosts = {...this.currentUser, posts: this.currentUserPosts};
        this.openDialog();
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserInformationDialogComponent, {
      width: '60%',
      data: this.userWithPosts,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
