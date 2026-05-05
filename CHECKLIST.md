# 📋 CHECKLIST - Taller React + Vite + CI/CD

## ✅ Fase 1: Proyecto Local (COMPLETADO)

- [x] Crear proyecto React + Vite
- [x] Instalar dependencias (Bootstrap, Lucide)
- [x] Crear componentes principales
- [x] Implementar carrito (Context API)
- [x] Agregar estilos profesionales
- [x] Servidor local funcionando ✨

**Estado:** ✅ LISTO PARA GITHUB

---

## 🔗 Fase 2: GitHub (PRÓXIMO PASO)

### 2.1 - Inicializar repositorio local
- [ ] Abrir terminal en la carpeta del proyecto
- [ ] `git status` (verificar que git está inicializado)
- [ ] `git add .` (agregar todos los archivos)
- [ ] `git commit -m "initial: ecommerce catalog"` (commit inicial)

### 2.2 - Crear repositorio en GitHub
- [ ] Ir a [github.com/new](https://github.com/new)
- [ ] Nombre: `ecommerce-catalog`
- [ ] Descripción: "E-Commerce React + Vite with CI/CD"
- [ ] Público (público)
- [ ] NO marcar "Add README" (ya lo tenemos)
- [ ] Crear repositorio

### 2.3 - Conectar con GitHub
```bash
git remote add origin https://github.com/TU_USUARIO/ecommerce-catalog.git
git branch -M main
git push -u origin main
```

**Resultado:** ✅ Código en GitHub

---

## 🌿 Fase 3: Ramas Colaborativas (PREPARAR)

### 3.1 - Crear rama personal
```bash
git checkout -b feature/mi-aporte
```

### 3.2 - Hacer cambios (ejemplo)
Editar `src/components/ProductCard.jsx` o agregar un nuevo componente

### 3.3 - Commit y Push
```bash
git add .
git commit -m "feat: mejorar ProductCard con reseñas"
git push origin feature/mi-aporte
```

**Resultado:** ✅ Rama personal en GitHub

---

## 🔄 Fase 4: Pull Request (CREAR)

- [ ] Ir a tu repositorio en GitHub
- [ ] Ver notificación "Compare & pull request"
- [ ] Título: "feat: mejorar ProductCard"
- [ ] Descripción: Explicar cambios (5 líneas)
- [ ] Crear PR

**Resultado:** ✅ PR visible

---

## 📊 Fase 5: GitHub Actions (VERIFICAR)

- [ ] Ir a **Actions** en tu repositorio
- [ ] Ver workflow corriendo
- [ ] Esperar que termine (verde ✅)
- [ ] Verificar logs

**Qué debe suceder:**
- ✅ npm install
- ✅ npm run lint
- ✅ npm run build
- ✅ Deploy preview en Netlify

---

## 🌐 Fase 6: Netlify (CONFIGURAR)

### 6.1 - Conectar GitHub
- [ ] Ir a [netlify.com](https://netlify.com)
- [ ] Click "New site from Git"
- [ ] Seleccionar GitHub
- [ ] Autorizar Netlify
- [ ] Seleccionar `ecommerce-catalog`

### 6.2 - Configurar build
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Click "Deploy"

**Esperar:** ~3 minutos

**Resultado:** ✅ URL en vivo: `https://tuapp.netlify.app`

---

## ✨ Fase 7: Primera Fusión (MERGE)

### 7.1 - En GitHub
- [ ] Abrir tu PR
- [ ] Esperar checks ✅
- [ ] Click "Merge pull request"

### 7.2 - Automático
- GitHub Actions ejecuta workflow
- Netlify deploy automático
- ✅ Cambios en vivo

**Resultado:** ✅ Deploy automático funciona

---

## 📸 Fase 8: Documentar Evidencias

### Tomar capturas de:
- [ ] Pantalla local (localhost:5173)
- [ ] Repositorio GitHub
- [ ] Pull Request aprobado
- [ ] Build exitoso (Actions)
- [ ] Sitio en Netlify
- [ ] URL en vivo

### Crear documento con:
- [ ] Enlace GitHub: https://github.com/tu-usuario/ecommerce-catalog
- [ ] Enlace Netlify: https://tuapp.netlify.app
- [ ] Screenshot PR
- [ ] Descripción de tu aporte (5 líneas)

---

## 🎯 Resumen Final

```
✅ Proyecto React + Vite local    → Completado
✅ Código en GitHub              → Pending
✅ Rama colaborativa             → Pending
✅ Pull Request creado           → Pending
✅ CI/CD workflow funcional      → Pending
✅ Netlify deployment            → Pending
✅ URL en vivo                   → Pending
✅ Documentación entregada       → Pending
```

---

## 🚀 Comandos Rápidos

```bash
# Ver estado
git status

# Ver ramas
git branch -a

# Ver historial
git log --oneline

# Cambiar rama
git checkout nombre-rama

# Crear y cambiar rama
git checkout -b feature/nombre

# Push cambios
git push origin nombre-rama

# Ver logs de GitHub Actions
# → Ve a Actions en GitHub
```

---

## 🆘 Problemas Comunes

### "fatal: not a git repository"
```bash
git init
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

### "npm run build" falla
```bash
rm -rf node_modules
npm install
npm run build
```

### Netlify no despliega
1. Verifica build command: `npm run build`
2. Verifica publish directory: `dist`
3. Fuerza rebuild: Netlify → Deploys → Trigger deploy

---

## ✅ Entregables (Checklist Final)

En Moodle entregar:

- [ ] **Enlace GitHub:**  
  https://github.com/TU_USUARIO/ecommerce-catalog

- [ ] **Enlace Netlify:**  
  https://tuapp.netlify.app

- [ ] **Captura de PR aprobado:**  
  (screenshot del PR en GitHub)

- [ ] **Descripción del componente:**  
  (5 líneas máximo describiendo tu aporte)

- [ ] **EXTRA - Documento con evidencias:**
  - Screenshots del proyecto
  - Build exitoso
  - Deploy en vivo
  - Flujo CI/CD

---

**🎉 ¡Completando este checklist terminas el taller!**

Tiempo estimado: 1-2 horas

¿Necesitas ayuda? Contacta al instructor 👨‍🏫
