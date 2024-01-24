'use client';

import axios from 'axios';
import { ChangeEvent, useState } from 'react';

interface MyFormData {
  title: string;
  category: string;
  description: string;
}

const Form = () => {
  const [formData, setFormData] = useState<MyFormData>({
    title: '',
    category: 'others',
    description: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://forum-fixer-server.vercel.app/api/issue',
        formData
      );
      response;
    } catch (error) {
      error;
    }
  };

  return (
    <div className='mx-auto mt-10 max-w-md rounded-md bg-white p-6 shadow-md'>
      <h2 className='mb-6 text-2xl font-semibold'>Create a New Post</h2>

      <div className='mb-4'>
        <label
          htmlFor='title'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none'
          placeholder='Enter the title'
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='category'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          Category
        </label>
        <select
          id='category'
          name='category'
          className='w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='others'>Others</option>
          <option value='technology'>Technology</option>
          <option value='business'>Business</option>
          <option value='health'>Health</option>
          <option value='entertainment'>Entertainment</option>
        </select>
      </div>

      <div className='mb-4'>
        <label
          htmlFor='description'
          className='mb-2 block text-sm font-bold text-gray-700'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          rows={4}
          className='w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none'
          placeholder='Enter the description'
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button
        type='button'
        className='rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
