import React from "react"

export default function Video(props) {
  return (
    <div>
      {/* <iframe title="video" width="800" height="400" src="https://www.youtube.com/embed/pdGqoO-s_sg?autoplay=1&amp;mute=1&amp;controls=0">
      </iframe> */}
      <iframe title="video" width="800" height="400" src={props.link}>
      </iframe>
    </div>
  )
}
