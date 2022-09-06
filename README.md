ckeditor5-diagrams
==========================
Easily create and edit diagrams.net / draw.io diagrams in the editor.
Uses the embed url of [diagrams.net](https://diagrams.net) per default. But a custom url can be set through the settings.
Any image can be converted into a diagram (i.e., a new diagram is created and the image is inserted in it).
Already edited images (or inserted images with included diagram information) can be edited as it.

The inserted diagrams are image elements in the editor/html. The diagram information is embedded inside.
## Screenshots

![image](https://user-images.githubusercontent.com/20766652/160448255-2754d2a7-7c33-4243-a997-cb22393e19f1.png)




![image](https://user-images.githubusercontent.com/20766652/160448010-323feace-0dbb-4371-aed6-07f93880ca5f.png)

This package was created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package.

## Live Example
Visit the [live example](https://aarkue.github.io/ckeditor5-diagrams/editor_build_sample/sample/) to try out the plugin without installing anything!

## Installation
The package is not published on the npm repository yet, but can be installed using `npm i git+https://github.com/aarkue/ckeditor5-diagrams.git`.

To use this package you will need to create a custom CKEditor5 build (if you did not do so yet). Don't worry, it is pretty straightforward. See the next section for detailed instructions of how to do so.

## Editor Build
1. Create a CKEditor5 editor build using [the online builder](https://ckeditor.com/ckeditor-5/online-builder/).
2. Download and extract the generated folder, navigate into it.
3. Run `npm install` to install all CKEditor5 dependencies.
4. Run `npm i git+https://github.com/aarkue/ckeditor5-diagrams.git` to install this package (ckeditor5-diagrams).
5. Add the ckeditor5-diagrams plugin to the editor using `src/ckeditor.js`, see the folder `editor_build_sample` in this repositority for an example of how to do so.
6. Run `npm run build` to create a js-bundle of the editor. You can test it by serving the `sample/index.html` file in your folder.

The generated file `build/ckeditor5.js` can then be used everywhere and served directly.
## Table of contents

* [Developing the package](#developing-the-package)
* [Available scripts](#available-scripts)
  * [`start`](#start)
  * [`test`](#test)
  * [`lint`](#lint)
  * [`stylelint`](#stylelint)
  * [`dll:build`](#dllbuild)
  * [`dll:serve`](#dllserve)
  * [`translations:collect`](#translationscollect)
  * [`translations:download`](#translationsdownload)
  * [`translations:upload`](#translationsupload)
* [License](#license)

## Developing the package

To read about the CKEditor 5 framework, visit the [CKEditor5 documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/index.html).

## Available scripts

Npm scripts are a convenient way to provide commands in a project. They are defined in the `package.json` file and shared with other people contributing to the project. It ensures that developers use the same command with the same options (flags).

All the scripts can be executed by running `npm run <script>`. Pre and post commands with matching names will be run for those as well.

The following scripts are available in the package.

### `start`

Starts a HTTP server with the live-reload mechanism that allows previewing and testing plugins available in the package.

When the server has been started, the default browser will open the developer sample. This can be disabled by passing the `--no-open` option to that command.

You can also define the language that will translate the created editor by specifying the `--language [LANG]` option. It defaults to `'en'`.

Examples:

```bash
# Starts the server and open the browser.
npm run start

# Disable auto-opening the browser.
npm run start -- --no-open

# Create the editor with the interface in German.
npm run start -- --language=de
```

### `test`

Allows executing unit tests for the package, specified in the `tests/` directory. The command accepts the following modifiers:

* `--coverage` &ndash; to create the code coverage report,
* `--watch` &ndash; to observe the source files (the command does not end after executing tests),
* `--source-map` &ndash; to generate source maps of sources,
* `--verbose` &ndash; to print additional webpack logs.

Examples:

```bash
# Execute tests.
npm run test

# Generate code coverage report after each change in the sources.
npm run test -- --coverage --test
```

### `lint`

Runs ESLint, which analyzes the code (all `*.js` files) to quickly find problems.

Examples:

```bash
# Execute eslint.
npm run lint
```

### `stylelint`

Similar to the `lint` task, stylelint analyzes the CSS code (`*.css` files in the `theme/` directory) in the package.

Examples:

```bash
# Execute stylelint.
npm run stylelint
```

### `dll:build`

Creates a DLL-compatible package build which can be loaded into an editor using [DLL builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/dll-builds.html).

Examples:

```bash
# Build the DLL file that is ready to publish.
npm run dll:build

# Build the DLL file and listen to changes in its sources.
npm run dll:build -- --watch
```

### `dll:serve`

Creates a simple HTTP server (without the live-reload mechanism) that allows verifying whether the DLL build of the package is compatible with the CKEditor 5 [DLL builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/dll-builds.html).

Examples:

```bash
# Starts the HTTP server and opens the browser.
npm run dll:serve
```

### `translations:collect`

Collects translation messages (arguments of the `t()` function) and context files, then validates whether the provided values do not interfere with the values specified in the `@ckeditor/ckeditor5-core` package.

The task may end with an error if one of the following conditions is met:

* Found the `Unused context` error &ndash; entries specified in the `lang/contexts.json` file are not used in source files. They should be removed.
* Found the `Context is duplicated for the id` error &ndash; some of the entries are duplicated. Consider removing them from the `lang/contexts.json` file, or rewrite them.
* Found the `Context for the message id is missing` error &ndash; entries specified in source files are not described in the `lang/contexts.json` file. They should be added.

Examples:

```bash
npm run translations:collect
```

### `translations:download`

Download translations from the Transifex server. Depending on users' activity in the project, it creates translations files used for building the editor.

The task requires passing the URL to Transifex API. Usually, it matches the following format: `https://www.transifex.com/api/2/project/[PROJECT_SLUG]`.

To avoid passing the `--transifex` option every time when calls the command, you can store it in `package.json`, next to the `ckeditor5-package-tools translations:download` command.

Examples:

```bash
npm run translations:download -- --transifex [API URL]
```

### `translations:upload`

Uploads translation messages onto the Transifex server. It allows for the creation of translations into other languages by users using the Transifex platform.

The task requires passing the URL to the Transifex API. Usually, it matches the following format: `https://www.transifex.com/api/2/project/[PROJECT_SLUG]`.

To avoid passing the `--transifex` option every time when you call the command, you can store it in `package.json`, next to the `ckeditor5-package-tools translations:upload` command.

Examples:

```bash
npm run translations:upload -- --transifex [API URL]
```

## License

The `@aarkue/ckeditor5-diagrams` package is available under [MIT license](https://opensource.org/licenses/MIT).

However, it is the default license of packages created by the [ckeditor5-package-generator](https://www.npmjs.com/package/ckeditor5-package-generator) package and it can be changed.
