import { Component } from '@angular/core';

interface  Karticka{
  ikona: string;
  otoceno: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pexesou';

  savedCard: Karticka | null = null;

  karticky: Karticka[] = [
    {ikona: "1", otoceno: false},
    {ikona: "2", otoceno: false},
    {ikona: "3", otoceno: false},
    {ikona: "4", otoceno: false},
    {ikona: "5", otoceno: false},
    {ikona: "6", otoceno: false},
    {ikona: "1", otoceno: false},
    {ikona: "2", otoceno: false},
    {ikona: "3", otoceno: false},
    {ikona: "4", otoceno: false},
    {ikona: "5", otoceno: false},
    {ikona: "6", otoceno: false}
  ];

  otocit(clicknutaKarticka: Karticka): void {
    if (clicknutaKarticka.otoceno === true) {
      return;
    }
    if (this.savedCard === null) {
      clicknutaKarticka.otoceno = true;
      this.savedCard = clicknutaKarticka;
    } else { if (this.savedCard !== clicknutaKarticka) {
        clicknutaKarticka.otoceno = true;
        if (clicknutaKarticka.ikona !== this.savedCard.ikona) {
          const savedCard = this.savedCard;
          setTimeout(() => {
            clicknutaKarticka.otoceno = false;
            savedCard.otoceno = false;
          }, 2000);
        }
        this.savedCard = null;
      }
    }
  }
}
