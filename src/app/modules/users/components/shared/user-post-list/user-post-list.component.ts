import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../types/jp';

@Component({
  selector: 'app-user-post-list',
  templateUrl: './user-post-list.component.html',
  styleUrls: ['./user-post-list.component.sass']
})
export class UserPostListComponent implements OnInit {

  constructor() { }
  @Input() posts: Post[] = [] as Post[];

  ngOnInit(): void {
  }

}
