import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/api/categorias`;

    return this.http.get<Categoria[]>(url);
  }

  findById(id: String): Observable<Categoria>{
    const url = `${this.baseUrl}/api/categoria/${id}`
    return this.http.get<Categoria>(url)
  }

  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/api/categoria/delete/${id}`
    return this.http.delete<void>(url)
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/api/categoria/salvar`
    return this.http.post<Categoria>(url, categoria);
  }

  update(categoria: Categoria):Observable<void>{
    const url = `${this.baseUrl}/api/categoria/alterar/${categoria.id}`
    return this.http.put<void>(url, categoria);
  }

  mensagem(str: String): void{
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
