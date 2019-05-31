import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../title.service';
import { PostServiceService } from '../../services/post/post-service.service';
import {Post} from '../../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  url = '../assets/img/home-bg.jpg';
  posts: Post[];
  constructor(private msg: TitleService, private service: PostServiceService) {
    msg.changeTitle(this.title);
    msg.changeUrl(this.url);
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.service.getPosts()
      .subscribe(data => {
        console.log(data + 'fdsfsgfg');
        this.posts = data;
      });

  }
}
