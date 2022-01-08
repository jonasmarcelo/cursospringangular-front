import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

  idCat: String = '';

  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    texto: ''
  }

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit():void {
    this.idCat = this.route.snapshot.paramMap.get('id')!;
    this.livro.id = this.route.snapshot.paramMap.get('idLivro')!;
    this.findById();
  }

  findById(){
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta
    });
  }

  cancel(){
    this.router.navigate([`categorias/${this.idCat}/livros`]);
  }

}
