import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
  }
}
