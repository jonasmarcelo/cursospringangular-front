import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'título', 'livros','acoes'];

  idCat: String = '';
  livros: Livro[] = [];

  constructor(private service: LivroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCat = this.route.snapshot.paramMap.get('id')!;
    this.findAllByCategoria();
  }

  findAllByCategoria(){
    this.service.findAllByCategoria(this.idCat).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros);
    })
  }

}
