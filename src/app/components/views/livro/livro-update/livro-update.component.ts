import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  idCat: String = '';

  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    texto: ''
  }

  titulo = new FormControl('', [Validators.minLength(3)])
  autor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])

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

  update(){
    this.service.update(this.livro).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.idCat}/livros`]);
      this.service.mensagem('Livro atualizado com sucesso!');
    }, err => {
      this.router.navigate([`categorias/${this.idCat}/livros`]);
      this.service.mensagem('Falha ao autualizar livro! Tente mais tarde...');
    });
  }

  getMessage(){

    if(this.titulo.invalid){
      return "O campo Título deve conter entre 3 e 100 caracteres";
    }

    if(this.autor.invalid){
      return "O campo Autor deve conter entre 3 e 100 caracteres";
    }

    if(this.texto.invalid){
      return "O campo Texto deve conter entre 10 e 2.000.000 caracteres";
    }

    return false;
  }

  cancel(){
    this.router.navigate([`categorias/${this.idCat}/livros`]);
  }

}
