# React Native NASA App

Esta es una **aplicación móvil sencilla** desarrollada en **React Native** que integra la API de la NASA para mostrar imágenes astronómicas diarias junto con sus descripciones. La aplicación también permite navegar por las imágenes de los últimos 5 días, mostrando una vista detallada con información adicional.

## Funcionalidades

- **Imágenes diarias**: La aplicación muestra la imagen del día actual proporcionada por la API de la NASA.
- **Historial de imágenes**: Incluye las imágenes de los 5 días anteriores (hoy y las fechas anteriores).
- **Vista detallada**: Al hacer clic en una imagen, se muestra una vista detallada con la imagen ampliada y su descripción en un formato más legible.

## Instalación y Ejecución

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto.
3. Instala las dependencias necesarias con el siguiente comando:
```bash
npm install
```
4. Añade tu clave de API de la NASA en un archivo `.env`
5. Para ejecutar la aplicación en un emulador o dispositivo físico, utiliza uno de los siguientes comandos:
```bash
npx react-native run-android
npx react-native run-ios
```
