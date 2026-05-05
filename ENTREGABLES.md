# 📝 ENTREGABLES - Taller React + Vite + CI/CD

## 📋 Resumen de Entregas

Este documento describe exactamente QUÉ y CÓMO entregar en Moodle.

---

## 🎯 4 Entregables Obligatorios

### 1️⃣ **Enlace al Repositorio GitHub**

**Formato:**
```
https://github.com/TU_USUARIO/ecommerce-catalog
```

**Requisitos:**
- [ ] Repositorio PÚBLICO
- [ ] Contiene todos los archivos del proyecto
- [ ] Tiene al menos 1 commit inicial
- [ ] Rama `main` es la principal
- [ ] README.md visible

**Cómo verificar:**
- Abre el enlace en navegador
- Debe ser accesible sin login
- Se debe ver código, componentes, etc.

---

### 2️⃣ **Enlace del Sitio Desplegado en Netlify**

**Formato:**
```
https://tuapp.netlify.app
```

**Requisitos:**
- [ ] Sitio en vivo y funcional
- [ ] Cargue los productos
- [ ] Funcione búsqueda y filtros
- [ ] Carrito agregue productos
- [ ] Datos persistan (localStorage)

**Cómo verificar:**
- Abre el enlace en navegador
- Interactúa con la app
- Agrega productos al carrito
- Recarga la página (carrito debe mantener items)

---

### 3️⃣ **Captura de Pantalla del Pull Request Aprobado**

**Qué capturar:**
1. Pantalla completa del PR en GitHub
2. Debe mostrar:
   - ✅ Título del PR
   - ✅ Descripción
   - ✅ Checks pasados (GitHub Actions ✅)
   - ✅ Botón "Merge pull request" disponible
   - ✅ La rama personal (feature/...)

**Cómo obtener:**
```
1. GitHub → Tu repositorio
2. Pestaña "Pull requests"
3. Click en tu PR
4. Tomar screenshot (Ctrl+Shift+S)
5. Guardar como PNG
```

**Archivo:** `PR_APPROVED.png` (o JPG)

---

### 4️⃣ **Descripción del Componente (5 líneas máximo)**

**Formato de texto:**

```
COMPONENTE: [Nombre]
DESCRIPCIÓN: 
- Breve explicación de qué hace
- Funcionalidades principales
- Por qué es importante para el proyecto
- Tecnologías utilizadas
- Mejoras futuras (opcional)

EJEMPLO:
---
COMPONENTE: Carrito de Compras
DESCRIPCIÓN:
- Modal deslizante que gestiona el carrito de compras
- Permite agregar/eliminar productos y ajustar cantidades
- Calcula automáticamente subtotal, impuestos y envío
- Utiliza Context API para state global y localStorage para persistencia
- Base para un checkout más complejo en el futuro
```

**Archivo:** Texto en Moodle o `APORTE_INDIVIDUAL.txt`

---

## 📦 EXTRA - Documento Completo (Opcional pero Recomendado)

Crear archivo `EVIDENCIAS.md` con:

### Sección 1: Descripción General
```markdown
# Mi Aporte al Proyecto

## Componente Desarrollado: [Nombre]

### Descripción
[5 líneas explicando qué hace]

### Archivos Creados/Modificados
- src/components/MiComponente.jsx
- src/components/MiComponente.css
- etc.
```

### Sección 2: Screenshots
```markdown
## Evidencias Visuales

### 1. Proyecto Local (localhost:5173)
[SCREENSHOT: Pantalla del app funcionando]

### 2. Componente en Acción
[SCREENSHOT: Tu componente específico]

### 3. Filtros y Búsqueda
[SCREENSHOT: Demostrando funcionalidades]

### 4. Carrito Funcionando
[SCREENSHOT: Agregando productos, calculando totales]
```

### Sección 3: GitHub
```markdown
## Integración CI/CD

### Pull Request
[SCREENSHOT: PR aprobado con checks ✅]

### GitHub Actions
[SCREENSHOT: Build exitoso]

### Commits
[Listar commits realizados]
```

### Sección 4: Deployment
```markdown
## Deploy en Netlify

### URL en Vivo
https://tuapp.netlify.app

### Estado
[SCREENSHOT: Dashboard de Netlify mostrando deploy exitoso]

### Logs
[Copiar logs del build exitoso]
```

---

## 📤 Cómo Entregar en Moodle

### Opción A: Formulario de Texto + Links

1. Abre la tarea en Moodle
2. Pega en el campo de texto:

```
=== ENTREGABLES TALLER REACT + NETLIFY ===

1. REPOSITORIO GITHUB
https://github.com/tu-usuario/ecommerce-catalog

2. SITIO EN NETLIFY
https://tuapp.netlify.app

3. CAPTURA PR APROBADO
[Adjuntar archivo PR_APPROVED.png]

4. DESCRIPCIÓN DEL COMPONENTE
[Descripción aquí - 5 líneas]

5. EVIDENCIAS ADICIONALES (OPCIONAL)
- EVIDENCIAS.md (archivo adjunto)
- Screenshots del proyecto funcionando
```

3. Adjunta archivos:
   - PR_APPROVED.png
   - EVIDENCIAS.md (si lo hiciste)
   - Otros screenshots

4. Envía

---

### Opción B: PDF Compilado

1. Crea documento Word o Google Docs con:
   - Portada (nombre, fecha, taller)
   - Links a GitHub y Netlify
   - Captura PR aprobado
   - Descripción componente
   - Screenshots funcionando
   - Conclusiones

2. Exporta como PDF

3. Sube a Moodle

---

## ✅ Checklist Pre-Entrega

Antes de enviar, verifica:

- [ ] **GitHub**
  - [ ] Repositorio es público
  - [ ] Tiene al menos 3 commits
  - [ ] Rama main es principal
  - [ ] README visible

- [ ] **Netlify**
  - [ ] App carga sin errores
  - [ ] Productos visibles
  - [ ] Búsqueda funciona
  - [ ] Filtros funcionan
  - [ ] Carrito agrega items
  - [ ] Datos persisten (reload)

- [ ] **GitHub Actions**
  - [ ] Workflow ejecutado
  - [ ] Build exitoso (✅ green)
  - [ ] PR aprobada

- [ ] **Entregables**
  - [ ] Screenshot del PR
  - [ ] Descripción (5 líneas)
  - [ ] Enlaces verifi cados
  - [ ] Formatos correctos

---

## 🎓 Rubrica de Evaluación (100%)

| Criterio | Puntaje | Lo que Buscamos |
|----------|---------|-----------------|
| **Aporte Individual** | 25% | Componente funcional, código limpio |
| **Git & Ramas** | 20% | Commits limpios, rama personal, PR clara |
| **Colaboración** | 20% | PR sin conflictos, merge exitoso |
| **Despliegue** | 20% | Sitio vivo en Netlify, actualizaciones automáticas |
| **Documentación** | 15% | README claro, descripción completa, evidencias |

---

## 💡 Ejemplos de Entregas Exitosas

### Ejemplo 1: Minimalista (RECOMENDADO)

```
=== ENTREGABLES ===

GITHUB: https://github.com/juan123/ecommerce-catalog
NETLIFY: https://juanapp.netlify.app

PR APROBADO: [archivo adjunto]

COMPONENTE: Carrito
DESCRIPCIÓN:
Modal deslizante que gestiona productos agregados.
Permite aumentar/disminuir cantidades.
Calcula automáticamente el total con impuestos.
Utiliza Context API para state global.
Los datos persisten en localStorage entre sesiones.
```

### Ejemplo 2: Completo (CON EXTRA)

```
+ Todo lo anterior +

+ EVIDENCIAS.md (documento completo)
+ 5 screenshots de la app funcionando
+ Logs de GitHub Actions
+ URL de live demo funcional
+ Links a commits principales
```

---

## ⏰ Fecha Límite

**Entregar antes del:** [REVISAR MOODLE]

**Consejos:**
- No dejes para último momento
- Prueba los links antes de enviar
- Verifica que todo funcione
- Lee de nuevo la rúbrica

---

## 🆘 Problemas Comunes

### "El link de Netlify no funciona"
**Solución:** 
- Espera 5 minutos después del primer push
- Verifica que Netlify está conectado a GitHub
- Fuerza nuevo deploy en Netlify

### "Mi PR no aparece"
**Solución:**
- Verificar que hiciste push a GitHub
- Crear PR desde branch personal a main
- Asegúrate de que GitHub Actions pasó

### "No puedo subir captura"
**Solución:**
- Convierte a PDF
- Usa formato JPG o PNG
- Verifica tamaño < 5MB

---

## 📞 Soporte

Para dudas sobre cómo entregar:
- Contacta al instructor en Moodle
- Revisa forum del curso
- Consulta esta guía de nuevo

---

**✅ ¡Listo para entregar!**

Después de completar todos los entregables, habrás demostrado:
- ✅ Dominio de React
- ✅ Git workflow profesional
- ✅ CI/CD automático
- ✅ Deploy en producción
- ✅ Documentación clara

🎉 **¡FELICIDADES POR COMPLETAR EL TALLER!**
