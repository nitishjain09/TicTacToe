import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[];
  isXNext: boolean;
  winner: string;
  count: number;
  tie: boolean;

  constructor() { }

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.isXNext = true;
    this.winner = null;
    this.count = 0;
    this.tie = false;
  }

  get player(){
    return this.isXNext ? 'X' : 'O';
  }

  makeMove(idx : number){
    if(!this.squares[idx]){
      this.count++;
      this.squares.splice(idx, 1, this.player);
      this.isXNext = !this.isXNext;
    }

    this.winner = this.checkWinner();
  }

  checkWinner(): string{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i=0;i<lines.length;++i){
      const [a, b, c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b]
          && this.squares[a] === this.squares[c] )
          return this.squares[a];
    }

    if(this.count == 9)
      this.tie = true;
    return null;
  }
}
