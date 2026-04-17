# EC2_SebastianAlvarez
# 🚀 Fullstack AWS Deployment: Angular + Spring Boot + SQL Server

Este proyecto demuestra una arquitectura de microservicios desplegada en **Amazon Web Services (AWS)** utilizando **Docker** para la contenerización de cada capa.

## 🏗️ Arquitectura del Sistema

La solución se divide en tres capas independientes desplegadas en instancias **EC2**:

1.  **Frontend (Capa de Presentación)**: 
    * **Framework**: Angular 18+
    * **Servidor**: Nginx
    * **IP Pública**: `3.226.255.183`
2.  **Backend (Capa de Negocio)**: 
    * **Framework**: Spring Boot (Java 17)
    * **ORM**: Hibernate / JPA
    * **IP Pública**: `44.223.45.144:8080`
3.  **Base de Datos (Capa de Datos)**: 
    * **Motor**: Microsoft SQL Server
    * **Despliegue**: Contenedor Docker en EC2
    * **IP**: `35.173.36.94`

---

## 🛠️ Tecnologías Utilizadas

* **Infraestructura**: AWS (EC2, Security Groups, VPC).
* **Contenerización**: Docker & Docker Hub.
* **Frontend**: Angular, TypeScript, HTML5/CSS3.
* **Backend**: Spring Boot, Maven.
* **Base de Datos**: SQL Server 2022.

---

## 🔌 Configuración de Red y Seguridad

Para permitir la comunicación entre los servicios, se configuraron los **Security Groups** de AWS de la siguiente manera:

| Servicio | Puerto | Descripción |
| :--- | :--- | :--- |
| **HTTP** | 80 | Acceso público al Frontend Angular |
| **Spring API** | 8080 | Comunicación entre Front y Back |
| **SQL Server** | 1433 | Conexión JDBC desde el Backend |

---

## 🚀 Despliegue con Docker

Cada componente cuenta con su propio `Dockerfile` para garantizar un entorno aislado y reproducible.

### Ejecución del Proyecto
Para desplegar el sistema completo, se utilizaron los siguientes comandos en las instancias correspondientes:

```bash
# Frontend
docker run -d --name angular-front -p 80:80 sebastianalvareztito/angular-front:v1

# Backend
docker run -d --name spring-api -p 8080:8080 sebastianalvareztito/spring-api:v1

# Database
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourPassword" -p 1433:1433 -d [mshub.microsoft.com/mssql/server](https://mshub.microsoft.com/mssql/server)