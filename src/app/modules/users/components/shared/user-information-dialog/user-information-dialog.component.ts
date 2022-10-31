import {Component, Inject, Input, OnInit} from '@angular/core';
import {UserWithPosts} from '../../../types/UserWithPosts';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../../types/reqres';
import {Post} from '../../../types/jp';
import {CommunicatorService} from '../../../services/communication/communicator.service';

@Component({
  selector: 'app-user-information-dialog',
  templateUrl: './user-information-dialog.component.html',
  styleUrls: ['./user-information-dialog.component.sass']
})
export class UserInformationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserInformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userWithPosts: UserWithPosts,
    private communicatorService: CommunicatorService
  ) { }
  user: User = {} as User;
  posts: Post[] = [] as Post[];

  ngOnInit(): void {
    this.user = {...this.userWithPosts};
    this.posts = [...this.userWithPosts.posts];
    this.listenToPostDeletion();
  }

  listenToPostDeletion() {
    this.communicatorService.currentBlogPostId.subscribe(id => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }

}
