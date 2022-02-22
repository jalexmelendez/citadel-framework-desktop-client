# Api Platform Admin Desktop

This is a desktop application to manage Api platform instances remotely.

## Technology used

Note: we are actively working on this project, the documentation is still in work.

| Tool | Description |
| --- | --- |
| Api Platfrorm admin | A headless Admin interface |
| Electron.js | Cross platform desktop application framework |
| React.js | Javascript Library |

## Docs included

1. Downloading the desktop application [on work]
2. Creating a custom desktop client
    1. Installing dependencies
    2. Running your app on the development server
3. Compiling your Electron app

### Frameworks and tools docs

1. Api Platform Admin Docs [This project uses the forked version](https://github.com/jalexmelendez/admin)
2. React []()
3. Electron.js Forge Docs [Typescript + webpack app](https://www.electronforge.io/templates/typescript-+-webpack-template)

## Development and Deployment

### 1. Development

By default the data stream is http://localhost:8000/api (api platform's default url), you need to setup your data stream url in app.tsx.

``` ts 

const Admin = () => (
  <AdminGuesser
    // Use your custom data provider or resource schema analyzer
    dataProvider={hydraDataProvider({ entrypoint: 'http://localhost:8000/api YOUR URL HERE' })}
    schemaAnalyzer={hydraSchemaAnalyzer()}
  />
);
```

** NOTE: you should provide the corresponding protocol (https is recomended for remote resources.) **

You can test your app running:

``` bash 

yarn start

```

### 2. Deployment

Documentation in progress.

[Publishers](https://www.electronforge.io/config/publishers)

``` bash 

yarn make

```