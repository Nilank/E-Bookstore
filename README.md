# FinalProject by DevelopersEra

Team Members
1.) Deepak Chandwani
2.) Harsh Shinde
3.) Nilank Sharma
4.) Shantanu Deosthale

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
Various web technologies tools such as MongoDB, Express, Node.js is used for this project.

The project uses Angular, TypeScript, SCSS, Bootstrap framework and conventional web technologies for implementing the Book-Store application.
To provide specific funtionality, each section of the application is divided into components.
As a user, the steps of the implementation is given as follows:
The user will be able to browse through the directory of books in MongoDB database. Search functionality is also implemented for specific results.
The user can select a product based on the suggested filter provided.
The user can view the details of the book and can check the pricing based on the book's size and quantity.
The user can proceed to adding the books into their cart.
The user can confirm the order placed by providing the necessary details such as its Personal details.
The user can proceed to pay for the books selected by giving its card details and thus completing the orders.
The user can view the orders on the My Orders tab for review.

## Use Cases:

As a user, I should be able to login using username/password login.

As a user, I should be to do a search.

As a user, I should be able to sort the results.

As a user, I should be able to create a record.

As a user, I should be able to see a detailed view of the record.

As a user, I should be able to edit a record.

As a user, I should be able to delete a record.

As a user, I should be able to log out of the application.

## Project Installation

Clone the project into a local system or unzip the project files from this repository.

Change the directory to 'client' and 'server' and run 'npm i' on both respectively.
```
cd client
npm i
```
```
cd server
npm i

```
Go to 'data/db' and run 'mongod' and set up the 'dbpath' where the 'db' is stored.
```
cd data/db
mongod

```

Setup the 'mongo' connection to your local MongoDB.

Go to 'server' and run 'npm start'.

Go to 'client' and run 'ng serve'. It should run on 'http://localhost:4200' by default, provided that it is available.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
