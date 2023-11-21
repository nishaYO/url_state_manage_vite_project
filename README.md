#URL state management in Vite + React project.

This is a React+Vite project. This project is for myself to figure out how to manage states using urls and retain the states even after navigation.

The desired flow of the app is:
- main page "/"
- main page has a button to home page
- home page has a lot of buttons in it with random ids and a back button
- whenever i click on a button the url gets appended with the button id and the text on the button is chagned from "Select Me" to "Selected".
- then if i go to back button in home page takes me back to "/"
- then i go again to the home page the url has the previously selected button ids and the text of those buttons is still "Selected".
