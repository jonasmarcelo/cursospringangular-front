import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String):Observable<Livro>{
    const url = `${this.baseUrl}/api/livros/${id}`;
    return this.http.get<Livro>(url);
  }

  findAllByCategoria(idCat: String):Observable<Livro[]>{
    const url = `${this.baseUrl}/api/livros?categoria=${idCat}`
    return this.http.get<Livro[]>(url);
  }

  create(livro: Livro, idCat: String):Observable<Livro>{
    const url = `${this.baseUrl}/api/livros?categoria=${idCat}`
    return this.http.post<Livro>(url, livro);
  }

  update(livro: Livro):Observable<Livro>{
    const url = `${this.baseUrl}/api/livros/${livro.id}`;
    return this.http.put<Livro>(url, livro);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
 
}
