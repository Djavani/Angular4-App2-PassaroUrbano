import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/RX'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService]
})
export class OfertaComponent implements OnInit {
  
  private tempoObservableSubscription : Subscription
  private meuObservableTestSubscription : Subscription

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then(( oferta: Oferta ) => {
      this.oferta = oferta
    })/*
    this.route.params.subscribe((parametro: any) => { console.log(parametro) },
      (erro: any) => console.log(erro),
      () => console.log('processamento foi classificado como concluido!')
    )*/

    
    let tempo = Observable.interval(2000)

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
  

    //observable (observavel)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1)
      observer.next(5)
      observer.complete()
    })

    //observable (observador)
    this.meuObservableTestSubscription = meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado + 10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
    
  }
  
  ngOnDestroy(){
    this.meuObservableTestSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }

}
