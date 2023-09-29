# @javiev/components-library

![version](https://img.shields.io/badge/version-0.0.1-brightgreen)
![license](https://img.shields.io/badge/license-ISC-blue)

A small design system library engineered with React, TypeScript, Styled-components, Jest, and Storybook, conceived as a personal project for my portfolio. This project is currently a Work in Progress (WIP).

## 🚀 Installation

Before installing this library, you need to configure npm to access the GitHub Packages registry. To do this, create a `.npmrc` file in the root of your project with the following content:

```plaintext
registry=https://registry.npmjs.org/
@javiev:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=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
```

**Note:** The provided token allows anyone to install and use the library until 20/09/2024.

Now you can install the library by running the following command:

```bash
npm install @javiev/components-library
```

## 🛠 Development

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository.
3. Run `npm install` to install the dependencies.
4. Use `npm run storybook` to start the Storybook development environment.

## 📖 Documentation

You can explore the components and their properties in Storybook by running the following command:

```bash
npm run storybook
```

This will open Storybook in your default browser at `http://localhost:6006`.

## 🧪 Testing

To run the tests, use the following command:

```bash
npm run test
```

To run tests in watch mode, use the following command:

```bash
npm run test:watch
```

To get a coverage report, use the following command:

```bash
npm run test:coverage
```



## 📄 License

This library is licensed under the ISC license. For more details, check the LICENSE file in this repository.

## 👥 Author

- Javier Gómez C.
