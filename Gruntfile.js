module.exports = function(grunt) {

	grunt.initConfig({

		
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author %>\n" +
				" */\n"
		},

		// Lint definitions
		jshint: {
			files: ["src/autocomplete-address.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["src/autocomplete-address.js"],
				dest: "dist/jquery.autocomplete-address.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask("default", ["jshint", "uglify"]);

};