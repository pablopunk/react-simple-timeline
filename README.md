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
<Timeline stories=[
  {
    "title": "Dunder Mifflin",
    "subtitle": "Regional Manager",
    "date": "Since 2013",
    "link": "http://3.bp.blogspot.com/-y4J3OvYQNNw/U1xfaJ5TJoI/AAAAAAAACvM/WfI5W9vfT2A/s1600/Dwight.jpg"
  },
  {
    "title": "Dunder Mifflin",
    "subtitle": "Assistant Regional Manager",
    "date": "Since 2005",
    "link": "https://vignette.wikia.nocookie.net/theoffice/images/e/e5/Maxresdefault.jpg/revision/latest?cb=20170626225717"
  },
  {
    "title": "Schrute Farms",
    "subtitle": "Mose's cousin",
    "date": "Since ever",
    "link": "https://theflatearthsociety.org/home/"
  }
] />
```

<img width=300 src="https://github.com/pablopunk/art/raw/master/react-simple-timeline/dwight.png" />

### Options

* Fade

For a beautiful animation, use the prop `fade`. It will fade in each element, in order.

```jsx
<Timeline fade stories={stories} />
```

## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

