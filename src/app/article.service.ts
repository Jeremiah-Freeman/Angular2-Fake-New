import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './mock-articles';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ArticleService {

  articles: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
   this.articles = angularFire.database.list('articles');}

  getArticles() {
    return this.articles;
  }

  addArticle(newArticle: Article) {
    this.articles.push(newArticle);
  }

  getArticleById(articleId: string){
  return this.angularFire.database.object('articles/' + articleId);
  }

}
