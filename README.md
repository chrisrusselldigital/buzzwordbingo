# Buzzword bingo

Visit Buzzword Bingo at: https://buzzwordbingo.herokuapp.com/

## Background

After hearing the same corporate buzzwords, over and over again, I wanted to:

- Create a product I could share with my work colleagues as a bit of fun but also to hopefully remove some corporate flannel
- End-to-end product development (see below)
- Demonstrate building a product in an "agile" manner

***

## Stuff worth noting/I've learned

#### Tech stuff

- Deploying to Heroku without a language isn't possible: https://medium.com/@winnieliang/how-to-run-a-simple-html-css-javascript-application-on-heroku-4e664c541b0b
- Writing good commit messages: https://chris.beams.io/posts/git-commit/
- Git README.md markdown: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
- Guide to git: https://rogerdudler.github.io/git-guide/

#### Other stuff

- Favicon generator: https://favicon.io/


#### Learning and mindset

- Having someone who's expecting things to get done is super valuable (thanks to https://github.com/Kevinjohn)
- Taking some time off writing code can increase 'ah-ha' moments

## Features at launch

- [x] Submit 6 buzzwords
- [x] Display buzzword on page
- [x] Cross buzzwords off one by one
- [x] Once all buzzwords have been crossed off the game is over

## Future Features

- [x] Fix favicon
- [x] Change checkboxes to css strikethrough
- [x] GTM/Google Analytics
- [x] Basic GTM container
- [x] GA pageview
- Fix odd CSS onClick behaviour (where user isn't able to click a buzzword one the first go)
- increase buzzword font size
- Create Trello board to list and prioritise new features
- Add a domain
- Use unobtrusive JS (e.g. remove direct JS function calls in HTML)
- Add buzzwords to a custom dimension in Google Analytics
- Add delay to end of game alert, after final checkbox is completed
- Add css design
- Prevent the start of a game until there are 6 number of keywords
- Add front end tests with Cypress
- Add Unit tests with Jasmine
- Make JS Object Oriented

## Product design

- Develop a software product
- implement data tools (dataLayer & Google Analytics), once there's enough data, stream that data into something like BigQuery and analyse using (for example) Python
- Add the "why" of each aspect of the product

![buzzwordbingo product design](https://github.com/chrisrusselldigital/buzzwordbingo/blob/master/product-design.jpg)
