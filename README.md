# Introduction
This is the repository for 8th Standard Computer Exhibition projects at Saint Paul's School.  

## Files & Folders
- ***IMPORTANT!*** Go through the [workflow](#Workflow) to understand how you will be working on this project. 
- This is the [`README.md`](/README.md). 
- The [`budget.md`](/budget.md) file is for listing the components we will be using and their prices and links
- The [`AI` folder](/AI/) is for files concerning AI, so you may put appropriate files in those folers (by forking the repo and creating a pull request).
- The [`ATM` folder](/ATM/) is for files concerning the ATM project, so you may put appropriate files in those folers (by forking the repo and creating a pull request).
- The [`web` folder](/ATM/) is for files concerning the web portion (html, css & js), so you may put appropriate files in those folers (by forking the repo and creating a pull request).
	- The [`img` folder](/web/img) contains various images required for the webpages.
	- The [`anm` folder](/web/anm) contains css animations created by Haard, and they may be previewed by going to [https://dharmik2319.github.io/anm/css_effect_1/index.html](https://dharmik2319.github.io/anm/css_effect_1/index.html), where you may replace 1 with any number upto 21.

- In all these folders, there will be filler files named `filler`. You may remove them after you create atleast one other file in that folder.
- You can see a preview of the planned site [here](https://dharmik2319.github.io).
  
# A few Instructions
- First of all, sign in to [GitHub](https://github.com). I hope you know how to do that.
- Then, you may go [here](https://docs.github.com/en/get-started/quickstart/create-a-repo) and navigate using the pane on the left side, and go through everything until you understand. Make sure to visit [this](https://docs.github.com/en/get-started/quickstart/contributing-to-projects), as it will be the thing you will be doing the most.
- I would suggest you to install [GitHub Desktop](https://desktop.github.com/). This will give you the full power of `git` and GitHub, and allow you to revert to old commits, among other things.
- Some additional resources:
	- [Documentation for GitHub Desktop](https://docs.github.com/en/desktop)
	- https://www.freecodecamp.org/news/the-beginners-guide-to-git-github/ (no need to do the `git` part, you can just use the web version of github.)
	- https://medium.com/swlh/a-beginners-guide-to-github-e4747a93765c (this is also a good one, i had used it earlier.)
	- just try and be curious about all the things and you can even ask me, either here, using issues, or personally.
- For the MarkDown (.md file special formatting), you can use [this](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for help.

# Workflow
- This section describes the intended workflow for our project.
- This is the main repository, which is to be used and presented.
- To make changes, you need to [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
- By defualt, the name of the forked repository will be the same as the main one, which is `cs-exhibition`. You need to change this name to `cs-exhibition-yourname`, for example `cs-exhibition-raj`. This is to be done to make it easier to identify the owner of the repository.
- After you make major changes, and commits and test them and think that they are suitable and stable enough for merging, [create a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request).
- Wait for me (the maintainer and owner of the repo) to review these changes, make changes, if needed, and merge (accept) or reject your pull request.

# Guidelines for code stylization
- For indentation, use tabs, instead of spaces. You can search how to enable this on the internet.
- In braced languages like java, javascript and CSS, put braces on the same line.
- Example:
```javascript
function myFunc() {
	console.log("Hello")
}
``` 
- ⬆ This is recommended.
```javascript
function myfunc()
{
	console.log("hello")
}
```
- ⬆ This is not recommended.
- Use [camelCase](https://en.wikipedia.org/wiki/Camel_case) for identifiers. For example:
	- `helloWorld` <-- is recommended
	- basically first letter of first word lowercase, later word's initial uppercase.
- Comment your code thoroughly. This doesn't mean that you comment every single line. Commenting for things like variable declaration is useless; everyone can understand that much; Comment more complex parts of codes or for explanation of the use of a function, etc.

# License
Everything here is licensed under GPLv3. If someone has an issue with that, they can create a pull request or create an issue with a reason.
