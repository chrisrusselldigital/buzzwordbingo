# Buzzword bingo

Visit Buzzword Bingo at: https://buzzwordbingo.herokuapp.com/

## Background

After hearing the same corporate buzzwords, over and over again, I wanted to:

- Create a product I could share with my work colleagues as a bit of fun but also to hopefully remove some corporate flannel
- End-to-end product development [see below](https://github.com/chrisrusselldigital/buzzwordbingo#product-design)
- Demonstrate building a product in an "agile" manner

***

## Stuff worth noting/I've learned

#### Tech stuff

- Deploying to Heroku without a language isn't possible: https://medium.com/@winnieliang/how-to-run-a-simple-html-css-javascript-application-on-heroku-4e664c541b0b
- Writing good commit messages: https://chris.beams.io/posts/git-commit/
- Git README.md markdown: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
- Guide to git: https://rogerdudler.github.io/git-guide/
- Adding cool icons to git commits https://gist.github.com/rxaviers/7360908

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

For new features, please see [Trello board](https://trello.com/b/RHlIb3jD/buzzword-bingo)

- [x] Create Trello board to list and prioritise new features
- [x] Fix favicon
- [x] Change checkboxes to css strikethrough
- [x] GTM/Google Analytics
- [x] Basic GTM container
- [x] GA pageview

## Product design

- Develop a software product
- implement data tools (dataLayer & Google Analytics), once there's enough data, stream that data into something like BigQuery and analyse using (for example) Python
- Add the "why" of each aspect of the product

![buzzwordbingo product design](https://github.com/chrisrusselldigital/buzzwordbingo/blob/master/product-design.jpg)

## A neater version...

|               | Website       | Analytics implementation | Pipeline  | Reporting          |
| ------------- | ------------- | ------------------------ | --------- | ------------------ |
| Things        | HTML          | Google Analytics         | BigQuery  | Python             |
| to            | CSS           | Google Tag Manager       |   SQL     | Jupyter            |
| learn/do      | JS / DOM      | dataLayer                |           | Google Data Studio |
|               | Heroku        | Custom Dimensions        |           |                    |
|               | Git/Github    |                          |           |                    |
