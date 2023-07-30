"use client"

import { Button } from "@/components/ui/button";
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export default function JoinUs() {
  const [contact, setContact] = useState('');
  const [selectedOption, setSelectedOption] = useState<'early-customer' | 'team-member'>('early-customer');
  const [submitted, setSubmitted] = useState(false);

  const joinUsRef = collection(db, 'joined');

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: Check if the name and contact is not empty
    if (!contact) {
      alert("Please enter your email or phone number.");
      return;
    }

    try {
      // Send the form data to Firebase
      const docRef = await addDoc(joinUsRef, {
        contact,
        option: selectedOption,
      });

      // Reset the form fields and set the submitted state to true
      setContact('');
      setSelectedOption('early-customer');
      setSubmitted(true);

      // Display a success toast
      alert("Successfully sent. Thanks for your participation!");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <fieldset>
        <div className="flex flex-co md:flex-row items-start mt-6 justify-between md:justify-normal md:gap-8">
          <div className="flex items-center gap-x-3">
            <input
              id="push-everything"
              name="option"
              type="radio"
              value="early-customer"
              checked={selectedOption === 'early-customer'}
              onChange={() => setSelectedOption('early-customer')}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
              As an early customer
            </label>
          </div>
          <div className="flex items-center gap-x-3 flex-col">
            <div className="flex items-center gap-x-3">
              <input
                id="push-email"
                name="option"
                type="radio"
                value="team-member"
                checked={selectedOption === 'team-member'}
                onChange={() => setSelectedOption('team-member')}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                As a team member
              </label>
            </div>
            <div className="pl-3">
              <Dialog>
                {/* Rest of the dialog code */}
              </Dialog>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email or phone"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-1 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Submit
        </button>
      </div>
      <div className="border-t border-slate-300 mt-6">
        <p className="mt-3 text-sm leading-6 text-gray-600 max-w-3xl mb-4">We will be announcing updates on our research and products in our WhatsApp group.</p>
        <a href="#" className="rounded-md bg-blue-500 px-4 py-1 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Join WhatsApp Group</a>
      </div>
    </form>
  );
}
