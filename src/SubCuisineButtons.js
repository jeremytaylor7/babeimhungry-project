import React from 'react'

export default function SubCuisineButtons(props) {

  return (
    <div className="sub-cuisine-container">
      {
        props.subCuisine[props.subIndex].map(item => {
          return <button key={item} onClick={(e) => { props.handleSubClick(e) }}> {item}</button>
        })}
    </div>
  )
}
//l