# Amigo Secreto

> Proyecto educativo de Alura

[![Estado](https://img.shields.io/badge/estado-en%20desarrollo-blue)]()
[![Lenguaje](https://img.shields.io/badge/javascript-ES6-yellow)]()

---

## Objetivo del proyecto

El objetivo principal de este desafío es desarrollar habilidades en lógica de programación, principalmente:

- Manipular **arrays** para almacenar participantes.
- Crear y reutilizar **funciones**.
- Aplicar **condicionales** para validar entradas y resultados.
- Gestionar **variables** para el estado del sorteo.

---

## Funcionalidades

- **Agregar nombres** a una lista de participantes.
- Validar entradas:
  - No se permiten duplicados.
  - No se permiten campos vacíos.
- **Eliminar participantes** de la lista.
- **Sortear el Amigo Secreto**:
  - Cada participante recibe exactamente un amigo secreto.
  - Nadie puede asignarse a sí mismo.
- **Mostrar resultados** de manera clara en pantalla.
- Guardar la lista en `localStorage` para persistencia (opcional).

---

## Capturas de pantalla

### 1) Agregar nombres
![Agregar nombres](docs/images/add-names.png)

### 2) Realizar el sorteo
![Sorteo](docs/images/draw.png)

### 3) Resultados
![Resultados](docs/images/results.png)

---

## Demo en acción

![Demo](docs/videos/demo.gif)

*(Puedes grabar tu pantalla mientras agregas nombres y ejecutas el sorteo, exportar como GIF o MP4 y añadirlo aquí.)*

---

## Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/amigo-secreto.git
   cd amigo-secreto
