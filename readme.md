1. Para iniciar el proyecto ejecutar
```bash
npm init --yes
```
2. instalando los modulos
```bash
npm install express mysql express-myconnection morgan ejs

npm init --yes
```
3.
```bash
node src/app.js
```
4. instalando modulo para reiniciar el servidor cada vez q haya un cambio
```bash
npm install nodemon -D
```
5. una vez modificado el package.json ejecutamos 
"scripts": {
    "dev": "nodemon src/app.js"
  },
```bash
npm run dev
```
** si sale un error en consola es por la version d nodejs... instalar la version 12**