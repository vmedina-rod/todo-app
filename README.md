# TodoVue
### _Ironhack Final Project_
<img
  src="https://raw.githubusercontent.com/vmedina-rod/todo-app/main/src/assets/logo.webp"
  alt="TodoVue Logo"
  title="TodoVue Logo"
  style="display: inline-block; margin: 0 auto; max-width: 40px">

[![Netlify Status](https://api.netlify.com/api/v1/badges/20bb0759-d481-477a-bc3f-bef99174cd01/deploy-status)](https://app.netlify.com/sites/todovue-app/deploys)

Introduction
------------

This document will outline the requirements of your next project. You’re going to build a simple To-do app with **Vue.js** that allows users to create an account, record tasks, edit them and mark them as complete. The app will be linked to a database, where all the user and task data will be stored. The database that we’ll use for this project is **Supabase**. We’ll also be using **Vite** as a build tool to compile our code and provide a development server while we work.

>In the following lessons, you will find introductory notes on databases.

You’ll need to use the CSS skills you’ve learned earlier in the course to style your app. You can pick any UI library to work with such as [Bootstrap](https://getbootstrap.com/), [Vue Element Plus](https://element-plus.org/en-US/), [Vuetify](https://vuetifyjs.com/en/), or write your own styles for bonus points.

Learning goals
--------------

At the end of this project you will be able to:

*   Use Vue.js to create an app
*   Connect a Vue.js app to Supabase [(Database as a Service)](https://www.techtarget.com/searchdatamanagement/definition/database-as-a-service-DBaaS)

Project requirements
--------------------

*   Have a repo on GitHub
*   Commit your work at least once a day during the project development time
*   Your app should be rendered in a browser
*   Your app should be deployed online using a cloud service such as Netlify
*   Stick with _KISS_ (Keep It Simple, Stupid) and _DRY_ (Don’t Repeat Yourself) principles.
*   Your app should be styled using CSS
*   Your app should be fully integrated with a Supabase database using all CRUD operations
*   You should use Vue’s Pinia to fully implement status handling
*   You should handle any asynchronous operations using Promises or Async/await
*   You should document the application’s features, configuration and technical specifications within a README file

Deliverables
------------

The functionality should include:

*   Authentication (sign up, sign in, sign out)
*   A front-end that displays the user’s personal to-do list
*   An ability to add new tasks
*   An ability to edit existing tasks
*   An ability to mark tasks as complete/incomplete
*   An ability to delete existing tasks
*   A store and a database that your app can call data from

User stories
------------

User stories allow us to build a simple narrative around business logic using a syntax called Gherkin. We use keywords such as `given`, `when`, `then`, `and` and `but`, in addition to a few others. You can find a full list of keywords within the [Gherkin documentation](https://cucumber.io/docs/gherkin/reference/#keywords).

Gherkin is the best way to clarify business logic and user interactions whilst also maintaining a human-readable set of specifications.

This strategy is referred to as [Behavior-Driven Development](https://en.wikipedia.org/wiki/Behavior-driven_development) (BDD) and it will form the basis of this specification. We’ll consider our user stories throughout the development process. In the bonus section, you can test your code against them during the **quality assurance (QA)** stage of the project.

Here are the user stories you’ll need to consider to ensure that the app functions as required for this project:

### Authentication



```  
Feature: Create an account  
  Background: As a new user, I want to register with the to-do app
    Given I do not have an account

Scenario: As a user, I want to create an account
  When I visit the signup page
  And I set the email to "test@example.co.uk"
  And I set a password to "****"
  And I set confirmPassword to "****"
  And I click the register button
  Then I expect to be shown a warning that instructs me to confirm my email address by clicking a link in an email
  And I click the link provided in the email
  Then I expect to be logged in to the app 
  And I expect to see the home screen

```

```
Feature: Log in to the app
  Background: As a user, I want to log in to the to-do app
    Given I already have an account

Scenario: As a user, I want to log in to the app
  When I visit the login page
  And I enter my email as "test@example.co.uk"
  And I enter my password as "****"
  And I click the Log In button
  Then I expect to be logged in to the app 
  And I expect to see the home screen

```

```
Feature: Log out from the app
  Background: As a user, I want to be able to log out from the app
    Given I am logged in to the app

Scenario: As a user, I want to log out
  When I am viewing the home screen
  And I click the log out button 
  Then I expect to be logged out of the app
  And I expect to see the login page

```


### App

```
Feature: Add a new task
  Background: As a logged in user, I want to add a new task and have it appear on my to-do list
    Given I am logged in

Scenario: As a logged-in user I want to create a new task
  When I visit the home screen
  And I enter "My cool task" in the NewTask field
  And I click the submit button
  Then I expect to see "My cool task" in the To-Do list of tasks

```
```
Feature: Edit a task
  Background: As a logged in user, I want to edit an existing task and have the app display the updated content
    Given I have already created a task

Scenario: As a user, I want to edit the title of my task
  When I locate the task I'd like to edit
  And I click the corresponding Edit button to the task
  Then I expect the title of the task to become editable
  When I enter a new description for the task
  And I click submit
  Then I expect to see my updated task on the To-Do list

```

```
Feature: Mark a task as complete
  Background: As a logged in user, I want to be able to mark a task as complete and automatically move it to the completed section 
    Given I have already created a task

Scenario: As a logged-in user I want to mark a task as complete
  When I locate the task I'd like to mark as complete
  And I click the corresponding done button to the task
  Then I expect to see that my task has immediately been moved to the completed section

```

```
Feature: Mark a task as incomplete
  Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section 
    Given I have already created a task and marked it as complete

Scenario: As a logged-in user I want to mark a task as incomplete
  When I locate the task I'd like to mark it as incomplete
  And I click the corresponding incomplete button to the task
  Then I expect to see that my task has immediately been moved to the to-do section

```

```
Feature: Delete a task
  Background: As a logged in user, I want to be able to permanently delete an existing task
    Given I have already created a task

Scenario: As a logged-in user I want to delete a task
  When I locate the task I'd like to delete
  And I click the corresponding delete button to the task
  Then I expect to see that my task has been permanently removed from every list

```

Technical specifications
------------------------

### Tech Stack

*   **Client**: Vue.js, Vite (dev server)
*   **Router:** [Vue Router](https://router.vuejs.org/)
*   **Store:** [Pinia](https://pinia.vuejs.org) and [Pinia Persist](https://seb-l.github.io/pinia-plugin-persist/) for persistent login
*   **Database as a service:** Supabase



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


Basic setup for Vue.js and Supabase:

```sh
$ npm vite create "my-todo-project"
$ cd my-todo-project
$ npm add @supabase/supabase-js
$ npm add pinia
$ npm add vue-router
$ npm add pinia-plugin-persist
```

Vue.js
------

### Modules needed:

**Vue Router**

*   You will need to set up a route for `Dashboard` and `Auth`

**Pinia** (for our store)

*   You will need to set up two user stores: `user.js` and `task.js`

### Tasks

*   Create a sign up/sign in screen that will be displayed when the user is not logged in
*   Ensure that the signup form requests an email address, password and password confirmation from the user
*   Ensure that the sign in form requests an email and a password from the user
*   Create a page where after logging in, the user is shown the main app content
*   The app should fetch all tasks from the logged-in user’s task list stored in Supabase

Architecture
------------

Below we’ve prepared a suggested file structure for the codebase. Vite will automatically generate the files when you’ve created the project. You will need to create the `components` folder and the `pages` folder.

>The `/pages` directory name is a choice for the developer. In other codebases, you may see it referred to as views.

<details><summary>Suggested file structure for the codebase (click to see) </summary>

```
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── AppHeader.vue
│   │   ├── Nav.vue
│   │   ├── NewTask.vue
│   │   ├── SignIn.vue
│   │   ├── SignUp.vue
│   │   └── TaskItem.vue
│   ├── main.js
│   ├── pages
│   │   ├── Auth.vue
│   │   └── Dashboard.vue
│   ├── router
│   │   └── index.js
│   ├── static
│   │   └── main.css
│   ├── store
│   │   ├── task.js
│   │   └── user.js
│   └── supabase.js
├── vite.config.js
└── yarn.lock

```

</details>


Sample code
-----------

We’ve provided some starter templates for you to use. You’ll need to expand upon these to build the application.

### `/store/user.js`

Here is a basic `user` store. We’ve only given you two actions: `fetchUser` and `signUp`. You’ll need to create `signIn` and `signOut`.

```js
// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});


```

### `/store/task.js`

Here is a basic `task` store. We’ve only given you one action: `fetchTasks`. You’ll need to create your own store actions to update, create and delete the tasks.

```js
// /store/task.js

import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null
  }),
  actions: {
    async fetchTasks () {
      const { data: tasks } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    }
  }
});

```

### App.vue

Instead of checking authentication on router change. We’ll be checking it at the root level of the app. This means that the user request is only fired once and not on every page load. Different (especially larger) apps may need a different strategy when dealing with authentication. We’ve provided you with a basic `App.vue` that nests the other pages inside.

```js
<template>
  <section>
    <router-view class="app-main" /> <!-- your routes will load inside of these tags -->    
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/user.js'

const router = useRouter()
const userStore = useUserStore()
const { user } = storeToRefs(userStore)

onMounted(async () => {
  try {
    await userStore.fetchUser() // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: '/auth' });
    } else {
      // continue to dashboard
      router.push({ path: '/' });
    }
  } catch (e) {
    console.log(e)
  }
})
</script>

```

Code standards & “gotchas”
--------------------------

It’s always important to consider the way in which you write your code. We suggest you add `eslint` along with `eslint-plugin-vue` to your codebase to automatically check and lint your code. You can find more detailed instructions on how to do this [here](https://eslint.vuejs.org/user-guide/).

We also suggest you follow the following principles when dealing with your store:

*   Only update the state from actions
*   After changing data via an action run `this.fetchTasks()` or `this.fetchUser()` inside of that same action. This ensures that the state is always updated the same way because we fetch the data again from the API after manipulating it with a single `fetchSomething()` action.
*   Use getters to select the data when applying it to the template. You’ll need to use `storeToRefs` - for more info take a look at these [Pinia docs](https://pinia.vuejs.org/core-concepts/#using-the-store)
*   When accessing the value of a variable with Vue 3 you’ll need to use `.value`. For example, `let loading = ref(true);` then to update that value you’ll need `loading.value`
    *   `loading.value = false` ![:white_check_mark:](https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/white_check_mark.png) works!
    *   `loading = false` ![:x:](https://cdn.jsdelivr.net/npm/@hackmd/emojify.js@2.1.0/dist/images/basic/x.png) wont work!
*   Supabase requires users to confirm their email addresses. This can be turned off. However, we want you to handle the error from supabase and present it to the user so that when their email is not confirmed it states "email not confirmed " in the error.

Databases and SQL
-----------------

Check the following lesson in the lesson plan to learn more about Databases and SQL.

Supabase
--------

Check the following lesson in the lesson plan to learn how to setup and use Supabase.

User interface
--------------

We’ve not defined a user interface or a design that we want you to use, so use your CSS skills and get creative. Because we’re using Vue, we can make it a single page that includes components for the new task input, task list items and headers, etc.

You’re welcome to apply your own design and layout. You can pick any UI library to work with such as [Bootstrap](https://getbootstrap.com/), [Vue Element Plus](https://element-plus.org/en-US/), [Vuetify](https://vuetifyjs.com/en/), or write your own styles.

Presentation demo
-----------------

You will be expected to demo this application. We’ve provided some tips and expectations below:

>Your presentation demo is expected to last 5-10 mins.

### Tips

1.  Plan what you are going to demo and **practice it on the live site**. That way you won’t be surprised if something breaks on the live version.
2.  **Deploy early** so you can squash bugs. There are _always_ bugs on the live site at first.
3.  Add a **link to your live project** to your DEMO slide so you can start it smoothly.

### Structure

1.  Technical Challenge a. What was **the most important** technical challenge you faced? b. How did you overcome that challenge?
2.  Big Mistake a. What was **the biggest** mistake you made during this project? b. What did you learn from it?

**Project Feedback and Evaluation**
-----------------------------------

*   **Technical Requirements**: Did you deliver a project that met all the technical requirements?
*   **Creativity**: Did you add a personal spin or creative element to your project submission? Did you deliver something engaging and playable to the end user?
*   **Code Quality**: Did you follow code style guidance and best practices covered in class, such as spacing, modularity and semantic naming?
*   **Deployment**: Did you deploy your application to a public URL using GitHub Pages?
*   **Total**: Your instructors will give you a total score on your project (check the table below for more insights)

### Score evaluations

| Expectations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Score |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Your app hasn’t been built to the desired standard or uses unsafe practices. If you received this grade, you’d be asked to resubmit your work, or a fail grade would be given.                                                                                                                                                                                                                                                                                                                                            | 0     |
| Your app has reached the basic standards and is capable of limited safe practice. Your work is rule-based with limited or no translation and interpretation of concepts, skills and procedures and limited adaptations to meet situational factors unless aided. If you meet these standards, your work should attract a passing grade!                                                                                                                                                                                   | 1     |
| Your app has completely reached the standards expected. It can function independently in novel contexts, adapting concepts, skills and procedures to meet situational factors. This level would show that you can demonstrate an appreciation of your own limitations and can set personal learning goals. If you meet these standards, you would attract a credit grade!                                                                                                                                                 | 2     |
| You’ve gone beyond the basic expected standards when creating your app! You have exhibited a high level of independence and can use principles to generate new understandings and ways of completing procedures and can provide theoretically defensible arguments for their new interpretations and adaptations. Your work is of professional-level quality and can engage in productive critical reflection. If you meet these standards, you’re a superstar and could attract a distinction or high distinction grade! | 3     |


### Rubrics

In order to assess your final project and ensure all requirements are met, a **rubric** will be used. This rubric is used to **evaluate your project** by your teaching staff but also to **communicate** what constitutes incomplete, acceptable and excellent performance across each of the learning outcomes for the final project. Take some time to review the rubric and ask your lead teacher any questions about it if necessary.

  
  | Learning outcomes                                                                                   | Domains                                                    | 0 - Incomplete                                                                                                                                                                                                                                                                                                                                                                             | 1 - Fair                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 2 - Good                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 3 - Excellent                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Implement all CRUD operations                                                                       | Databases, Software Architecture                           | Student showed no evidence of creating a database or created only one database. Student managed to implement only basic CRUD actions (GET &amp; POST).                                                                                                                                                                                                                                     | Student created 2 databases as expected. Student partially completed CRUD functionality with at most three out of four CRUD actions available.                                                                                                                                                                                                                                                                                                                                                                                                                      | Student created 2 databases as expected. All CRUD actions are set up. All databases have well-defined schemas and partially implemented validation. All of the CRUD actions are tested with an API Testing tool (Postman, Insomnia, or similar).                                                                                                                                                                                                                                                         | Student created 2 databases as expected. All CRUD actions are set up. Student has found a way to enhance the user’s experience by implementing all or some of the CRUD actions more than once in the app. All databases have robust schemas with well-defined data types and validation. All of the CRUD actions are tested with an API Testing tool.                                                                                                                                                                                                                                                                    |
| Create and integrate the client-side Vue application with the Supabase DB                           | Front-end Applications, Client-side development, Databases | Student failed to create a simple SPA and implement the basic integration with the Supabase DB. Integration with the Supabase DB is either absent or limited to the GET endpoint.                                                                                                                                                                                                          | Student developed a SPA with limited integration with the Supabase DB. Student implemented multiple views and the basic routing allowing the user to navigate between the views. Student implemented stateful components that fetch, store and display the data from the Supabase DB. Student created a component that sends form data to a Supabase DB and creates resources in the database. Student used props to establish a one-way data flow between the child and parent components (pass data down). The frontend UI is contained within larger components. | Student adequately developed a SPA that is fully integrated with the Supabase DB. Student created components that integrate all CRUD actions. Student implemented dynamic SPA routing to display components with specific content in addition to the basic routing. Student successfully used props to establish the two-way data flow between the components (pass data/functions down, pass actions up). Student took the effort to break down some parts of the UI into smaller, reusable components. | Student successfully developed a well-structured SPA that is fully integrated with the Supabase DB. Student created components that perform all CRUD actions. Student implemented dynamic SPA routing to display components with specific content in addition to the basic routing. Student successfully used props to establish the two-way data flow between the components (data/functions down, actions up). Student developed a maintainable app with the UI made up of smaller, reusable components.                                                                                                               |
| Implement status handling                                                                           | Databases, State Framework                                 | Student did not implement Pinia as a state management library or it was a wrong implementation.                                                                                                                                                                                                                                                                                            | Student has applied only one of the two stores (user or tasks). Student created a store and used it to control the state of the components/pages with only minor bugs.                                                                                                                                                                                                                                                                                                                                                                                              | The two proposed stores have been used. Student has implemented both stores to manage all the states given with either no bugs or minor bugs.                                                                                                                                                                                                                                                                                                                                                            | The student successfully implemented the two store managers and integrated this with all features and the Composition API. The student has used getters to select the data when applying it from the template. All of the states given are successfully managed with no bugs.                                                                                                                                                                                                                                                                                                                                            |
| Implement Authentication and Authorization                                                          | Databases, Client-side development                         | Student didn’t implement the authentication and authorization.                                                                                                                                                                                                                                                                                                                             | Student implemented the basic authentication and authorization. Student implemented sign-up, log-in and log-out, despite some minor bugs. Student partially secured the routes, with some pages being unprotected or unnecessarily protected.                                                                                                                                                                                                                                                                                                                       | Student adequately implemented the authentication and authorization. Student implemented sign-up, log-in and log-out features that are stable and bug-free. Student secured all SPA routes well, providing access to the parts of the application based on the authentication status.                                                                                                                                                                                                                    | Student successfully implemented the authentication and authorization. Student implemented sign-up, log-in and log-out features that are stable and bug-free. Student secured all SPA routes well, providing access to the parts of the application based on the authentication status. In addition, student incorporated a role-based authorization or social login.                                                                                                                                                                                                                                                    |
| Handle asynchronous operations using Promises or Async/await                                        | Intermediate JavaScript, Advanced JavaScript               | Student does not appear to possess a basic understanding of the promises and callback handling. The handling of the existing promises in the code is incomplete or non-functional.                                                                                                                                                                                                         | Student handled resolved promises appropriately. Student only partially implemented or missed implementing catch blocks for some promises. Student had difficulty chaining promises together.                                                                                                                                                                                                                                                                                                                                                                       | Student adequately handled all resolved and rejected promises and appropriately chained promises to execute asynchronous tasks in sequence. Nearly all promises have catch blocks with adequate error handling.                                                                                                                                                                                                                                                                                          | Student successfully handled all resolved and rejected promises and appropriately chained promises to execute asynchronous tasks in sequence. All promises have catch blocks with adequate error handling. Student successfully used advanced promise methods to coordinate the execution of multiple asynchronous operations.                                                                                                                                                                                                                                                                                           |
| Style the application’s UI using CSS or a CSS Framework                                             | Client-side development                                    | Student used basic layouts without CSS styles or branding.                                                                                                                                                                                                                                                                                                                                 | Student partially styled the application using CSS and simple branding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Student adequately styled the whole application using CSS or a CSS framework. Student made an obvious effort to create a pleasant and appealing user interface and maintain consistent application branding.                                                                                                                                                                                                                                                                                             | Student adequately styled the whole application using CSS or a CSS framework. Student made an obvious effort to create a pleasant and appealing user interface and maintain consistent application branding. Student implemented a fully responsive layout.                                                                                                                                                                                                                                                                                                                                                              |
| Write clean, modular, and efficient code following best practices                                   | Code Quality                                               | Student has not followed best practices in writing clean, modular and efficient code. Student has unused code in the project and functions that are considered too large or perform multiple tasks. Student has not followed a consistent approach in naming structure and organization of the files/folder. Student has not applied indentation conventions making the code hard to read. | Student has named files and folders for the backend and frontend logically and has organized them clearly and consistently. Student has partially applied indentation conventions to the source code and has mostly named functions and variables logically. Some unused code is within the projects.                                                                                                                                                                                                                                                               | Student has adequately named files and folders for the backend and frontend and has organized them clearly and consistently. Student has also applied indentation conventions to the source code and has named functions and variables logically. Student used destructuring to extract values from objects and arrays to enhance code readability. There is no unused code within the project and utility functions are contained in separate self-descriptive files.                                   | Student has adequately named all files and folders for the backend and frontend and has organized them clearly and consistently. Student has applied indentation conventions to the source code and was meticulous in commenting the code. Student has named functions and variables logically following the industry conventions. There is no unused code within the project and utility functions are contained in separate self-descriptive files. Student used destructuring, rest parameters and/or other ES+ features to enhance code readability. Student abstracted part of the application login into services. |
| Deploy a functioning app to a Cloud service                                                         | Client-side development                                    | Student failed to deploy an application to a predefined Cloud service. The application can’t be accessed through the publicly available URL and/or the error message is shown.                                                                                                                                                                                                             | Student deployed an application to a Cloud service but some of the application features not working. Some parts of the application UI can be accessed through the publicly available URL however some functionalities are not available or result in an error message being shown.                                                                                                                                                                                                                                                                                  | Student deployed an application to a Cloud service, with the app being fully operational. Some parts of the application UI can be accessed through the publicly available URL however some functionalities are not fully operational or have minor bugs.                                                                                                                                                                                                                                                 | Student successfully deployed an application to a Cloud service, with the app being fully operational. All parts of the application UI are accessible through the publicly available URL. The deployed application is fully operational and new deployments don’t cause interruptions.                                                                                                                                                                                                                                                                                                                                   |
| Save and track changes in the source code using Git and GitHub                                      | Version Control                                            | Student did not create a repository for an app or has less than one commit per day.                                                                                                                                                                                                                                                                                                        | Student created a repository for the app and is making at least one commit per day. However, commits made have unclear and ambiguous messages and student has not used separate branches for development and deployment.                                                                                                                                                                                                                                                                                                                                            | Student created a repository for the app and is making two or more commits per day. Student has used separate branches for development and deployment with clear and descriptive commit messages.                                                                                                                                                                                                                                                                                                        | Student created a repository for the app and is making two or more commits per day. Student used atomic commits to clearly state every change made, with accurate and precise descriptions. Student used separate branches for development and deployment and additional branches for working on the features.                                                                                                                                                                                                                                                                                                           |
| Document the application’s features, configuration and technical specifications                     | Career development                                         | Student did not make any attempt to document the project’s specifications.                                                                                                                                                                                                                                                                                                                 | Student provided a partially completed project README. Student has only partially documented application’s features, configuration or specifications in the README file.                                                                                                                                                                                                                                                                                                                                                                                            | Student has created a well-structured and clear README file that covers all of the application’s features, configuration and specifications. The student has included credits, clearly listing any collaborators, team members and resources used that contributed to the project.                                                                                                                                                                                                                       | Student has created a fully comprehensive and well-structured README file that not only clearly communicates the application’s features, configuration and specifications but goes into further detail justifying the choice for inclusion in the application. Student has added a license to the file and included credits, clearly listing any collaborators, team members and resources used that contributed to the project as well as badges.                                                                                                                                                                       |
| Practice communication, critical thinking, professionalism and teamwork skills                      | Career development                                         | Student did not make time or effort to communicate with others during standups or other activities. Student depended on others (teammates or teaching staff) to do the heavy thinking and most of the work. Student did not make the effort to assist others or collaborate in any way.                                                                                                    | Student communicated at times with others during standups but could be more clear and concise in their delivery. Student remained in their comfort zone by excluding themselves from conversations that would require teamwork skills and idea exchange during the development of the project.                                                                                                                                                                                                                                                                      | Student demonstrated clear communication skills and attended all standups. Student adhered to a level of professionalism by acting emotionally mature and engaged in teamwork skills by listening to others’ ideas while contributing their own.                                                                                                                                                                                                                                                         | Student impressively demonstrated clear communication skills during standups and contributed to group discussions, going out of their way to help other students in the group. Student adhered to a level of professionalism by acting emotionally mature and engaged in teamwork skills by listening to others’ ideas while contributing their own.                                                                                                                                                                                                                                                                     |
| Build a presentation and perform a demo to deliver your final results, or the results of your group | Career development                                         | Student did not present or demo their application or talk through their slides during the project presentations.                                                                                                                                                                                                                                                                           | Student presented and demoed their work but struggled with the timing and the rhythm of the presentation. Student had to skip or rush through certain slides to keep up with the time. Student struggled to deliver a clear message, leaving the audience confused.                                                                                                                                                                                                                                                                                                 | Student presented their work effectively. The presentation and demo appeared prepared and structured, conveying a clear message to the audience. Student used the allocated time effectively.                                                                                                                                                                                                                                                                                                            | Student presented their work impressively. The presentation and demo appeared very well prepared and structured, conveying a clear message to the audience. Student used the allocated time effectively. Student’s tone and storytelling were well aligned with the subject of the project. Student kept the audience in awe for the duration of the presentation and demo.                                                                                                                                                                                                                                              |



