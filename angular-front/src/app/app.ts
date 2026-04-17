import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div style="text-align:center; margin-top: 50px; font-family: Arial, sans-serif;">
      <h1>🚀 Despliegue Exitoso en AWS</h1>
      <table border="1" style="margin: 0 auto; width: 60%; border-collapse: collapse;">
        <thead style="background-color: #007bff; color: white;">
          <tr>
            <th style="padding: 10px;">ID</th>
            <th style="padding: 10px;">Nombre de Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let u of usuarios">
            <td style="padding: 10px;">{{ u.id }}</td>
            <td style="padding: 10px;">{{ u.nombre }}</td>
          </tr>
        </tbody>
      </table>
      <div *ngIf="usuarios.length === 0" style="margin-top: 20px;">
        <p>Esperando datos del backend...</p>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  usuarios: any[] = [];
  private apiUrl = 'http://44.223.45.144:8080/api/data';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Error al conectar con el backend:', err);
      }
    });
  }
}