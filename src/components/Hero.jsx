import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col'>
      <nav className='flex justify-between items-center w-full pt-3 mb-10'>
        <div className='flex items-center'>
          <img src={logo} alt='SummAIze logo' className='w-8 h-6 object-contain' />
          <h1 className='logo_text w-28 object-contain'>SummAIze.</h1>
        </div>

        <button
          type='button'
          onClick={() => window.open('https://github.com/username')}
          className='black_btn'>
            Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='blue_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with SummAIze, an open-source article summarizer 
        that transforms lengthy articles into clear and concise summaries 
      </h2>
    </header>
  )
}

export default Hero