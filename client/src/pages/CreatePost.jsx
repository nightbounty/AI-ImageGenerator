import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';


const CreatePost = () => {
  // This will allow us to navigate back to the home page once the post is created
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  })
  // Using this while waiting to get back image from API
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

  }

  const handleChange = (e) => {

  }

  const handleSurpriseMe = () => {

  }
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
        Create imaginative and visually stunning images through DALL-E AI and share them with the community
        </p>
      </div>

      <form className='mt-16 max-w-3x1' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            LabelName="Your name"
            type='text'
            name='name'
            placeholder='John Doe'
            value={form.name}
            handleChange={handleChange}
          />
           <FormField 
            LabelName="Prompt"
            type='text'
            name='prompt'
            placeholder='A plush toy robot sitting against a yellow wall'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost