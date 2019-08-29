# Pantheon Grid Integration

This plugin allows you to install and use [Pantheon](https://docs.pantheon.pegasys.tech/en/latest/) in [Ethereum Grid](http://grid.ethereum.org).

# Screenshots
## About Page
![about page](./assets/about_page.PNG)

## Bintray Release List + Nano
![version list](./assets/pantheon_grid.png)


# Implementation
`index.js`
```

```

# How to use 
- [Download Grid](https://grid.ethereum.org/)
- Run Grid
- Click on settings icon
- Click on edit config
- Add TODO
- Click Save
- Click Restart

# Challenges
see issues
- Bintray support not fully implemented in [electron-app-manager](https://github.com/PhilippLgh/electron-app-manager) -> use github mirror
  - failing test https://github.com/PhilippLgh/electron-app-manager/commit/80bf84fdf99ec1dafec046fbac1cd811259a79d4#diff-e7bde8dfb0840fa786d7adbef653fc7aR14
  - run with `yarn test:downloader`

