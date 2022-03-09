; (function ($, window, document, undefined) {
	var pluginName = "autocompleteAddress",
		defaults = {
			publicAPI: "https://viacep.com.br/ws/{{cep}}/json/",
			address: "",
			neighborhood: "",
			city: "",
			state: "",
			setReadonly: true,
		};

	// Contrutor do plugin
	function Plugin(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function () {
			var self = this;
			this.$cep = $(this.element);
			this.$address = this.getData("autocomplete-address");
			this.$neighborhood = this.getData("autocomplete-neighborhood");
			this.$city = this.getData("autocomplete-city");
			this.$state = this.getData("autocomplete-state");
			this.currentCep = this.$cep.val();
			if (this.$cep.mask) {
				this.$cep.mask("99999-999");
			}
			this.$cep.on('blur change keyup', function () {
				var val = $(this).val();
				// Remove caracteres que o usuario normalmente digita no cep como - e .
				val = val.replace(/\-|\./g, "");
				if (val && self.currentCep !== val && val.length === 8) {
					self.currentCep = val;
					self.sendRequest();
				}
			});
		},
		getData: function (data) {
			// sistema fallback para selecionar os campos

			// verifica se o campo foi especificado utilizando seletor na inicializacao
			var result = $(this.settings[data.replace("autocomplete-", "")]);
			if (result.length === 0) {
				// verifica se o input foi especificado utilizando classes
				result = $("." + data);
				if (result.length === 0) {
					// verifica se foi especificado por data-attribute
					result = $("[data-" + data + "]");
				}
			}
			return result;
		},
		// envia o request ajax para a API
		sendRequest: function () {
			var self = this,
				cep = this.currentCep.replace('-', '');
			$.ajax({
				url: self.settings.publicAPI.replace('{{cep}}', cep),
				type: "GET",
				dataType: "json",
				beforeSend: function () {
					self.$cep.addClass('loading');
				},
				success: function (response) {
					self.bindValues(response);
				},
				complete: function () {
					self.$cep.removeClass('loading');
				}
			});
		},
		// Envia a resposta para os respectivos campos
		bindValues: function (values) {
			this.$address.val(values.logradouro);
			this.$neighborhood.val(values.bairro);

			if (this.$state.is('select')) {
				this.$state.children('option:contains("' + values.uf + '")').prop('selected', true);
				// integração com nice-select
				if (this.$state.next().hasClass('nice-select'))
					this.$state.niceSelect('update');
			} else {
				this.$state.val(values.uf);
			}
			this.$state.change();

			if (this.$city.is('select')) {
				this.$city.children('option:contains("' + values.localidade + '")').prop('selected', true);
				this.$city.data('select', values.localidade);
			} else {
				this.$city.val(values.localidade);
			}
			this.$city.change();

			if (this.settings.setReadonly)
				this.checkStatusField([this.$address, this.$neighborhood, this.$city, this.$state]);
		},
		checkStatusField: function (fields) {
			var i = fields.length,
				$field,
				val;
			while (i--) {
				$field = $(fields[i]);
				val = $field.val();
				if (fields[i].length > 0 && val && val.match(/[a-z]/i))
					$field.addClass('disabled').prop('readonly', true);
				else
					$field.removeClass('disabled').prop('readonly', false);
			}
		},
	});

	$.fn[pluginName] = function (options) {
		this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			}
		});
		return this;
	};
})(jQuery, window, document);
