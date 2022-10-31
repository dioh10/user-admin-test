import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../types/jp';
import {CommunicatorService} from '../../../services/communication/communicator.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.sass']
})
export class PostCardComponent implements OnInit {

  constructor(private communicatorService: CommunicatorService) { }
  @Input() post: Post = {} as Post;

  ngOnInit(): void {
  }
  deletePost(id: number) {
    this.communicatorService.deletePost(id);
  }

}
