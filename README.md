# My Store - A shopping website

> A client side ruby on rails application for a shopping website. 

## Built With
- Ruby(3.2.2)
- Ruby on Rails
- [Tailwind](https://tailwindcss.com/)
- [Hotwire](https://hotwired.dev/)
- Rubocop

## Live Demo

[live link](#)

## Getting Started

To get a local copy follow these simple example steps.

- Make sure you have Ruby([rbenv](https://github.com/rbenv/rbenv) preferred) installed.
- Open the terminal window and clone the repository using this command: 
```bash
git clone git@github.com:wuletawwonte/my-store.git
```
- Open the repo by typing : 
```bash
cd my-store
```
- Install the project's dependencies by running this command: 
```bash
bundle install
yarn install
```
- Run `rails server` or `rails s` to start the application on local server.
- To test the project, run `rails test` in your terminal

### Configuring Rails

Create an .env file with the minimum ENV variables needed for booting Rails:

```bash
cp .env.example .env
```

You can edit the configruation options or go with the default setup. 

## Web server
This project uses [Puma](https://puma.io/) as a web server for development. The `.env` file is where some of the configuration of the app is written. 

Use [dev-tld-resolver](https://github.com/puma/dev-tld-resolver) to access the application with a custom domain name, because it redirects `.dev` tld to localhost. To install dev-tld-resolver it must be built using `make` according to its [installation documentation](https://github.com/puma/dev-tld-resolver#installation). 

To ensure that `make` is installed on your computer, please install the `build-essential` meta package according to the [instruction here](./docs/Install%20build-essentials.md). 

The default domain name in the development environment is `mystore.dev` but it can be changed to a custom domain name by setting `DEV_DOMAIN_NAME=mystore.dev` in the `.env` file.

**HTTPS (recommended)**

Use [mkcert](https://github.com/FiloSottile/mkcert) to generate and install certificates for local domains: `mkcert mystore.dev "*.mystore.dev" localhost 127.0.0.1`

In `.env`, set:

```
TEST_CERT_KEY=config/ssl/mystore.dev-key.pem
TEST_CERT=config/ssl/mystore.dev.pem
DEV_ENV_HTTPS=1
```

Run `rails s` to start Puma locally. `config/puma.rb` has setting to bind it to 0.0.0.0 when running with `DEV_ENV_HTTPS=1`.
The app does not fully work on a non-standard port. To route every port to 3000, run: `sudo iptables -t nat -A OUTPUT -o lo -p tcp --dport 443 -j REDIRECT --to-port 3000`. Run the same command with `-D` instead of `-A` to disable. This will also be reset when you restart your computer.

## Docker Setup

Before going through these steps please make sure you have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed in your machine. 

NOTE: these docker setup is for setting up development environment only.

To start working on this project all you have to do is clone the repo locally and navigate to the project root directory. Execute the following command to build and start the docker images based on the configuration provided. 

```bash
docker-compose up
```
Then open http://localhost:3000 or http://127.0.0.1:3000 on your browser.

## Authors

👤 **Wuletaw Wonte**

- GitHub: [@wuletawwonte](https://github.com/wuletawwonte)
- Twitter: [@wuletaww](https://twitter.com/wuletaww)
- LinkedIn: [LinkedIn](https://linkedin.com/in/wuletaw-wonte)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Windmill](https://windmillui.com/) template used in the ui.
- Hat tip to anyone whose code was used as inspiration

## 📝 License

This project is [MIT](./LICENSE.md) licensed.
