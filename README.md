# recipe-book-app
A cross platform (iOS, Android, Windows OS) mobile application built with Angular and Ionic 2. The app is to help beginners with Angular background to learn Ionic. In the app the user can create recipes and add recipes ingredients to a shopping list.

### App demo:

<!-- ![]() -->

### in this app you will learn how to:

* _`Implement `[tabs](https://ionicframework.com/docs/components/#tabs)` navigation.`_
* _`Ionic `[Theming](https://ionicframework.com/docs/theming/)`.`_
* _`Create forms using the Teplate-Driven approach`_
* _`Create forms using the Reactive approach`_
* _`Use the Ionic `[Menu](https://ionicframework.com/docs/components/#menus)` component.`_
* _`Use the Ionic `[List](https://ionicframework.com/docs/components/#lists)` component.`_
* _`Use the Ionic `[Action Sheet](https://ionicframework.com/docs/components/#action-sheets)` component.`_
* _`Use the Ionic `[Loading](https://ionicframework.com/docs/components/#loading)` component.`_
* _`Use the Ionic `[Alert](https://ionicframework.com/docs/components/#alert)` component.`_
* _`Use the Ionic `[Popover](https://ionicframework.com/docs/components/#popovers)` component.`_
* _`Use the Ionic `[Toast](https://ionicframework.com/docs/components/#toast)` component.`_
* _`Managing authentication and the App state using `[Firebase](https://firebase.google.com)` component.`_


### Disclaimer:
This app is for demo purposes only.

# For Developers

### Prerequisites:
```
You must have Ionic, npm and nodejs installed.
```

### To install the prerequisites
```
1. Install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install nodejs:

    brew install node

3. Install Ionic globally:

    npm install -g ionic
```

### To use the application:
``` 
1. Clone the project:

    git clone https://github.com/atalakey/ion-recipe-book-app.git ~/Desktop/ion-recipe-book-app

2. Navigate to where you cloned the project:

    cd ~/Desktop/ion-recipe-book-app

3. Install App local packages:

    npm install

4. Create a Firebase project:

	a. Login to your Gmail account.
	b. Visit the Firebase Console: https://console.firebase.google.com
	c. Add a new project
	d. Add your Firebase project's apiKey, authDomain and databaseUrl to the "recipe-book-app/src/app/firebase-config.ts" config file

4. Run the App

    ionic serve
```