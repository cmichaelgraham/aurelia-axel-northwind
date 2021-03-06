# aurelia-axel-northwind

As a user, I want a walk through of creating a web app from the `aurelia-axel` starter kit, based of a familiar database (Northwind).  

## Setup Your Environment

### SQL Server

1. [Install SQL Server (Express)](https://www.microsoft.com/en-us/server-cloud/products/sql-server-editions/sql-server-express.aspx)
2. [Download Northwind Database Backup](https://northwinddatabase.codeplex.com/)
3. Restore Northwind Database
    4. Copy the downloaded Northwind backup to the SQL Server `Backup` folder (something like `C:\Program Files\Microsoft SQL Server\MSSQL13.SQLEXPRESS\MSSQL\Backup`)
    5. Restore the backup (from SQL Server Management Studio, right click databases --> restore)
    
        ![image](https://cloud.githubusercontent.com/assets/10272832/14064851/bdc05b76-f3cf-11e5-9e41-b8b3c323f6e9.png)

Now you should have the Northwind database available.

![image](https://cloud.githubusercontent.com/assets/10272832/13908165/ec072648-eec2-11e5-928c-1d054a1d7810.png)

![image](https://cloud.githubusercontent.com/assets/10272832/13908145/7e3df006-eec2-11e5-8ee6-170256b2b686.png)

### Prepare Visual Studio

If you don't alerady have it, grab yourself a copy of [Visual Studio - (free) Community Edition](https://www.visualstudio.com/products/visual-studio-community-vs)

#### Install Task Runner Explorer

We are going to be using `gulp` for various build steps (which will be `tasks` in a `gulpfile.js`).  It is very convenient to be able to run these tasks from within Visual Studio.

Luckily, the brilliant [Mads Kristensen](http://madskristensen.net/) is on the case and has provided (a separately installed) [Task Runner Explorer](https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708) which can display and run `gulp` tasks from within Visual Studio.

You'll need Visual Studio for developing the server-side code.  This is only one path for server-side code, of course.

Once you have `Task Runner Explorer` installed, you can view it by choosing `View --> Other Windows --> Task Runner Explorer`:

![image](https://cloud.githubusercontent.com/assets/10272832/14059201/e7a1bc9e-f2ff-11e5-80cd-6e22db1d1635.png)

You will see something that looks like this:

![image](https://cloud.githubusercontent.com/assets/10272832/14059208/39326996-f300-11e5-9b5a-2e0c4f806497.png)

#### Install Web Essentials

[Web Essentials](https://visualstudiogallery.msdn.microsoft.com/ee6e6d8c-c837-41fb-886a-6b50ae2d06a2) (make sure you're getting the latest version).

![image](https://cloud.githubusercontent.com/assets/10272832/14225827/1cb9c672-f88e-11e5-96a8-1bf3e4655260.png)

#### Install Web Compiler

[Web Compiler](https://visualstudiogallery.msdn.microsoft.com/3b329021-cd7a-4a01-86fc-714c2d05bb6c)

![image](https://cloud.githubusercontent.com/assets/10272832/14225844/b920a0b2-f88e-11e5-9919-53c7590e4f6d.png)

### Generating Docs

#### TypeScript Docs

To generate the TypeScript Docs, bring up `Task Runner Explorer`, right click the `typedoc` task, and click `run`:

![image](https://cloud.githubusercontent.com/assets/10272832/14064797/7840f166-f3cd-11e5-8ed8-516f1faf2ca3.png)

If you want to inspect (or change) the typedoc config, look at [gulpfile.js](https://github.com/cmichaelgraham/aurelia-axel-northwind/blob/master/aurelia-axel-northwind/gulpfile.js):

The the generated docs include a main page that comes from [docs.md](https://github.com/cmichaelgraham/aurelia-axel-northwind/blob/master/aurelia-axel-northwind/docs.md), which is a [markdown](https://daringfireball.net/projects/markdown/syntax) formatted document and can be edited as desired to provide doc content.

```javascript
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
```

## Get Started With Data

### Copy aurelia-axel

![image](https://cloud.githubusercontent.com/assets/10272832/13908176/2f3e22c2-eec3-11e5-96e6-59d7d3c41d86.png)

1. Rename the folder: `aurelia-axel` :arrow_right: `aurelia-axel-northwind`
2. Rename the solution file :arrow_right: `aurelia-axel-northwind.sln`
3. Switch to the `aurelia-axel-northwind` folder
4. Rename the project file :arrow_right: `aurelia-axel-northwind.csproj`
5. Switch back to the main folder
6. Open the solution in Visual Studio (run as administrator)
7. Right click the old project (which didn't load) and remove it from the solution.
8. Right click the solution and `add - existing project` and browse to the renamed project file
9. The project should load

![image](https://cloud.githubusercontent.com/assets/10272832/13908359/98e30640-eec6-11e5-8d14-5c654cd39036.png)

### Create EF Model

1. Create new empty project

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908387/2bb9a7e4-eec7-11e5-85e5-574d230bec79.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908450/2864cb72-eec8-11e5-94e9-c6ea5d08efa2.png)
    
2. Delete the (unhelpful) `Class1.cs`
3. Add Entity Framework Model

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908503/51e6cd78-eec9-11e5-92a1-1beb9c624322.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908535/d95d2126-eec9-11e5-9175-a326f97e9e64.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908540/0551ee38-eeca-11e5-93ea-6e90df1e9987.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908545/487351ac-eeca-11e5-9109-9a0e0841753d.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908559/95f173dc-eeca-11e5-9881-6dad13987da8.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908570/ccafa0b0-eeca-11e5-9a31-c7a634d84452.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908577/ece56860-eeca-11e5-9ab4-ecc6fda0085a.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908597/79fa5bf2-eecb-11e5-9072-dc0639795b73.png)
    
4. Bask in the glory of your automatically created EF model !! :smile:

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908626/3d35389e-eecc-11e5-9580-3cc942ae0176.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908628/565b1532-eecc-11e5-9eda-1cc6b3958c0c.png)

### Create OData Controller

1. Make sure you did a `rebuild` on the solution
2. Add a reference to the EF project

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908688/a375c5e6-eecd-11e5-9977-991892a78a7b.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908700/e514e4aa-eecd-11e5-8130-1475838236a8.png)

3. Add the connection string from the EF project's `app.config` to the web project's `web.config`

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908718/3d95c0b8-eece-11e5-984b-f2fbef351524.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908731/99c5e8ea-eece-11e5-8897-c9c790032122.png)

4. Add the OData controller

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908754/3e23130e-eecf-11e5-863b-e660d93bf106.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908765/72ffc4b4-eecf-11e5-8fc8-a9adc9902a1a.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908774/9bab19fe-eecf-11e5-91f9-9fd3a578a44d.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908803/390ed000-eed0-11e5-8f79-40fdc6fbc0e1.png)

5. Copy the `using` statements to the `WebApiConfig.cs` file

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908791/f6d7230e-eecf-11e5-8906-1066f6d7d37e.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908807/6fe7f818-eed0-11e5-92ee-cc6cfe7c722f.png)

6. Copy the OData code block to the `WebApiConfig.cs` file

    ![image](https://cloud.githubusercontent.com/assets/10272832/13908823/e03e4e46-eed0-11e5-8307-fc2095479103.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908830/2761f296-eed1-11e5-901e-7c13cb985eca.png)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/13908870/f7e645b6-eed1-11e5-961a-fb2ffd6070da.png)
    
7. Increase the Customer OData Controller's expand depth to 4 (from the default 2)
    
    ![image](https://cloud.githubusercontent.com/assets/10272832/14044746/7dc157fe-f259-11e5-97c8-58e03f64fcd5.png)

8. Rebuild and run in the browser

### Play with OData URLs

#### The `/odata` URL returns a catalog of the available collections

![image](https://cloud.githubusercontent.com/assets/10272832/13908951/2a527e10-eed3-11e5-9d6d-b8f564946dfb.png)

#### The `/odata/$metadata` URL returns detailed data on the Entities and their Properties

![image](https://cloud.githubusercontent.com/assets/10272832/13909167/95c6c9ca-eed4-11e5-8dfd-4f72faa40bb0.png)
    
#### It is easy to pull back the first 5 `Customers` like so:

![image](https://cloud.githubusercontent.com/assets/10272832/13909243/f0eb7422-eed4-11e5-8cb6-9e1d9d96efc9.png)

#### We can sort by `CustomerName` (descending) like this:
    
![image](https://cloud.githubusercontent.com/assets/10272832/14044420/2223b084-f256-11e5-8df5-f28a49bb98ed.png)

#### We can choose to select only the data of interest so we aren't clogging up our network with data that don't want:

![image](https://cloud.githubusercontent.com/assets/10272832/14045050/4909a478-f25c-11e5-8930-d12ebd8209c8.png)
    
#### We can get a specific `Customer` by the `CustomerId` like this:

![image](https://cloud.githubusercontent.com/assets/10272832/14044853/5ba88452-f25a-11e5-93f6-122fcf7677b3.png)
    
#### Or we can search for `Customers` that meet a specific criteria, in this case, `CompanyName` includes the string `fa`:

![image](https://cloud.githubusercontent.com/assets/10272832/14045757/677c5134-f262-11e5-980a-e6752857ff2a.png)
    
#### Things get REALLY interesting when we use expand to pull back child data also.  Here we see the `Customer` object now has an `Orders` property that is an array of `Order` objects:

![image](https://cloud.githubusercontent.com/assets/10272832/14044912/d4b8f5fc-f25a-11e5-8665-38798d90be0d.png)
    
#### We can go deep on the expand expression (`$expand=Orders,Orders/Order_Details,Orders/Order_Details/Product`):

![image](https://cloud.githubusercontent.com/assets/10272832/14044973/904ac43a-f25b-11e5-95a1-d11ec5e30011.png)
    
### Create Search Route and Search View

Phew, that's a lot of background.  Now lets put that odata url understanding to use and build a page that lets a user search for customers that match the information they enter into a search criteria page.

### Using Flexbox Layout

What follows is exquisite.

![image](https://cloud.githubusercontent.com/assets/10272832/14226194/1e6ee47a-f898-11e5-9018-f1a765f992b3.png)

#### `search-customer.less`

```css
#search-customer {
    display: flex;
    flex-direction: row;
    flex: 1;
}

search-customer-criteria {
    background-color: orange;
    margin:20px;
}

search-customer-results {
    background-color: lawngreen;
    flex: 1;
    margin: 20px 20px 20px 0;
}
```

#### `search-customer.html`

```html
<template>
    <div id="search-customer">
        <search-customer-criteria></search-customer-criteria>
        <search-customer-results></search-customer-results>
    </div>
</template>
```

#### `search-customer-criteria.html`

```html
<template>
    <h3>Customer Search</h3>
</template>
```

#### `search-customer-results.html`

```html
<template>
    <h3>Results</h3>
</template>
```

### Create Search Criteria View

### Create Search Results View

## Notes

### `.less` files

1. When you add a `.less` file, right click it, choose `web compiler` - `compile`.

### Aurelia `.d.ts` File Generation

1. The Aurelia libraries contain ES6 / ES7 code that is transpiled by [the babel transpiler](http://babeljs.io/).
2. The [ES6](http://www.ecma-international.org/ecma-262/6.0/) / [ES7](http://www.2ality.com/2016/01/ecmascript-2016.html) code in these libraries contains type annotations

    > * [ContainerConfiguration interface](https://github.com/aurelia/dependency-injection/blob/master/src/container.js#L60-L65) type annotation in `aurelia-dependency-injection` library

    > * [More Type Annotations](https://github.com/aurelia/dependency-injection/blob/master/src/container.js#L151-L163) in `aurelia-dependency-injection` library

3. When the Aurelia library code is [built](https://github.com/aurelia/dependency-injection/blob/master/build/babel-options.js#L19-L25) (transpiled), a [babel plugin](https://babeljs.io/docs/plugins/) called [babel-dts-generator](https://github.com/YoloDev/babel-dts-generator) extracts the type annotations and the associated code comments and generates a [`.d.ts` TypeScript type definition file](https://github.com/aurelia/dependency-injection/blob/master/dist/aurelia-dependency-injection.d.ts).

### Aurelia `api.json` File Generation

> [Aurelia Reference Documentation](http://aurelia.io/docs.html#/aurelia/dependency-injection/1.0.0-beta.1.1.4/doc/api/overview) is provided by an Aurelia application that is driven by [api.json](https://github.com/aurelia/dependency-injection/blob/master/doc/api.json) files, also generated as part of the build and release process.

1. The Aurelia libraries' `.d.ts` files are run through [TypeDoc](http://typedoc.io/) to [generate](https://github.com/aurelia/dependency-injection/blob/master/build/tasks/doc.js#L7-L19) a (large) `api.json` file which contains all of the type annotations in the Aurelia library being built as well as all the types from the dependent libraries.
2. From this (large) `api.json` file, the type information (for just this library) [is extracted](https://github.com/aurelia/dependency-injection/blob/master/build/tasks/doc.js#L21-L25) to the release `api.json` file using the [Gulp TypeDoc Extractor](https://github.com/cmichaelgraham/gulp-typedoc-extractor#gulp-typedoc-extractor--)
