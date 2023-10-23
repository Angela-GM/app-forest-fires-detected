# Proyecto de SPA para mostrar información en tiempo real sobre incendios forestales

Este proyecto es una Single Page Application (SPA) desarrollada para mostrar información en tiempo real sobre los incendios forestales detectados en Castilla y León (España) durante los dos últimos años. Se utiliza una API de datos abiertos para obtener los datos.

## Insignias

   ![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)




## Tecnologías y Herramientas Utilizadas

- **Vite**: Vite es un entorno de desarrollo rápido y versátil para construir aplicaciones web modernas. Es especialmente adecuado para proyectos basados en JavaScript y TypeScript. 

- **React.js con Typescript**: Se ha utilizado React.js para el desarrollo de la SPA. React es una biblioteca JavaScript para construir interfaces de usuario. He decidido usar Typescript para aprovechar las ventajas de un sistema de tipos estáticos que ofrece una mayor seguridad y mantenibilidad en el código, facilitando la detección temprana de errores en el entorno de desarrollo. Esto ha hecho que el desarrollo de la SPA sea más eficiente y menos propenso a errores, lo que a su vez ha mejorado la calidad y la robustez de la aplicación.

- **Tailwind CSS**: Se ha utilizado Tailwind CSS para el diseño y estilo de la aplicación. Tailwind es un marco de CSS de utilidad de bajo nivel que proporciona clases de utilidad de bajo nivel para construir diseños personalizados.

- **shadecn/ui**: Se ha utilizado la librería shadecn/ui para crear tablas y algunos componentes de la interfaz de usuario.

- **Vitest**: Se han realizado pruebas unitarias con Vitest para algunos componentes de la aplicación.

- **Trello**: Se ha utilizado Trello para la gestión del proyecto.

![Alt text](/public/trello.png)


- **Vercel**: La aplicación web se ha implementado en un servidor gratuito de Vercel.

## Características de la Aplicación

![página principal](/public/principal.png)

La aplicación muestra una tabla con la mayor cantidad de datos posible que la API abierta puede proporcionar. La tabla de datos cuenta con filtros que permiten al usuario visualizar información filtrada por: Provincia, causa probable, Situación actual,Nivel y Nivel máximo alcanzado.

![mapa de incendios](/public/mapa.png)

Además, la aplicación incluye un mapa interactivo para geoposicionar los incendios. El usuario puede almacenar la configuración de los filtros seleccionados en el almacenamiento local del navegador. La aplicación también tiene una entrada de datos para buscar incendios cercanos (en un radio de 10 km) en coordenadas GPS determinadas (latitud y longitud).


## Estructura del proyecto

```git
/src
├── App.css
├── App.tsx
├── assets
|  └── react.svg
├── components
|  ├── MapComponent.tsx
|  ├── table
|  |  ├── columns.tsx
|  |  ├── data-table-column-header.tsx
|  |  ├── data-table-faceted-filter.tsx
|  |  ├── data-table-pagination.tsx
|  |  └── data-table.tsx
|  ├── TableComponent.tsx
|  └── ui
|     ├── badge.tsx
|     ├── button.tsx
|     ├── command.tsx
|     ├── dropdown-menu.tsx
|     ├── input.tsx
|     ├── label.tsx
|     ├── popover.tsx
|     ├── select.tsx
|     ├── separator.tsx
|     └── table.tsx
├── context
|  └── ApiContext.tsx
├── error-page.tsx
├── index.css
├── interfaces
|  └── reports.ts
├── lib
|  ├── dateTwoYearsAgo.ts
|  └── utils.ts
├── main.tsx
├── output.txt
├── pages
|  ├── MapPage.tsx
|  └── TablePage.tsx
├── routes
|  └── root.tsx
├── services
|  ├── apiClient.ts
|  └── lib
|     └── records.ts
├── test
|  ├── test-components
|  |  ├── data-table.test.tsx
|  |  └── table
|  └── vitest.setup.ts
└── vite-env.d.ts

directory: 14 file: 36
```	

## Despliegue en Vercel

La aplicación web se ha implementado en un servidor gratuito de Vercel. https://app-forest-fires-detected.vercel.app/
.

## Documentación del Proyecto/Código


Se han realizado pruebas unitarias con Vitest de algunos componentes. Además, se ha documentado el código para poder compilarlo y probarlo en un servidor web. No es necesario incluir claves API personales en el código.

## Pruebas del Proyecto

Para probar el proyecto, siga los siguientes pasos:

1. **Clonar el repositorio**: Clone el repositorio en su máquina local utilizando el comando `git clone`:

   ```bash
   git clone https://github.com/Angela-GM/app-forest-fires-detected.git
   ```

2. **Instalación de dependencias**: Navegue hasta el directorio del proyecto y ejecute:


   ```bash
   npm install
   ```


3. **Ejecución de pruebas unitarias**: Ejecute `npm run test` para ejecutar las pruebas unitarias con Vitest.

   ```bash
   npm run test
   ```

4. **Iniciar la aplicación**: Ejecute `npm run dev` para iniciar la aplicación en modo de desarrollo.

   ```bash
   npm run dev
   ```

5. **Visitar la aplicación**: Abra su navegador y vaya a [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.

Además, puede utilizar la aplicación para interactuar con los datos de incendios forestales, utilizando los filtros proporcionados y buscando incendios cercanos en coordenadas GPS específicas.

## Contacto

Si tiene alguna pregunta o necesita más información, no dude en contactarme.

[<img src="https://avatars.githubusercontent.com/u/116819605?s=400&u=bae5f7e88a358d3fbbd2f0e8521dda9a57739c70&v=4" width=115><br><sub>Angela Garcia: Desarrolladora Full Stack</sub>](https://github.com/Angela-GM)

