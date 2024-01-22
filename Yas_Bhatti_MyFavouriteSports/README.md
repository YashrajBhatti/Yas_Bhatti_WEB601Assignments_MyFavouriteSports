# YasBhattiMyFavouriteSports

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Repository: Yas_Bhatti_WEB601Assignments_MyFavouriteSports
Theme: My Favourite Sports
Welcome to my WEB601 assignments repository! This project focuses on creating a single-page application centered around the theme "My Favourite Sports." In this application, I'll be displaying content related to different sports.

Angular Application: Yas_Bhatti_MyFavouriteSports
I have created a new Angular application named Yas_Bhatti_MyFavouriteSports for this assignment. The version of the application is set to 0.0.1 in the package.json file.

Terminal Commands
You can run the following commands in the terminal to generate Angular components, pipes, and directives:

npm run-script generatecomponent to generate a component
npm run-script generatepipe to generate a pipe
npm run-script generatedirective to generate a directive
Helper Files
Inside the app folder, you'll find a folder called helper-files:

content-interface.ts: Defines an interface called Content with specific parameters.
content-list.ts: Contains a class named ContentList with private attributes and methods to manage content.
Content-Card Component
I've created a component named Content-card where I've instantiated the ContentList class and added at least 3 valid sports-related items to it in the component's constructor.

Displaying Content
The contents of the ContentList are displayed in the Content-card component's HTML using the functions defined in the ContentList class.

BONUS Feature
For a bonus, I've implemented a function in the ContentList class that, when given an index outside the array's range, returns an HTML error message.

How to Run
Clone the repository: git clone https://github.com/YashrajBhatti/Yas_Bhatti_WEB601Assignments_MyFavouriteSports/tree/Assignment-1
Navigate to the project directory: cd Yas_Bhatti_MyFavouriteSports
Install dependencies: npm install
Run the application: ng serve
Feel free to explore and enjoy the content related to my favorite sports!

BONUS - Error Handling
If you encounter an error such as an index outside of the array's range, the application will display a reader-friendly HTML error message instead.