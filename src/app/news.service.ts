import { Injectable, EventEmitter } from '@angular/core';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData('Chcieli wlepić mandat. Szybko zmienili decyzję', 'https://source.unsplash.com/random', 'Olsztyńscy policjanci zatrzymali do kontroli osobowe audi, którego kierujący przekroczył dozwoloną prędkość o ponad 30 km/h. Okazało się, że powodem było pogorszenie się zdrowia dziecka, które siedziało na tylnej kanapie auta.', 0),
    new NewsData('Pokaz możliwości programowalnych granatów 40mm', 'https://source.unsplash.com/user/erondu', 'Automatic Grenade Launchers have been around since the 1960s, but today new technology allows them to take on new roles on the battlefield. Watch as Helge St...', 0),
    new NewsData('Bunt w miastach! Niech płaci ten, kto śmieci', 'https://source.unsplash.com/user/dan', 'To producenci, a nie mieszkańcy powinni ponosić koszty odbioru i zagospodarowania opakowań – uważa Unia Metropolii Polskich. Coraz silniejsze są głosy, że system gospodarki odpadami wymaga zmiany. ', 0)
  ];

  getNewsList(): NewsData[] {
    this.onChange.emit();
    return this.news.sort((a, b) => b.id - a.id);
  }

  removeItem(index: number) {
    this.news.splice(index, 1);
  }

  addItem(title: string, imageUrl: string, content: string, id: number) {
    this.news.push(new NewsData(title, imageUrl, content, id));
    this.onChange.emit();
  }
}
