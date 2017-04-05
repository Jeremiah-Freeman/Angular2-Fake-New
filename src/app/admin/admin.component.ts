import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticleService]
})
export class AdminComponent implements OnInit {

  constructor(private ArticleService: ArticleService) { }

  ngOnInit() {
  }

  submitForm(author: string, title: string, story: string, image: string,) {
    var newArticle: Article = new Article(author, title, story, image);
    this.ArticleService.addArticle(newArticle);
  }
}
