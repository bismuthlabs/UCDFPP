"use client"

import { Button } from "@/components/ui/button"
import { useState } from 'react';


export default function TextareaForm() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmited] = useState(false);

  const onSubmitContact = async (e:any) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm text-sm">Optional/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your name"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <div className="">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-sm pl-2 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  placeholder='Write your experience or write a reason'
                />
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">Note: What you write will be added after approval.</p>
            </div>
          </div>
            <div className="mt-4 flex items-center justify- gap-x-6">
            <Button type="submit" variant={'blue'}>Submit</Button>

            </div>
        </div>
      </div>
    </form>
  )
}


{/* 
<fieldset>
  <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
  <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
  <div className="mt-6 space-y-6">
    <div className="flex items-center gap-x-3">
      <input
        id="push-everything"
        name="push-notifications"
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
        Everything
      </label>
    </div>
    <div className="flex items-center gap-x-3">
      <input
        id="push-email"
        name="push-notifications"
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
        Same as email
      </label>
    </div>
    <div className="flex items-center gap-x-3">
      <input
        id="push-nothing"
        name="push-notifications"
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
        No push notifications
      </label>
    </div>
  </div>
</fieldset> 

*/}