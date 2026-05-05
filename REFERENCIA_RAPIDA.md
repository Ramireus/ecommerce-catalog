# ⚡ REFERENCIA RÁPIDA - Comandos y URLs

## 🚀 COMANDOS PRINCIPALES

```bash
# Iniciar servidor local
npm run dev
→ http://localhost:5173

# Build para producción
npm run build
→ Genera carpeta 'dist'

# Previsualizar build
npm run preview
→ http://localhost:4173

# Linting
npm run lint

# Git - Crear rama
git checkout -b feature/mi-rama

# Git - Push
git push origin feature/mi-rama

# Git - Ver estado
git status

# Git - Ver ramas
git branch -a
```

---

## 🔗 ENLACES IMPORTANTES

```
GitHub New Repo:     https://github.com/new
Netlify:            https://netlify.com
React Docs:         https://react.dev
Vite Docs:          https://vitejs.dev
Bootstrap:          https://getbootstrap.com
Lucide Icons:       https://lucide.dev
```

---

## 📂 ARCHIVOS CLAVE

```
ecommerce-catalog/
├── src/components/      ← Edita aquí para mejorar UI
├── src/data/products.js ← Aquí están los productos
├── src/context/         ← State management
├── .github/workflows/   ← CI/CD automático
├── netlify.toml         ← Config Netlify
├── package.json         ← Dependencias
└── *.md                 ← Documentación
```

---

## 📋 CHECKLIST RÁPIDO

```
[ ] Crear repo GitHub
[ ] Push del código (git push -u origin main)
[ ] Crear rama personal (git checkout -b feature/...)
[ ] Crear Pull Request
[ ] Conectar GitHub con Netlify
[ ] Esperar deploy exitoso
[ ] Recopilar entregables
[ ] Entregar en Moodle
```

---

## 💻 VS CODE SHORTCUTS ÚTILES

```
Ctrl+`          → Abrir terminal
Ctrl+F          → Buscar en archivo
Ctrl+H          → Reemplazar
Ctrl+Shift+P    → Command palette
Alt+Shift+F     → Formatear código
F2              → Renombrar símbolo
```

---

## 🔄 GIT QUICK REFERENCE

```
git init                      # Inicializar repo
git add .                     # Agregar archivos
git commit -m "mensaje"       # Hacer commit
git push                      # Enviar a GitHub
git pull                      # Traer cambios
git branch -b nombre          # Nueva rama
git checkout nombre           # Cambiar rama
git merge nombre              # Fusionar rama
git log --oneline             # Ver historial
```

---

## ✅ VERIFICACIÓN ANTES DE ENTREGAR

```
[ ] npm run build funciona sin errores
[ ] localhost:5173 abre correctamente
[ ] Carrito guarda datos al recargar
[ ] Búsqueda funciona
[ ] Filtros funcionan
[ ] Sitio se ve bien en móvil
[ ] Links de GitHub y Netlify funcionan
[ ] PR está aprobada
```

---

## 🎯 ENTREGABLES MÍNIMOS

```
1. https://github.com/TU_USUARIO/ecommerce-catalog
2. https://tuapp.netlify.app
3. Screenshot PR aprobado (PR_APPROVED.png)
4. Descripción (5 líneas máximo)
```

---

## 🆘 ERRORES COMUNES Y SOLUCIONES

```
"Module not found"
→ npm install

"npm run dev not found"
→ Asegúrate de estar en carpeta correcta (ecommerce-catalog)

"Build fails"
→ npm run lint
→ Fix errors
→ npm run build

"Netlify deploy pending"
→ Verifica que GitHub esté conectado
→ Recarga la página

"Carrito vacío después de recargar"
→ Verifica localStorage en DevTools (F12)
```

---

## 📊 ESTRUCTURA DE CARPETAS (RECORDATORIO)

```
src/
├── components/          ← Componentes React (6)
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── Filters.jsx
│   ├── Cart.jsx
│   └── Footer.jsx
├── context/
│   └── CartContext.jsx  ← State management
├── data/
│   └── products.js      ← 12 productos
├── App.jsx              ← Componente raíz
├── main.jsx             ← Entry point
└── index.css            ← Estilos globales
```

---

## 🎨 COLORES PRINCIPALES

```
Primario: #667eea (azul)
Secundario: #764ba2 (púrpura)
Éxito: #28a745 (verde)
Error: #ff6b6b (rojo)
Fondo: #f5f7fa (gris claro)
Texto: #333 (oscuro)
```

---

## 📱 BREAKPOINTS

```
Mobile: < 768px
Tablet: 768px - 1023px
Desktop: ≥ 1024px
```

---

## 🔐 SECRETS PARA NETLIFY (SI NECESITAS)

```
NETLIFY_AUTH_TOKEN  ← Get from Netlify
NETLIFY_SITE_ID     ← Get from Netlify
GITHUB_TOKEN        ← Get from GitHub
```

---

## 📈 MÉTRICAS ESPERADAS

```
Bundle size: ~45KB gzipped
Build time: < 5 segundos
Load time: < 2 segundos
Products: 12
Components: 6
CSS files: 8
```

---

## 🎓 CONCEPTOS CLAVE

```
Props          → Datos de componente a componente
State          → Datos mutables (useState)
Context        → Estado global (useContext)
Hooks          → useState, useContext, useMemo, etc.
Lifecycle      → useEffect (no usado en este proyecto)
localStorage   → Persistencia de datos en navegador
CI/CD          → Automatización de build y deploy
Git Workflow   → Ramas, commits, PRs, merges
```

---

## 🚀 DEPLOYMENT FLOW

```
1. Local Development
   npm run dev → localhost:5173

2. Version Control
   git add . → git commit → git push

3. CI/CD Pipeline
   GitHub Actions → npm install → npm run lint → npm run build

4. Deploy
   Netlify → Build → Deploy → Live URL
```

---

## 📞 NÚMEROS DE REFERENCIA

```
React version:          19.2.5
Vite version:          8.0.10
Bootstrap version:     5.3.8
Node.js LTS:          18 o 20
npm version:          8+
```

---

## 🎁 BONUS TIPS

```
1. Usa Prettier para formatear código
   npm install -D prettier

2. Agrega Husky para pre-commit hooks
   npm install husky -D

3. Usa GitHub Copilot para ayuda
   Extensión en VS Code

4. Netlify tiene CLI
   npm install netlify-cli -g

5. Usa React DevTools
   Chrome extension
```

---

## 📍 RUTAS DEL NAVEGADOR

```
/                 → App principal
/api/*            → Potencial para backend

(Actualmente todo es SPA - Single Page App)
```

---

## 🔍 DEBUGGING TOOLS

```
F12              → DevTools
Console          → Ver errores
Network          → Ver requests
Application      → Ver localStorage
React DevTools   → Extensión Chrome
```

---

## 🌍 RECURSOS GLOBALES

```
StackOverflow     → Preguntas técnicas
GitHub Docs       → Git y GitHub
MDN Docs          → JavaScript y CSS
Codepen           → Ejemplos CSS
Dev.to            → Blog técnico
```

---

## ⏰ TIMELINE ESTIMADO

```
Desarrollo local:     30-45 minutos (HECHO ✓)
GitHub setup:         5-10 minutos
PR y verificación:    10-15 minutos
Netlify deploy:       5-10 minutos
Documentación:        5-10 minutos
Total:                ~1-2 horas
```

---

## ✨ PUNTOS FINALES

```
✓ Todo está listo
✓ Solo falta GitHub y Netlify
✓ Documentación completa
✓ Code is production-ready
✓ CI/CD configurado
✓ Puedes empezar cuando quieras
```

---

**¡Guardaste este archivo en favoritos? Es tu referencia rápida 📍**

---

╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   👉 LEE:                                                          ║
║   1. PROYECTO_INICIO_RAPIDO.md (primero este)                    ║
║   2. CHECKLIST.md (pasos exactos)                                 ║
║   3. ENTREGABLES.md (cómo entregar)                               ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
