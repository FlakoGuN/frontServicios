import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { Cliente } from 'src/modelos/Cliente';
import { Contacto } from 'src/modelos/Contacto';
import { Equipo } from 'src/modelos/Equipo';
import { Servicio } from 'src/modelos/Servicio';

@Injectable({
  providedIn: 'root'
})
export class SrvclienteService {

  

  
  constructor(private http:HttpClient) { }

  url="http://localhost:8080/api";
 

  public clientes: Observable<Cliente[]> = of([]);
  

  getClientes(): Observable<any> {
    this.clientes = this.http.get<Cliente[]>(`${this.url}/cliente`, );
    return this.clientes;
  }

  crearCliente(cliente:Cliente): Observable<any>{
    return this.http.post<Cliente>(`${this.url}/cliente`,  cliente, );
  }
  
  getContactos() {
    return this.http.get<Contacto[]>(`${this.url}/contacto`, );
  }

  crearContactos(contacto:Contacto): Observable<any> {
    return this.http.post<Contacto>(`${this.url}/contacto`,contacto, );
  }

  getEquipos(): Observable<any> {
    this.clientes = this.http.get<Cliente[]>(`${this.url}/equipo`, );
    return this.clientes;
  }

  crearEquipos(equipo:Equipo): Observable<any>{
    return this.http.post<Equipo>(`${this.url}/equipo`,equipo, );
  }

  getServicios(): Observable<any> {
    this.clientes = this.http.get<Cliente[]>(`${this.url}/servicio`, );
    return this.clientes;
  }

  crearServicios(servicio:Servicio): Observable<any>{
    return this.http.post<Servicio>(`${this.url}/servicio`,servicio, );
  }

  verServicio(id:number): Observable<any>{
    return this.http.get<Servicio>(`${this.url}/servicio/${id}`, );
  }
}