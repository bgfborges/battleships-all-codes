# Love Naval Battle - FRONTEND REACT

A project where you with your beloved girl (or guy) can decide the future choirs or boring activities with fun and love. This project goals to be only a portfolio as NodeJS and React developer.  

This software development was made without the help of any other software - with the goal of understanding the concepts and being able to know how to solve the problems with creativity, for this study purpose there wasn't seen any kind of material of battleships clones.  

Anyway, all the concepts used here was taken from the Rocketseat course explaning the main concepts - what was applied.

## Interesting Technical Goals

<ul>
    <li>Backend - NODEJS (API with Express) - (Here the Repository)</li>
    <li>Frontend - ReactJS</li>
</ul>

In this Repository for the the ReactJS, we will practice the following topics:

<ol>
    <li>Functional Components</li>
    <li>Hooks</li>
    <li>Contexts</li>
    <li>Routes</li>
    <li>CSS</li>
</ol>

## Steps to Develop the Project

<ol>
    <li>Init the project with Yarn</li>
    <li>Install React and React-Dom</li>
    <li>Install and Setup Babel as Development Dependency</li>
    <li>Install and Setup Webpack as Development Dependency</li>
    <li>Create the React Structure to Visualize the Project</li>
    <li>Create the Source Map to Visualize the code on Webpack</li>
    <li>Install html-webpack-plugin to refer to the js main file</li>
    <li>Setup Running on Development or Production Mode</li>
    <li>Setup CSS - Style-Loader, Css-Loader</li>
    <li>Install styled-components</li>
    <li>Create Global CSS Style in standard CSS only to demonstrate</li>
    <li>Create the Basic Template Structure</li>
    <li>Create the Battleships Tables</li>
    <li>Create the Battleships Squares and Append Dynamically with the keys - A1, A2...</li>
</ol>

<img src="https://i.postimg.cc/8CmjCqWP/Screen-Shot-2022-04-07-at-13-10-40.png" width="100%" alt="First Screen Demonstration" />

Now, with the HTML, CSS and JS Static Structure, we need to start the dynamic structure for the ships and it's location.  

And, on this step, firstly, we will practice the following concepts:

## Imutability Concept - Hook

We will use the concept of immutability in the React to firstly set the clicked squares in target on the adversary table from the Battleships. This is a present concept in the functional programming, and offer a good performance to the app.

With the Squares already being clicked and target, inside a useState (which will be got from the API further), we need to also make possible to make the position of the ships (first locally also inside an use effect, and then also further get from the API).

To make the ships sizes, we will follow the rules of this model: <a href="https://cdn.free-printable-paper.com/images/large/printable-battleship-game.png" target="_blank">Ship Size Rules</a>

The following rules will be made to position of ship:

<ol>
    <li>Create the ship object at useState with three properties:</li>
    <li>Ship name</li>
    <li>Ship Size - number of squares</li>
    <li>Ship rotation - horizontal or vertical</li>
    <li>Ship location - position of squares</li>
</ol>

Funcionalities:

<ol>
    <li>Append the Ship Location based on its "l" attribure.</li>
    <li>Function to decide if vertical or horizontal based on "r" attribude.</li>
    <li>Function to decide if the ship's part is top of ship or bottom - and round it.</li>
</ol>

Menu:

<ol>
    <li>Create the Menu Structure to Start the others pages</li>
</ol>

Reformulate the Dashboard Game

<img src="https://i.postimg.cc/Gmp9GpmH/Screen-Shot-2022-04-08-at-14-48-54.png" width="100%" alt="Second Screen Demonstration" />

## Time to Change - Refactorating the code to TypeScript

On our project goal, we desired to develop the code with JavaScript for technical studying, and the, studying for learning, practice how to refactory a JavaScript code to TypeScript code and have all this benefities.


## Learning Method - The Great Leap (Rocketseat)

This project has as base the Rocketseat Learning Method, for me to practice the concepts from this project. On this, The Great Leap is the main base of learning.  

<ol>
    <li>Focus</li>
    <li>Practice</li>
    <li>Group</li>
</ol>

### Focus

With the big amount of fields on the programming world, to have focus at some sides is the main important thing. On this way, with our goal of practicing ReactJS and NodeJS, we created the two repositories: the ReactJS with the Front-end of our App, and the NodeJS, with our Back-end repository.

### Practice

The practice step was to apply all the knowledge on the concepts from the Rocketseat Ignore 2021 to the application, without the help of external clones, but with all the help of each concept choosen to solve the problems.

### Group

The Rocketseat Discord Group is the place where I used to share my project, receive feedbacks, as well as external contacts outside the programming world - to be aware of how the final users see the solutions on the project.
