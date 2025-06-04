# <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg id="Capa_1" style="enable-background:new 0 0 58 58;" version="1.1" width="25" height="25" viewBox="0 0 58 58" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M48,19.929v21.141C48,43.793,45.793,46,43.071,46H22L12,57V46H4.929C2.207,46,0,43.793,0,41.071   l0-21.141C0,17.207,2.207,15,4.929,15h38.141C45.793,15,48,17.207,48,19.929z" style="fill:#10b981;"/><path d="M53.071,1H14.929C12.207,1,10,3.207,10,5.93V15h33.071C45.793,15,48,17.207,48,19.93V32h5.071   C55.793,32,58,29.793,58,27.07V5.93C58,3.207,55.793,1,53.071,1z" style="fill:#047857;"/><path d="M25,26.015H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h14c0.553,0,1,0.448,1,1S25.553,26.015,25,26.015z" style="fill:#FFFFFF;"/><path d="M38,32.015H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h27c0.553,0,1,0.448,1,1S38.553,32.015,38,32.015z" style="fill:#FFFFFF;"/><path d="M38,38.015H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h27c0.553,0,1,0.448,1,1S38.553,38.015,38,38.015z" style="fill:#FFFFFF;"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> Realtime Chat com Supabase

### Sobre

Este projeto foi desenvolvido com o objetivo de criar um chat em tempo real, explorando a integração com o Supabase como Backend as a Service (BaaS). A ideia principal foi aprender a conectar uma aplicação a um BaaS e implementar funcionalidades de comunicação em tempo real.
<br/>

### 📌 Conteúdo

* [Sobre](#sobre)
* [Status](#status)
* [Características](#características)
* [Requisitos](#requisitos)
* [Tecnologias](#tecnologias)
* [Autor](#autor)
* [Licença](#licença)
<br/>

### Status

Projeto em construção 🛠️
<br/>

### Características

- [x] Página **Criação de usuário**
- [x] Página **Chat**
<br/>

### Requisitos

1. Para rodar a aplicação é necessário a instalação do [Node.js](https://nodejs.org/).

2. O próximo passo é clonar este repositório para algum local do computador
por meio do terminal ou cmd:

```bash
    $ git clone https://github.com/MatheusBibiano/Chat.git
```

3. Feito isso, navegue para dentro da pasta do projeto e instale as dependências:

* Linux & Windows
```bash
    $ npm install
```

4. Após concluir a instalação, crie, na raiz do projeto, um arquivo **.env** onde ficarão armazenadas as variáveis de ambiente e adicione os valores às chaves de acordo com seu projeto supabase:

Arquivo .env
```js
    REACT_APP_SUPABASE_URL=""
    REACT_APP_SUPABASE_ANON_KEY=""
```

5. Na plataforma da Supabase, crie duas tabelas com os seguntes atributos:
```bash
    user -> id(int8), name(text), picSource(text), logged(boolean), uuid(uuid);

    message -> id(int8), content(text), time(time), uuid(uuid);
```

4. Por fim, execute a aplicação:

* Linux & Windows
```bash
    $ npm start
```
<br/>

### Tecnologias

As seguintes tecnologias foram utilizadas na construção do projeto:

- [Node.js](https://nodejs.org/)
- [HTML5](https://developer.mozilla.org/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/docs/Web/JavaScript)
- [ReactJS](https://pt-br.reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
<br/>

### Autor

| Matheus Bibiano                                       |
|-------------------------------------------------------|
| <img src="https://github.com/MatheusBibiano.png" width="150" height="150">|
| [<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/matheus-bibiano-alves)|
<br/>

### Licença

[MIT](https://choosealicense.com/licenses/mit/)

