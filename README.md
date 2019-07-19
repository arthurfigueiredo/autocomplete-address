# Plugin jQuery para auto completar endereço

> Plugin jQuery para auto completar endereco usando o CEP dos Correios com apenas ~2KB, sem que seja necessário alterar código existente na aplicação, muito util em sistemas de cadastro, ecommerce etc.

## Suporte de Browser

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Último ✔ | Último ✔ | Último ✔ | Último ✔ |

## Começando

* Instalando pelo [npm](https://www.npmjs.com/):<br>
	`npm i github:arthurfigueiredo/autocomplete-address -S`

* Clonando via [Git](https://git-scm.com/):<br>
	`git clone git@github.com:arthurfigueiredo/autocomplete-address.git` (SSH)<br>
	`git clone https://github.com/arthurfigueiredo/autocomplete-address.git` (HTTPS)

* Ou baixe diretamente o arquivo [dist/jquery.autocomplete-address.min.js](https://raw.githubusercontent.com/arthurfigueiredo/autocomplete-address/master/dist/jquery.autocomplete-address.min.js) e inclua no seu projeto.

* Baixar as dependências:<br>
	`npm install` <br>

* Rodar tasks Grunt:<br>
	`grunt` <br>


## Usando

1. Inclua préviamente o [jQuery](http://jquery.com/):

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

2. Inclua o script do plugin:

```html
<script src="jquery.autocomplete-address.min.js"></script>
```

3. Chame o plugin no JavaScript - o seletor `#cep` pega o input onde o usuário vai informar o CEP (você pode especificar qualquer seletor):

```javascript
$('#cep').autocompleteAddress();
```

<abbr title="Exemplo">Ex.</abbr>:

```html
<input id="cep" name="cep">
```

## Usando via data-attributes

```html
<input name="endereco" id="endereco" data-autocomplete-address>
<input name="bairro" id="bairro" data-autocomplete-neighborhood>
<input name="cidade" id="cidade" data-autocomplete-city>
<input name="estado" id="estado" data-autocomplete-state>
```

## Usando por classes

```html
<input name="endereco" id="endereco" class="autocomplete-address">
<input name="bairro" id="bairro" class="autocomplete-neighborhood">
<input name="cidade" id="cidade" class="autocomplete-city">
<input name="estado" id="estado" class="autocomplete-state">
```

## Usando por seletores específicos para cada campo

```javascript
$('#cep').autocompleteAddress({
  city: 'form #city',
  address: 'input#meu-endereco',
  neighborhood: 'form .fields .bairro',
  state: '.my-state-field',
  publicAPI: 'https://viacep.com.br/ws/{{cep}}/json/',
});
```

## Configurações

Abaixo a lista de opções disponíveis:

Atributo			| Tipo				| Padrão		| Descrição
---						| ---					| ---				| ---
`address`		| *String*		| `null`		| Use o seletor CSS para buscar o input endereço no DOM.
`neighborhood`		| *String*		| `null`		| Use o seletor CSS para buscar o input bairro no DOM.
`city`		| *String*		| `null`		| Use o seletor CSS para buscar o input cidade no DOM.
`state`		| *String*		| `null`		| Use o seletor CSS para buscar o input estado no DOM.
`publicAPI`		| *String*		| `https://viacep.com.br/ws/{{cep}}/json/`		| Se você não quiser utilizar a API padrão do plugin, você pode especificar a sua API, o valor {{cep}}, representa o local onde o CEP do usuário vai ser enviado no request para sua API.
`setReadonly`		| *Boolean*		| `true`		| Bloqueia a edição dos campos de texto autocompletados - se quiser permitir edição, basta passar `false` na inicialização do plugin.
`beforeAPICall`		| *Function*		| `null`		| Hook para notificar quando a solicitação da API estiver sendo enviado.
`beforeBindValues`		| *Function*		| `null`		| Hook para notificar quando os campos serão vinculados. O auto complete pode ser parado se a função retornar `false`
`done`		| *Function*		| `null`		| Hook para notificar quando a solicitação da API terminar.

## Como contribuir

Verifique [CONTRIBUTING.md](https://github.com/arthurfigueiredo/autocomplete-address/blob/master/CONTRIBUTING.md).

## Licença

[MIT License](http://arthurfigueiredo.mit-license.org/) © Arthur Figueiredo
