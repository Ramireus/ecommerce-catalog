# 🛒 TechStore - E-Commerce React + Vite

## 📋 Descripción

**TechStore** es una aplicación E-Commerce profesional construida con **React 19**, **Vite**, y **Bootstrap 5**. Demuestra un flujo CI/CD completo desde GitHub hasta Netlify, con componentes reutilizables, state management con Context API, y persistencia de datos en localStorage.

### 🎯 Objetivo del Taller
Este proyecto es parte del **Taller Práctico de DevOps & CI/CD** para:
- ✅ Trabajar en ramas Git colaborativamente
- ✅ Crear componentes funcionales reutilizables en React
- ✅ Implementar filtros, búsqueda y carrito de compras
- ✅ Configurar CI/CD con GitHub Actions y Netlify
- ✅ Desplegar en producción automáticamente

---

## ⚙️ Tecnologías

| Categoría | Tecnología |
|-----------|-----------|
| **Frontend** | React 19.2, Vite 8.0 |
| **Styling** | Bootstrap 5, CSS3 |
| **Icons** | Lucide React |
| **State** | Context API + useState |
| **Storage** | localStorage |
| **Package Manager** | npm |
| **Deployment** | Netlify |
| **CI/CD** | GitHub Actions |

---

## 🚀 Características

### 📦 Product Catalog
- ✅ 12 productos de ejemplo con imágenes Unsplash
- ✅ Información detallada por producto (nombre, precio, stock, rating)
- ✅ Badges de disponibilidad

### 🔍 Filtrado Avanzado
- ✅ **Búsqueda en tiempo real** (por nombre y descripción)
- ✅ **Filtro por categoría** (Electronics, Accessories)
- ✅ **Filtro por rango de precio** (Budget, Mid, Premium)
- ✅ Botón "Clear All" para limpiar filtros

### 🛒 Carrito de Compras
- ✅ Agregar/eliminar productos
- ✅ Actualizar cantidades
- ✅ Cálculo automático de totales
- ✅ **Persistencia en localStorage** (datos persisten al recargar)
- ✅ Modal deslizante con animaciones suaves
- ✅ Resumen de compra (subtotal, envío, impuestos)

### 💻 Componentes Reutilizables
- `Header` - Navegación con búsqueda y carrito
- `ProductCard` - Card individual de producto
- `ProductList` - Grid responsivo de productos
- `Filters` - Panel de filtros interactivos
- `Cart` - Modal del carrito con gestión de items
- `Footer` - Pie de página con enlaces y redes sociales

### 🎨 Diseño Profesional
- ✅ Responsive (móvil, tablet, desktop)
- ✅ Gradientes y sombras modernas
- ✅ Animaciones suaves y transiciones
- ✅ Diseño limpio y minimalista
- ✅ Accesibilidad (ARIA labels, contraste)

---

## 📂 Estructura del Proyecto

```
ecommerce-catalog/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Filters.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

---

## 🔧 Instalación

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

Abre `http://localhost:5173`

### 3. Construir para producción
```bash
npm run build
```

---

## 🧪 Flujo de Trabajo DevOps

### 1️⃣ Git Workflow
```bash
git checkout -b feature/mi-componente
git add .
git commit -m "feat: agregar componente"
git push origin feature/mi-componente
```

### 2️⃣ CI/CD - Netlify
- Push a `main` → Build automático → Deployment

---

## 🎓 Conceptos Aprendidos

✅ React Hooks | ✅ Context API | ✅ CSS Grid | ✅ LocalStorage  
✅ Git Workflow | ✅ GitHub Actions | ✅ Netlify Deployment

---

**Creado para taller de DevOps & CI/CD** ❤️

