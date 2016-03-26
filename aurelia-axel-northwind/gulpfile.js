var gulp = require("gulp");
var typedoc = require("gulp-typedoc");

gulp.task("typedoc", function () {
    return gulp
		.src(["views/**/*.ts", "typings/**/*.ts"])
		.pipe(typedoc({
		    // TypeScript options (see typescript docs) 
		    module: "amd",
		    target: "es5",
            experimentalDecorators: true,
            includeDeclarations: true,
            readme: "docs.md",

		    // Output options (see typedoc docs) 
		    out: "./docs",
		    json: "docs.json",

		    // TypeDoc options (see typedoc docs) 
		    name: "aurelia-axel-northwind",
		    ignoreCompilerErrors: false,
		    version: true
		}))
    ;
});