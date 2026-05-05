# 🚀 Guía de Despliegue e Integración Continua

## 📋 Índice
1. [Requisitos Previos](#requisitos-previos)
2. [Configuración de GitHub](#configuración-de-github)
3. [Configuración de Netlify](#configuración-de-netlify)
4. [CI/CD Workflow](#cicd-workflow)
5. [Solución de Problemas](#solución-de-problemas)

---

## ✅ Requisitos Previos

- [ ] Cuenta de GitHub (gratuita)
- [ ] Cuenta de Netlify (gratuita, con GitHub)
- [ ] Node.js 18+ y npm instalados
- [ ] Git configurado localmente

---

## 🔧 Configuración de GitHub

### Paso 1: Crear repositorio público

```bash
# Inicializar git (si no está)
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "initial commit: ecommerce-catalog"

# Crear repo en GitHub (web)
# y luego:
git remote add origin https://github.com/TU_USUARIO/ecommerce-catalog.git
git branch -M main
git push -u origin main
```

### Paso 2: Proteger rama main

En GitHub Settings:
1. Ve a **Settings → Branches**
2. Agrega regla para `main`:
   - ✅ Require status checks before merging
   - ✅ Require pull request reviews
   - ✅ Dismiss stale reviews
   - ✅ Require branches to be up to date

### Paso 3: Crear rama de desarrollo

```bash
git checkout -b develop
git push -u origin develop
```

---

## 🔗 Configuración de Netlify

### Paso 1: Conectar repositorio

1. Ir a [netlify.com](https://netlify.com)
2. Click en **"Connect a new site from Git"**
3. Seleccionar **GitHub**
4. Autorizar Netlify en GitHub
5. Seleccionar repositorio `ecommerce-catalog`

### Paso 2: Configurar build settings

```
Build command: npm run build
Publish directory: dist
```

### Paso 3: Configurar variables de entorno (si las hay)

Settings → Build & deploy → Environment

### Paso 4: Habilitar deploy preview

Settings → Build & deploy → Deploy contexts:
- ✅ Production branch: `main`
- ✅ Deploy previews: enabled
- ✅ Branch deploys: enabled

---

## 🔄 CI/CD Workflow

### Flujo de Desarrollo Colaborativo

```
1. Crear rama personal
   git checkout -b feature/mi-componente

2. Hacer cambios y commits
   git add .
   git commit -m "feat: agregar componente"

3. Push a GitHub
   git push origin feature/mi-componente

4. Crear Pull Request (PR)
   - GitHub Actions ejecuta tests
   - Netlify crea preview deployment
   - Revisar cambios en URL de preview

5. Merge a main
   - GitHub Actions: build + lint
   - Netlify: deploy automático a producción

6. Deploy en vivo
   - URL final activa: https://tuapp.netlify.app
```

### Qué sucede en cada paso

**Pull Request:**
```yaml
✓ npm install
✓ npm run lint     (validar código)
✓ npm run build    (compilar)
✓ Deploy preview   (URL temporal para revisar)
```

**Merge a main:**
```yaml
✓ npm install
✓ npm run lint
✓ npm run build
✓ Deploy producción (URL principal)
```

---

## 🧪 Testear Localmente

### Build local
```bash
npm run build
npm run preview
```

Abre `http://localhost:4173` para previsualizar la build de producción.

### Verificar que todo está OK
```bash
# Lint
npm run lint

# Build
npm run build

# Tamaño
du -sh dist/
```

---

## 📊 Monitorear Despliegues

### En GitHub
1. Ve a tu repositorio
2. Click en **"Actions"**
3. Verifica el estado del workflow
4. Click en el workflow para ver detalles

### En Netlify
1. Ve a [app.netlify.com](https://app.netlify.com)
2. Selecciona tu sitio
3. Ve a **"Deploys"** para ver historial
4. Haz click en un deploy para ver logs

---

## 🐛 Solución de Problemas

### Build failing

**Error:** `npm run build` falla
**Solución:**
```bash
# Limpiar
rm -rf node_modules package-lock.json

# Reinstalar
npm install

# Probar build
npm run build
```

---

### Deploy no actualiza

**Error:** Cambios no reflejados en Netlify
**Solución:**
1. Verifica que el push fue a `main`
2. Revisa GitHub Actions status
3. Fuerza rebuild en Netlify:
   - Netlify → Deploys → Trigger deploy

---

### PR sin preview

**Error:** No aparece URL de preview
**Solución:**
1. Autoriza a Netlify en GitHub
2. Reconecta el sitio
3. Re-abre el PR

---

## 📈 Métricas de Performance

Netlify proporciona:
- ✅ Lighthouse scores
- ✅ Bundle analysis
- ✅ Deploy time
- ✅ Traffic analytics

Accede en: Netlify → Sitio → Analytics

---

## 🎓 Conceptos Clave

### Git Workflow
- **main:** Rama de producción (siempre estable)
- **develop:** Rama de desarrollo
- **feature/*:** Ramas personales para features

### CI = Integración Continua
- Ejecuta tests automáticamente
- Valida código (lint)
- Detecta errores temprano

### CD = Despliegue Continuo
- Deploy automático a producción
- Sin intervención manual
- Rápido y seguro

---

## 🚀 URLs Importantes

| Recurso | URL |
|---------|-----|
| Repositorio | https://github.com/TU_USUARIO/ecommerce-catalog |
| GitHub Actions | https://github.com/TU_USUARIO/ecommerce-catalog/actions |
| Sitio Netlify | https://tuapp.netlify.app |
| Panel Netlify | https://app.netlify.com |

---

## 📝 Entregables Finales

```
✅ Enlace repositorio GitHub
✅ Enlace sitio en Netlify
✅ Screenshot de PR aprobado
✅ Descripción del componente (5 líneas)
✅ README.md con instrucciones
✅ Workflow GitHub Actions funcional
```

---

## 💡 Tips & Tricks

1. **Alias en Git** para comandos frecuentes:
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

2. **Husky + Pre-commit hooks** para validar antes de push:
```bash
npm install husky -D
npx husky install
```

3. **Vercel como alternativa a Netlify** (muy similar)

---

**🎉 ¡Ya estás listo para CI/CD!**

Para preguntas: Consulta la documentación oficial:
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Netlify Docs](https://docs.netlify.com)
- [Git & GitHub Guide](https://git-scm.com/doc)
