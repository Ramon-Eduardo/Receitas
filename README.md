# Receitas

Este projeto é um site de receitas desenvolvido com HTML, CSS e JavaScript, criado para praticar e demonstrar conhecimentos em desenvolvimento web front-end.

<img src="https://github.com/user-attachments/assets/cbf8fd5c-0bbe-4078-8c45-3c97868c05d9" alt="Receita 3" width="500px">

[FIGMA](https://www.figma.com/design/xFS8VNZxnHjS83ekaDlTTx/Food-recipes-website-UI---Del%C3%ADcias-%C3%A0-Mesa-(Community)?node-id=0-1&node-type=canvas&t=oTAUZXbEa8XLF2AG-0) 

## Funcionalidades

- **Página inicial com destaque para receitas populares**
- **Páginas dedicadas para cada receita:** Waffle, Panqueca, Chocolate Quente, entre outras
- **Barra de busca interativa** para facilitar a navegação entre as receitas
- **Design responsivo** para diferentes tamanhos de tela
- **Organização modular de arquivos CSS** para cada página/receita

## Estrutura de Pastas

```
Receitas/
├── src/
│   ├── index.html
│   ├── index.js
│   ├── styles.css
│   ├── assets/
│   │   └── images/
│   ├── CSS/
│   │   ├── chocolatequente.css
│   │   ├── panqueca.css
│   │   ├── receitas.css
│   │   ├── sobrenos.css
│   │   └── waffle.css
│   └── pages/
│       ├── chocolatequente.html
│       ├── panqueca.html
│       ├── receitas.html
│       ├── sobrenos.html
│       ├── waffle.html
│       └── javascript/
│           └── searchbar.js
├── package.json
├── bs-config.js
├── README.md
└── .gitignore
```

## Como executar

1. Instale as dependências (se necessário):
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
   ou, se estiver usando o [browser-sync](https://browsersync.io/):
   ```bash
   npx browser-sync start --server 'src' --files 'src'
   ```
3. Abra o navegador e acesse o endereço indicado no terminal (geralmente [http://localhost:3000](http://localhost:3000) ou [http://localhost:3001](http://localhost:3001)).

## Observações

- As imagens das receitas estão organizadas na pasta `assets/images`.
- Cada página de receita possui seu próprio arquivo CSS para facilitar a manutenção e personalização.
- O projeto é totalmente estático e não utiliza backend.

---

Desenvolvido para fins educacionais e de prática em desenvolvimento web front-end.
