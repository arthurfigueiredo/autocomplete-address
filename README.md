# jQuery autocomplete address

> A jQuery plugin to autocomplete address using the correio's CEP, very useful in registrations, ecommerces, systems etc.

## Browser Support

We do care about it.

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Getting started

Three quick start options are available:

* Clone the repo: `https://github.com/arthurfigueiredo/autocomplete-address.git`

## Usage

Include jQuery:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
```

Include plugin's JS:

```html
<script src="jquery.autocomplete-address.min.js"></script>
```

Call the plugin, the #cep selector is the input where the user will enter their CEP (you can use any selector to start the plugin)

```javascript
$("#cep").autocompleteAdress();
```

```html
<input name="cep" id="cep"/>
```


## Using data-attributes

```html
<input name="endereco" id="endereco" data-autocomplete-address/>
<input name="bairro" id="bairro" data-autocomplete-neighborhood/>
<input name="cidade" id="cidade" data-autocomplete-city />
<input name="estado" id="estado" data-autocomplete-state />
```

## Using class

```html
<input name="endereco" id="endereco" class="autocomplete-address"/>
<input name="bairro" id="bairro" class="autocomplete-neighborhood"/>
<input name="cidade" id="cidade" class="autocomplete-city" />
<input name="estado" id="estado" class="autocomplete-state" />
```


## Options

Here's a list of available settings.

```javascript
$("#cep").autocompleteAdress({
	address: "input#meu-endereco",
	neighborhood: "form .fields .bairro",
	city: "form #city",
	state: ".my-state-field",
	publicAPI: "http://cep.correiocontrol.com.br/{{cep}}.json"
});
```

Attribute			| Type				| Default		| Description
---						| ---					| ---				| ---
`address`		| *String*		| `null`		| Use the selector that match with the address field.
`neighborhood`		| *String*		| `null`		| Use the selector that match with the address field.
`city`		| *String*		| `null`		| Use the selector that match with the address field.
`state`		| *String*		| `null`		| Use the selector that match with the address field.
`publicAPI`		| *String*		| `null`		| If you do not want to use the default plugin's api, you can specify your api, the value {{cep}}, represents the location where the CEP will be included in the request to the api


## Showcase

**Have you used this plugin in your project?**

Let me know! Send a [tweet](https://twitter.com/ArthurWebdev) or [pull request](https://github.com/arthurfigueiredo/autocomplete-address/pull/new/master) and I'll add it here :)


## Contributing

Check [CONTRIBUTING.md](https://github.com/arthurfigueiredo/autocomplete-address/blob/master/CONTRIBUTING.md).

## License

[MIT License](http://arthurfigueiredo.mit-license.org/) © Arthur Figueiredo