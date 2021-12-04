import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.baseUrl;

  /** 
  findAllByCategoria(idCat: String):Observable<Livro[]>{

  }
  */

  constructor() { }
}
