# react-simple-timeline

<p align="center">
  <a href="https://travis-ci.org/pablopunk/react-simple-timeline"><img src="https://img.shields.io/travis/pablopunk/react-simple-timeline.svg" /> </a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/react-simple-timeline"><img src="https://img.shields.io/npm/dt/react-simple-timeline.svg" /></a>
</p>

<p align="center">
  <i>Simple and responsive timeline component for React</i>
</p>


## Install

```sh
npm install react-simple-timeline
```


## Usage

```js
import Timeline from 'react-simple-timeline'

//...

<h1>Dwigth Schrute</h1>
<Timeline stories={[
  {
    'title': 'Dunder Mifflin',
    'subtitle': 'Regional Manager',
    'date': 'Since 2013',
    'link': 'http://3.bp.blogspot.com/-y4J3OvYQNNw/U1xfaJ5TJoI/AAAAAAAACvM/WfI5W9vfT2A/s1600/Dwight.jpg',
    'image': 'https://vignette.wikia.nocookie.net/theoffice/images/c/cd/Dwight_Schrute.jpg/revision/latest?cb=20110105114630'
  },
  {
    'title': 'Dunder Mifflin',
    'subtitle': 'Assistant Regional Manager',
    'date': 'Since 2005',
    'link': 'https://vignette.wikia.nocookie.net/theoffice/images/e/e5/Maxresdefault.jpg/revision/latest?cb=20170626225717',
    'image': 'https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT.jpeg'
  },
  {
    'title': 'Schrute Farms',
    'subtitle': "Mose's cousin",
    'date': 'Since ever',
    'link': 'https://theflatearthsociety.org/home/',
    'image': 'https://pbs.twimg.com/profile_images/3057210206/8fb1263ac03ea384caf4765b5d6660f2.png'
  }
]} />
```

<img width=300 src="https://github.com/pablopunk/art/raw/master/react-simple-timeline/dwight.png" />

### Options

* Fade

For a beautiful animation, use the prop `fade`. It will fade in each element, in order.

```jsx
<Timeline fade stories={stories} />
```


## Contribute

Clone the repo and create a simple react project where you use this component:

```sh
$ cd your-project/                   # Your project folder
$ npm install react-simple-timeline  # Install dep
$ npm link ../path/to/component/repo # Link the cloned repo
$ cd ../path/to/component/repo       # This repo folder
$ npm run dev                        # Build and watch for changes
```

Make your changes and run the tests:

```sh
$ npm test
```

Now you're ready to make the Pull Request.


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

