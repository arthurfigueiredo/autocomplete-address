# Plugin jQuery para auto completar endereço

> Plugin jQuery para auto completar endereco usando o CEP dos Correios com apenas ~2KB, sem que seja necessário alterar código existente na aplicação, muito util em sistemas de cadastro, ecommerce etc.


## Suporte de Browser


![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 10+ ✔ | Último ✔ | Último ✔ | Último ✔ | Último ✔ |

## Começando

* Clone o projeto: `https://github.com/arthurfigueiredo/autocomplete-address.git`
* Ou baixe [jquery.autocomplete-address.min.js](https://raw.githubusercontent.com/arthurfigueiredo/autocomplete-address/master/dist/jquery.autocomplete-address.min.js) e inclua no seu projeto.

## Usando

Inclua préviamente o jQuery:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Inclua o script do plugin:

```html
<script src="jquery.autocomplete-address.min.js"></script>
```

Chame o plugin, o seletor #cep abaixo é o input onde o usuário vai informar seu CEP (você pode especificar qualquer seletor para iniciar o plugin):

```javascript
$("#cep").autocompleteAddress();
```

```html
<input name="cep" id="cep"/>
```


## Usando data-attributes

```html
<input name="endereco" id="endereco" data-autocomplete-address/>
<input name="bairro" id="bairro" data-autocomplete-neighborhood/>
<input name="cidade" id="cidade" data-autocomplete-city />
<input name="estado" id="estado" data-autocomplete-state />
```

## Usando classe

```html
<input name="endereco" id="endereco" class="autocomplete-address"/>
<input name="bairro" id="bairro" class="autocomplete-neighborhood"/>
<input name="cidade" id="cidade" class="autocomplete-city" />
<input name="estado" id="estado" class="autocomplete-state" />
```


## Usando seletor para cada campo

Abaixo uma lista de opções disponíveis:

```javascript
$("#cep").autocompleteAddress({
	address: "input#meu-endereco",
	neighborhood: "form .fields .bairro",
	city: "form #city",
	state: ".my-state-field",
	publicAPI: "http://cep.correiocontrol.com.br/{{cep}}.json"
});
```

Atributo			| Tipo				| Padrão		| Descrição
---						| ---					| ---				| ---
`address`		| *String*		| `null`		| Use o seletor CSS para buscar o input endereço no DOM
`neighborhood`		| *String*		| `null`		| Use o seletor CSS para buscar o input bairro no DOM
`city`		| *String*		| `null`		| Use o seletor CSS para buscar o input cidade no DOM
`state`		| *String*		| `null`		| Use o seletor CSS para buscar o input estado no DOM
`publicAPI`		| *String*		| `http://cep.correiocontrol .com.br/{{cep}}.json`		| Se você não quiser utilizar a API padrão do plugin, você pode especificar a sua API, o valor {{cep}}, representa o local onde o CEP do usuário vai ser enviado no request para sua API



## Como contribuir

Verifique [CONTRIBUTING.md](https://github.com/arthurfigueiredo/autocomplete-address/blob/master/CONTRIBUTING.md).

## Licença

[MIT License](http://arthurfigueiredo.mit-license.org/) © Arthur Figueiredo
