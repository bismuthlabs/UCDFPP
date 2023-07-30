"use client"

import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { db } from "@/app/firebase/config";
import { useToast } from "@/components/ui/use-toast";
import { collection, addDoc } from "firebase/firestore";

export default function TextareaForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const contactRef = collection(db, 'experiences');

  const onSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check if the name and message are not empty
    if (!message) {
      alert("Please Fill in your message before submitting.");
      return;
    }

    try {
      // Send the form data to Firebase
      const docRef = await addDoc(contactRef, {
        name,
        message,
      });


      // Reset the form fields and set the submitted state to true
      setName('');
      setMessage('');
      setSubmitted(true);

      // Display a success toast
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={onSubmitContact}>
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
                    className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                  className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-sm pl-2 sm:text-sm sm:leading-6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Write your experience or write a reason'
                />
              </div>
              {/* <p className="mt-2 text-xs leading-6 text-gray-600">We promise not to judge your spelling or grammar! 🚀🌟.</p> */}
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
