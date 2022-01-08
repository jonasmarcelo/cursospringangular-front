import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

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

  delete(){
    this.service.delete(this.livro.id!).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.idCat}/livros`]);
      this.service.mensagem('Livro deletado com sucesso!');
    }, err => {
      this.router.navigate([`categorias/${this.idCat}/livros`]);
      this.service.mensagem('Falha ao deletar livro! Tente mais tarde...');
    })
  }  

  cancel(){
    this.router.navigate([`categorias/${this.idCat}/livros`]);
  }

}
