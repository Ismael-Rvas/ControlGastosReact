# 📊 Control de Gastos

## 🏦 Gestión sencilla de ingresos y gastos

Bienvenido a **Control de Gastos**, una aplicación diseñada para ayudarte a **monitorear y organizar tus finanzas personales** de manera eficiente.

---

## 🚀 Características
✅ **Registro de ingresos y gastos** con detalles personalizados.  
✅ **Gráficos interactivos** para visualizar tus movimientos financieros.  
✅ **Autenticación con Supabase** para gestionar usuarios de forma segura.  
✅ **Interfaz moderna y responsiva** con Styled Components y TailwindCSS.  
✅ **Almacenamiento de datos en tiempo real** con Supabase y Zustand.  
✅ **Soporte para múltiples monedas** con `iso-country-currency`.  

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso en el Proyecto |
|------------|------------------|
| **React 19** | Biblioteca principal para la UI |
| **React Router** | Manejo de rutas y navegación |
| **Styled Components** | Estilización de componentes con CSS-in-JS |
| **TailwindCSS** | Diseño responsivo y moderno |
| **MUI (Material UI)** | Componentes de interfaz accesibles y flexibles |
| **Zustand** | Gestión global de estado |
| **Supabase** | Autenticación y base de datos en la nube |
| **TanStack React Query** | Manejo eficiente de peticiones a la API |
| **Chart.js + React-Chartjs-2** | Visualización de datos con gráficos interactivos |
| **DayJS** | Manejo de fechas y tiempos |
| **SweetAlert2** | Notificaciones y alertas personalizadas |
| **Swiper.js** | Carruseles interactivos |
| **Emoji Picker React** | Selector de emojis |

---

## 📦 Instalación

### 1️⃣ Clona el repositorio:
```bash
git clone https://github.com/tuusuario/controldegastos.git
cd controldegastos
```

### 2️⃣ Instala las dependencias:
```bash
npm install
```

### 3️⃣ Inicia la aplicación en modo desarrollo:
```bash
npm run dev
```

La app estará disponible en **http://localhost:5173** (o el puerto que Vite asigne).

---

## 📜 Uso
🔹 Regístrate o inicia sesión para acceder a todas las funcionalidades.  
🔹 Agrega ingresos y gastos con detalles personalizados.  
🔹 Visualiza tus movimientos en **gráficos dinámicos**.  
🔹 Personaliza la interfaz con **tema claro u oscuro**.  
🔹 Gestiona tu perfil y preferencias.  

---

## 📂 Estructura del Proyecto
```
📦 controldegastos
 ┣ 📂 src
 ┃ ┣ 📂 assets        # Archivos estáticos (imágenes, iconos, etc.)
 ┃ ┣ 📂 components    # Componentes reutilizables
 ┃ ┣ 📂 context       # Manejo de autenticación y temas
 ┃ ┣ 📂 hooks         # Custom Hooks
 ┃ ┣ 📂 layouts       # Estructura (Header, Sidebar, etc.)
 ┃ ┣ 📂 pages         # Páginas principales
 ┃ ┣ 📂 routes        # Configuración de React Router
 ┃ ┣ 📂 services      # Conexión con Supabase y servicios externos
 ┃ ┣ 📂 store         # Gestión de estado con Zustand
 ┃ ┣ 📂 styles        # Estilos globales (Styled Components + Tailwind)
 ┃ ┣ 📂 utils         # Utilidades y helpers
 ┃ ┣ 📜 App.jsx       # Componente principal
 ┃ ┣ 📜 main.jsx      # Punto de entrada principal
 ┃ ┣ 📜 index.js      # Configuración global
 ┃ ┗ 📜 supabase.js   # Conexión con Supabase
 ┣ 📜 .eslintrc.json  # Configuración de ESLint
 ┣ 📜 .gitignore      # Archivos a ignorar por Git
 ┣ 📜 package.json    # Dependencias y scripts
 ┣ 📜 README.md       # Documentación del proyecto
 ┗ 📜 vite.config.js  # Configuración de Vite
```

---

## 💡 Personalización
🔹 Para cambiar los **temas** o **colores**, modifica `theme.js`.  
🔹 Si deseas ajustar la **base de datos**, configura `supabaseClient.js`.  
🔹 Puedes editar las **fuentes** y **espaciados** en `tailwind.config.js`.  

---

## 📌 Próximas Mejoras
✅ Exportación de datos en CSV o PDF.  
✅ Notificaciones automáticas por correo.  
✅ Cuenta más avanzada con filtros.  

---

## 🤝 Contribuciones
¡Toda ayuda es bienvenida! Si deseas mejorar este proyecto:
1️⃣ **Haz un fork** del repositorio.  
2️⃣ **Crea una nueva rama** (`git checkout -b nueva-feature`).  
3️⃣ **Realiza tus cambios** y haz un commit (`git commit -m "Nueva funcionalidad"`)  
4️⃣ **Sube los cambios** (`git push origin nueva-feature`).  
5️⃣ **Haz un pull request** y lo revisaremos.  

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

📧 **Contacto:**  [GitHub](https://github.com/Ismael-Rvas/ControlGastosReact)