# TAXI INSIGHTS 

## Description

An interactive trend visualizer for the NYC TLC dataset.  The Postgres server contains over 1 million trip entries for the 2017-2018 period.  Most of the trends are map-based in the form of choropleths.  Every page formulates a query over every trip in the dataset.  These are then color-coded by district zone.

## Requirements

To run the dev version, all you need is Node.js installed on your environment.

## Install

    $ git clone https://github.com/hackleman/taxi-insights.git
    $ cd taxi-insights
    $ npm install

### Configuration

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

- Postgres connection string
- Port for the backend

### Start & watch

    $ npm start

### Simple build for production

    $ npm run build

---

## Languages & tools

### HTML

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.
- [Leaflet](https://leafletjs.com/) used for map visualizations.
- [React Transition Group](https://reactcommunity.org/react-transition-group/) used for animations.

### CSS

- [react-strap](https://react-bootstrap.github.io/) is used to style many components.

---

