# Lincoln FC — Control de Asistencia

## Configuración inicial

### 1. Crear proyecto en Firebase

1. Ir a [Firebase Console](https://console.firebase.google.com/)
2. Clic en **Agregar proyecto** → nombre: `lincoln-fc-asistencia`
3. Desactivar Google Analytics (opcional) → **Crear proyecto**

### 2. Activar Authentication

1. En el panel izquierdo: **Authentication** → **Comenzar**
2. Pestaña **Sign-in method** → habilitar **Correo electrónico/Contraseña** → Guardar

### 3. Activar Firestore

1. En el panel izquierdo: **Firestore Database** → **Crear base de datos**
2. Seleccionar **Comenzar en modo de producción** → elegir región → Listo
3. En la pestaña **Reglas** pegar y publicar:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 4. Obtener configuración Firebase

1. En el panel: **Configuración del proyecto** (ícono de engranaje) → pestaña **General**
2. Sección "Tus apps" → clic en `</>` (web) → registrar app → copiar el objeto `firebaseConfig`

### 5. Pegar configuración en el proyecto

Abrir `js/firebase-config.js` y reemplazar los valores `REEMPLAZA_CON_...` con los de tu proyecto.

### 6. Crear el primer administrador

**En Firebase Console:**

1. **Authentication** → **Agregar usuario** → ingresar email y contraseña del admin → Guardar
2. Copiar el **UID** del usuario recién creado
3. **Firestore** → **Iniciar colección** → ID: `usuarios` → **Agregar documento** → ID: (el UID copiado)
4. Agregar los campos:
   - `nombre` (string): nombre del admin
   - `email` (string): email del admin
   - `rol` (string): `admin`
   - `activo` (boolean): `true`
   - `equiposAsignados` (array): vacío

### 7. Inicializar datos de jugadores

1. Hacer login con el admin
2. Ir a **Administración → Equipos**
3. Clic en **Inicializar Datos (U9 + Equipos)**

Esto crea los 6 equipos y los 26 jugadores del U9 en Firestore.

### 8. Crear índice en Firestore (para reportes)

Firestore requiere un índice compuesto para las consultas de reportes.
Al generar el primer reporte, si aparece un error en la consola del navegador con un link a Firebase → abrirlo y crear el índice automáticamente.

El índice requerido es: colección `asistencia`, campos `equipo` (ASC) + `fecha` (ASC).

### 9. Publicar en GitHub Pages

1. Crear repositorio en GitHub
2. Subir todos los archivos del proyecto
3. En el repositorio: **Settings → Pages → Branch: main → / (root)** → Save
4. La app estará disponible en `https://tu-usuario.github.io/nombre-repo/`

---

## Estructura de archivos

```
├── index.html           Login
├── dashboard.html       Dashboard principal
├── asistencia.html      Tomar asistencia
├── reportes.html        Reportes y estadísticas
├── admin-usuarios.html  Gestión de usuarios (solo admin)
├── admin-equipos.html   Gestión de equipos y jugadores (solo admin)
├── js/
│   ├── firebase-config.js   ← EDITAR con tu config de Firebase
│   ├── data.js              Datos iniciales de jugadores
│   └── utils.js             Funciones compartidas
└── css/
    └── main.css             Estilos personalizados
```

## Estados de asistencia

| Código | Estado | Cuenta como presente |
|--------|--------|---------------------|
| A | Asiste | Sí |
| F | Falta | No |
| P | Permiso | No |
| L | Lesión | No |
| T | Tarde | Sí |
| S | Suspendido | No |

El % de asistencia = (Asiste + Tarde) / Total sesiones × 100
