# Crypto Stats

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About Project](#about-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [API Interactions](#api-interactions)
- [Contributing](#contributing)
- [Author](#author)
- [Acknowledgements](#acknowledgements)
- [Show your support](#show-your-support)

## About Project

"Crypto Stats" is a web application that keeps track of cryptocurrency statistics. This application presents a user with a list of cryptocurrencies sorted in the order of their current market prices. A user can then click on one of othe currencies to be directed to a details page with more stats on that particular cryptocurrency.
This project uses [Coinstats API](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest) which is a public REST API for information on cryptocurrencies.

![screenshot](./src/images/assets/screenshot.png)

### [Live Demo - Netlify](https://crypto-statistics.netlify.app/)

### [Project Presentation - YouTube](https://youtu.be/NV_9kst9jqk)

## Built With

- ReactJS
- Redux
- [Coinstats API](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest)

## Getting Started

- Clone this repo <https://github.com/Lameck1/crypto-stats>

    ```bash
    git clone https://github.com/Lameck1/crypto-stats.git
    ```

- Navigate to crypto-stats folder/directory

    ```bash
    cd crypto-stats
    ```

- On the comandline, at the project's root, run ```npm install``` to install app dependencies

- Next, run ```npm start``` which will run the app in the development mode.

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- ALTERNATIVELY

  - Just run ```npm run build``` which will build the project and generate output files into the ```build``` directory.

  - Go to ```build``` directory and manually open ```index.html``` to interact with the app

- Run ```npm run test``` to run tests.

## API Interactions

From Coinstats API, this app/project is interacting/consuming the following endpoints:

- **Base URL** - <https://api.coinstats.app/public/v1>
- **Fetching and Loading Coins - Method(GET)** - <https://api.coinstats.app/public/v1/coins>
- **Fetching and Loading a Coin by id i.e. "bitcoin"- Method(GET)** - <https://api.coinstats.app/public/v1/bitcoin>

Take a look at the [DOCUMENTATION](https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest) for further insights.

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Lameck1/crypto-stats/issues)

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/newFeature`)
  3. Commit your Changes (`git commit -m 'Add some newFeature'`)
  4. Push to the Branch (`git push -u origin feature/newFeature`)
  5. Open a Pull Request

## Author

👤 **Lameck Otieno**

- GitHub: [@githubhandle](https://github.com/Lameck1)
- Twitter: [@twitterhandle](https://twitter.com/lameck721)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/lameck-odhiambo-642b7077/)
- Portfolio: [Portfolio](https://lameck.me)

## Acknowledgements

- [Nelson Sakwa](https://www.behance.net/sakwadesignstudio) from <https://www.behance.net/> for the awesome design that this project is based on.
- **Developers at <https://coinstats.app/>** for the API that this project consumes.
- [ReactJS Organization](https://reactjs.org/) for the amazing [Documentation](https://reactjs.org/docs/getting-started.html) on React.
- [Redux Organization](https://redux.js.org/) for the amazing [Redux Essentials Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) on Redux.

## Show your support

Give a ⭐️ if you like this project!
