import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css'],
  providers: [ArticleService]
})

export class BreakingNewsComponent {
  articles: FirebaseListObservable<any[]>;
  
  constructor(private router: Router, private articleService: ArticleService) {}

  ngOnInit(){
    this.articles = this.articleService.getArticles();
  }

  goToDetailPage(clickedArticle: Article) {
    this.router.navigate(['article', clickedArticle.id]);
  };
}
