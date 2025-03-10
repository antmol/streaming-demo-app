# Streaming Demo App

Esta es una aplicación front end para mostrar películas y series, creada con **React**, **Vite**, **Redux**, **React Router**, **Axios** y **TypeScript**.

## Requerimientos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v16 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/) (recomendado)


Sigue estos pasos para clonar el repositorio, instalar las dependencias y levantar el proyecto.

### 1. Clonar el repositorio

Clona el repositorio desde GitHub:

```bash
git clone https://github.com/antmol/streaming-demo-app.git
```
Navega al directorio del proyecto:

```bash
cd streaming-demo-app
```
### 2. Instalar dependencias
Instala las dependencias del proyecto usando npm o Yarn:

```bash
npm install
```
### 3. Levantar el proyecto
Una vez instaladas las dependencias, puedes levantar el servidor de desarrollo:

```bash
npm run dev
```
### 4. Construir para producción
Si deseas construir el proyecto para producción, ejecuta:

```bash
npm run build
```
5. Servir la versión de producción
Para servir la versión de producción localmente, puedes usar:

```bash
npm run preview
```
### Estructura del proyecto
El proyecto está organizado de la siguiente manera:
```bash
streaming-demo-app/
├── public/                 # Archivos públicos (imágenes, favicon, etc.)
├── src/                    # Código fuente de la aplicación
│   ├── components/         # Componentes reutilizables
│   ├── pages/              # Páginas de la aplicación
│   ├── store/              # Configuración de Redux
│   ├── App.tsx             # Componente principal de la aplicación
│   ├── main.tsx            # Punto de entrada de la aplicación
│   └── index.css           # Estilos globales
├── .env                    # Variables de entorno (opcional)
├── .gitignore              # Archivos y carpetas ignorados por Git
├── package.json            # Dependencias y scripts del proyecto
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración de Vite
```
###Dependencias principales
React: Biblioteca para construir interfaces de usuario.

Vite: Herramienta de construcción rápida para proyectos modernos.

Redux: Manejo del estado global de la aplicación.

React Router: Navegación entre páginas.

TypeScript: Tipado estático para JavaScript.

Axios: Cliente HTTP para realizar peticiones a la API.

### Contribuir
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama con tu nueva funcionalidad (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Agrega nueva funcionalidad').

Sube tus cambios a GitHub (git push origin feature/nueva-funcionalidad).

Abre un Pull Request en GitHub.

### Licencia
Este proyecto está bajo la licencia MIT.
