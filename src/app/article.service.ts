import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { ARTICLES } from './mock-articles';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ArticleService {
  artiles: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) { }

  getArticles() {
    return ARTICLES;
  }

  getArticleById(articleId: number) {
    for (var i = 0; i <= ARTICLES.length - 1; i++) {
      if (ARTICLES[i].id === articleId) {
        return ARTICLES[i];
      }
    }
  }
}
