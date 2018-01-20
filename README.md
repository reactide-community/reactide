<p align="center"><a href='http://reactide.io/'><img alt="reactide" src="http://reactide.io/images/reactide-header.png" height="60%" width="60%"></a></p>

### Reactide is the first dedicated IDE for React web application development
Reactide is a cross-platform desktop application that offers a custom simulator, making build-tool and server configuration unnecessary. Reactide brings development back to the days where opening a single file instantly renders the project in the browser. With Reactide, developers can achieve the same simplicity with a single React JSX file while still utilizing the power of React.

#### Reactide is in active development. Please follow this repo for contribution guidelines and our development road map.

## 
<p align="center">
  <img alt="Reactide Screenshot" src="http://reactide.io.s3-website-us-west-1.amazonaws.com/images/reactide-screenshot2.png">
</p>

## How to start

To use reactide as it is now, follow this few steps.

Clone ```reactide``` repo and go into the project folder
- ```git clone https://github.com/reactide/reactide.git```
- ```cd ./reactide```

Install dependencies

```yarn install``` or ```npm install```

Create production build npm script and run it (or just use webpack in root of reactide repo)

```
"scripts": {
   "...": "...",
    "build": "webpack -p"
}
```

Finally, start reactide with ```yarn start``` or ```npm run start``` script

Reactide opens and if devtools is opened, it shouldn't have any errors

![screen shot 2017-04-07 at 10 46 21](https://cloud.githubusercontent.com/assets/7074196/24792753/9976c66e-1b7f-11e7-9ed6-b3651d3ad7a2.png)

Now, a new project can be created on the MenuBar

![screen shot 2017-04-07 at 10 43 39](https://cloud.githubusercontent.com/assets/7074196/24792791/be772b70-1b7f-11e7-8caa-3cf90f1bbfa1.png)

Then, it'd look like this:

![screen shot 2017-04-07 at 10 49 59](https://cloud.githubusercontent.com/assets/7074196/24792853/ffb8209e-1b7f-11e7-8b6e-8d670cd31bd6.png)

Any change made on src/components/App.js would be displayed on the simulator

## Get right to coding
Reactide runs an integrated Node server and custom browser simulator, which eliminates the need to configure servers, build-tools, and even offers hot module reloading right out of the box. Projects developed in Reactide are build-tool agnostic. As projects evolve, the developer only needs to add necessary dependencies without having to make decisions before coding has even started.

## State flow visualization
Managing state across a complex web of React components is the biggest pain point of developing React apps. Reactide offers the first visual editing solution for today's most powerful visual UI engine. By navigating through a live representation of  the architecture of a project, developers can quickly identify and jump to relevant components and edit them on the fly.

## Synchronized property and style controls
Code is the representation of user interfaces, but writing code rarely ever resembles it. By cross-utilizing Reactide’s tools, properties and styles can be edited through straightforward GUI controls that provide immediate feedback in the browser simulator. The cumbersome process of having to wait and transpile every minor edit to a project is now instant.

## Contributors
[Jin Choi](https://github.com/jinihendrix) | [Mark Marcelo](https://github.com/markmarcelo) | [Bita Djaghouri](https://github.com/bitadj)
