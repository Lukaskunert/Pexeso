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

    BREH: boolean;
    LUL: boolean;

  karticky: Karticka[] = [
    {ikona: "1", otoceno: false},
    {ikona: "1", otoceno: false},
    {ikona: "2", otoceno: false},
    {ikona: "2", otoceno: false},
    {ikona: "3", otoceno: false},
    {ikona: "3", otoceno: false},
    {ikona: "4", otoceno: false},
    {ikona: "4", otoceno: false},
    {ikona: "5", otoceno: false},
    {ikona: "5", otoceno: false},
    {ikona: "6", otoceno: false},
    {ikona: "6", otoceno: false}
  ];

  savedCard: Karticka | null = null;
  number: number;

  clickedButton() {
    this.BREH = true;
    this.LUL = true;
    this.karticky.length = this.number;

    var currentIndex = this.karticky.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.karticky[currentIndex];
      this.karticky[currentIndex] = this.karticky[randomIndex];
      this.karticky[randomIndex] = temporaryValue;
    }
    console.log(this.karticky);
    return this.karticky;
  }

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
