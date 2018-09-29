# ITCCWebsite
## Learning
Our website uses React and Redux. There is a great tutorial on [freeCodeCamp](https://www.freecodecamp.org/) for both [React](https://learn.freecodecamp.org/front-end-libraries/react) and [Redux](https://learn.freecodecamp.org/front-end-libraries/redux/) as well as [their integration](https://learn.freecodecamp.org/front-end-libraries/react-and-redux/). Aaron has also shared several learning resources:
- https://www.codecademy.com/learn/react-101
- https://www.youtube.com/watch?v=-AbaV3nrw6E&list=PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA
- https://hackr.io/tutorials/learn-redux
- https://reactjs.org/

We will also be using git at the command line, so go through [this tutorial](https://www.codecademy.com/learn/learn-the-command-line) on the command line interface
and use [this article](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html) as a reference for the git commands.

Please go through these to learn or refresh your knowledge before contributing to the website.

## Installing ReactJS on Linux
(If you are running Windows, I would suggest using [this link](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to set up a Linux subsystem on your computer.)

This explains how to install Node.js and NPM. Node.js is a Javascript run-time environment that allow us to execute Javascript code like if we were working on a server. NPM is a package manager for Javascript.

1. Install curl:
`sudo apt-get install curl`

2. Install Node:
`curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`

3. Install Node.js:
`sudo apt-get install -y nodejs`

At this point, you should be able to type `node -v` and `npm -v` and see their versions.

4. Install build-essential:
`sudo apt-get install -y build-essential`

## Cloning the Repository
First, make sure you have git installed. On the linux subsystem, run the following commands:
* `sudo apt-get install git`
* Configure your account for contributing using your GitHub login information:
	* `git config --global user.name "YOUR_USERNAME"` sets your username
	* `git config --global user.email "your_email_address@example.com"` sets your email address

Now that everything is installed, you need to clone the repository and get the app running.
1. Change into the folder where you want the app to live (e.g. if you are using the linux subsystem and want the app to be on your desktop, you would
  type `cd /mnt/c/Users/[your username]/Desktop`).
2. Clone the repository using `sudo git clone https://github.com/laurarnichols/ITCCWebsite.git`.
3. Change into the cloned repository using `cd ITCCWebsite`.
4. Run `npm install`. This will install all of the necessary dependencies. This may take several minutes to complete.
5. Now you should be able to run `npm start` to test the site.

## Contributing
1. Before you start a project, use `git pull origin` to get an up-to-date version of the code.
2. To make changes, first go to the dev branch using `git checkout dev`
3. Then, create a new branch using `git checkout -b NAME-OF-BRANCH`. You can also switch to an existing branch
   using `git checkout NAME-OF-BRANCH`.
4. You can now make changes to files and git will track the changes. At any point, you can use `git status` to see what files you have changed.
5. Each time you change a file, create a commit:
	* Stage the file or folder using `git add FILE OR FOLDER`. 
	* Complete commit using `git commit -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"`. 
	* Push the changes from your local clone to the origin (what you see online) using `git push origin NAME-OF-BRANCH`.
	* If you mistakely commit something, you can revert (undo) the last commit using `git revert HEAD`.
6. To merge your code, get online and submit a pull request from your branch to dev which will be our working branch.
7. Once the pull request is merged, the branch will be deleted, so to make new changes, start at 1.

__Important__: The master branch holds the production copy of our code, so you should never branch off of it or push changes to it. Always start
on the development (dev) branch before branching to create changes. To check this, type `git branch` and make sure dev has a star by it.

### Useful commands
Here is a simple list of useful commands when contributing with git:
* `git pull origin` gets updates from the central copy
* `git checkout NAME-OF-BRANCH` changes to an existing branch
* `git checkout -b NAME-OF-BRANCH` creates a new branch and changes to it
* `git status` shows all files that have been changed or added to be committed
* `git add FILE OR FOLDER` stages changes to be committed
* `git commit -m "COMMENT TO DESCRIBE THE INTENTION OF THE COMMIT"` makes the change official on your local copy
* `git push origin NAME-OF-BRANCH` updates the central copy
* `git revert HEAD` undoes the last commit on a branch
* `git branch` lists the branches you have on your local copy; there will be a star by the branch your are currently on
* `git branch -d NAME-OF-BRANCH` will delete a given branch
* `git diff` shows the difference between local, unstaged changes and the official (pulled or committed) version
* `git checkout -- NAME-OF-FILE` deletes changes to a given file that have not been staged to commit
* `git checkout .` deletes all local changes in the repository that have not been added to the staging area
* `git clean -f` deletes untracked changes
* `git reset .` removes files from staging area before they have been committed

## Developing (Testing)
We are using test driven development (TDD), so when you start working on a new component, you should follow these steps:
* Create a task documentation with the following elements
	- High-level design -- Define what you are going to implement. This should be given on the issue you are working on.
	- Task breakdown -- Break your task down into individual subtasks (best put in checklist form)
	- Low-level design -- Think through what code you actually need to write (i.e. loops or functions). 
	- Notes and resources -- Take notes as you are working through your issue and post links to useful websites, or note issues 
	  you are having along with possible solutions.
* Unit test -- Write a test for the expected behavior of your component. Your test should fail before you start on your issue and should
  live in `COMPONENT-FOLDER/__tests__/COMPONENT-NAME.unit.test`. As an example, the test for the checklist portion of the about splunk page
  would be `AboutSplunkPage/__tests__/ReviewChecklist.unit.test`. You can find a template for a component with different tests in the 
  `src/components/Template/` folder.
* Coding -- Actually write the code necessary for your component.
* Testing -- Run your test. To run just your test use `npm test -t 'YOUR-TEST-NAME'`. 
* Continue to cycle through coding and testing until your test passes.
* Final test -- Run `npm test` to run all tests and make sure your addition didn't break any of the other tests.
* Comment code -- Make sure your code is commented thoroughly.
* Push code and submit pull request -- Send the code to origin using `git push origin NAME-OF-BRANCH` and submit a pull request online
* Make sure all items on the pull request checklist are finished before requesting a code review.

## Dependencies
In case something goes wrong with running `npm install` this is a list of all the needed dependencies for our app.
### Redux
In order to use Redux to manage the state of your React App, you must install the required packages using the following commands:
* `npm i ajv`
* `npm i redux`
* `npm i react-redux`
* `npm i redux-thunk`

### Bootstrap
In order to get bootstrap to work we have to install the required packages:
* `npm i popper.js`
* `npm i dom-helpers`
* `sudo npm i jquery`
* `npm i react-bootstrap`
* `npm i bootstrap@3.3.7`
* `npm i reactstrap`
* `npm i font-awesome`

### Other 
* `npm i react-scroll-up-button` for scroll up button
* `npm i react-alice-carousel` for news carousel
* `npm i axios` for axios
* `npm i validator` for validator
* `npm i react-validation` for validator
* `npm i lodash.omit` for validator
* `npm i react-player` for video player
* `npm i papaparse` for csv parsing
* `npm i xlsx` for xlsx parsing

