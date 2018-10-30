# Hacktoberfest São Paulo 2018

> Feito para ajudar pessoas a contribuirem com open source

## Stack

- Automatizador de tarefas: [Gulp](http://gulpjs.com)
- Pré-processador CSS: [Stylus](http://stylus-lang.com/)

## Rodando o projeto localmente

**1 -** Prepare o ambiente:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone o projeto e installe as dependêcias:

```sh
$ git clone https://github.com/hacktoberfest-sp/hacktoberfest-sp.github.io.git
$ cd hacktoberfest-sp.github.io
$ npm install
```

**3 -** Rode o servidor estático com livereload:

```sh
$ gulp server
```

> Obs.: Todas as alterações devem ser feitas dentro da pasta ```src```

## Tarefas automatizadas

- `$ gulp build`: Compila todos os arquivos.
- `$ gulp server`: Escuta os arquivos buildados e inicia um servidor estático.
- `$ gulp deploy`: Faz um deploy para a branch master (github pages).

## Contribuição

Veja no [guia](https://github.com/hacktoberfest-sp/hacktoberfest-sp.github.io/issues) os próximos passos do projeto ;)
<br>
Quer contrinuir? [Siga essas recomendações](https://github.com/hacktoberfest-sp/hacktoberfest-sp.github.io/blob/development/CONTRIBUTING.md).

## Licença

[Licença MIT](https://github.com/hacktoberfest-sp/hacktoberfest-sp.github.io/blob/development/LICENSE.md) © [Larissa Abreu](http://larissaabreu.github.io/)
