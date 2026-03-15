# Escher Visualization

A React + Redux web application for interactive visualization of [Escher](https://escher.github.io) metabolic pathway maps.

## Overview

This application allows you to load, browse, and visualize metabolic pathway maps in Escher's JSON format. It renders metabolite nodes, reaction segments, and labels as interactive SVG graphics with pan and zoom support.

## Features

- Load Escher JSON map files via file picker
- Interactive SVG visualization with pan (scroll) and zoom (Alt + scroll)
- Split-pane layout with a file list sidebar and a map viewer
- Redux state management for file and view state

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 14 or higher
- npm 6 or higher

### Installation

```bash
npm install
```

### Running the development server

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in your browser.

### Running tests

```bash
npm test
```

Runs the Jest test suite in interactive watch mode. In CI environments the tests run once automatically.

### Linting

```bash
npm run lint
```

Runs ESLint across the `src/` directory using the `react-app` ruleset.

### Building for production

```bash
npm run build
```

Produces an optimized static bundle in the `build/` directory.

## Loading a Map

1. Click the file input in the left sidebar.
2. Select an Escher JSON file (two-element array: map metadata + map data).
3. The map renders in the right pane.

Sample maps in the Escher JSON format can be downloaded from [https://escher.github.io](https://escher.github.io).

## Project Structure

```
src/
├── actions/        Redux action creators
├── components/     Presentational React components
│   ├── escher.js   SVG map renderer
│   ├── layout.js   Split-pane application shell
│   ├── FilePicker  File upload widget
│   ├── FileList    List of loaded maps
│   └── ...
├── containers/     Redux-connected components
├── reducers/       Redux reducers
├── data/           Bundled example map (combined.json)
├── App.js          Root application component
└── index.js        Entry point
```

## Docker

A Docker Compose setup is included for serving the built application:

```bash
npm run build
docker-compose up
```

The app is then available at [http://localhost:4000](http://localhost:4000).

## CI

GitHub Actions runs linting and tests on every push and pull request to `main`/`master`. See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
