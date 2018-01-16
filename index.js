import React from 'react'
import FadeIn from 'react-fade-in'

const wrapper = fade =>
  fade
    ? ({ children }) => <FadeIn>{children}</FadeIn>
    : ({ children }) => <div>{children}</div>

export default class extends React.Component {
  render () {
    const FadeOrNot = wrapper(this.props.fade)

    return (
      <div>
        <div className='wrap-relative'>
          <div className='stories'>
            <FadeOrNot className={this.props.fade ? 'story-fade' : ''}>
              {this.props.stories.map((story, i) => (
                <div key={i} className='story'>
                  <a href={story.link} className='story-link'>
                    <div className='story-title'>{story.title}</div>
                  </a>
                  <div className='story-subtitle'>{story.subtitle}</div>
                  <div className='story-date'>{story.date}</div>
                </div>
              ))}
            </FadeOrNot>
          </div>
        </div>
        <style jsx>{`
          .wrap-relative {
            position: relative;
          }
          .stories:after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            bottom: 0;
            left: 50%;
            border-left: 1px solid #ddd;
            transform: translate(-50%);
          }
          .story {
            border: 1px solid #eee;
            border-radius: 5px;
            margin: 0.5em 0 2em 0;
            padding: 1em;
            width: 200px;
            background-color: white;
            z-index: 9;
          }
          .story-title {
            font-size: 1em;
          }
          .story-subtitle {
            font-size: 0.85em;
            color: #555;
          }
          .story-date {
            font-size: 0.85em;
            color: #888;
          }
          @media (max-width: 768px) {
            .story {
              width: 65vw;
            }
            .story-title {
              font-size: 1.2em;
            }
            .story-subtitle {
              font-size: 1em;
            }
            .story-date {
              font-size: 1em;
            }
          }
        `}</style>
      </div>
    )
  }
}
