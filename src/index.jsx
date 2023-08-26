import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Hi() {
  return <div>
    <div className='w-[100vw] flex justify-left items-center gap-[1em] p-[1em_2em] bg-[#000b76] text-[#fff]'>
      <img src=""/>
      <h1 className='text-[1.5em]'>React Component Posts</h1>
    </div>
  </div>
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));