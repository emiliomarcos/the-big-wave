import React from "react"

export default function Video({ link }) {
  return (
    <div>
      <iframe id="myvideo" title="video" width="800" height="400" src={link}>
      </iframe>
    </div>
  )
}
