"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"


export default function JoinUs() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmited] = useState(false);

  const onSubmitContact = async (e:any) => {
    e.preventDefault();
  };

    return (
        <>
            <fieldset>
                <div className="flex flex-co md:flex-row items-start mt-6 justify-between md:justify-normal md:gap-8">
                    <div className="flex items-center gap-x-3">
                        <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
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
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                As a team member
                            </label>
                        </div>
                        <div className="pl-3">
                        <Dialog>
      <DialogTrigger asChild>
        <Button variant={'link'} className="flex w-full justify-center border-gray-300 pb-6 lg:static lg:w-auto underline text-xs">
            Read conditions first
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-base font-semibold'>Understanding Customer Dissatisfaction in Fashion Product Purchases: A Comparative Analysis of In-Store and Online Shopping Experiences.</DialogTitle>
          <DialogDescription>
            <p className='mb-2'>
            Welcome to our research study! We are investigating a common issue that many people face when buying fashion products - the feeling of disappointment after making a purchase.
            </p>
            <p className='mb-2'>
            Whether it's in physical stores or online shopping, we want to understand why customers sometimes end up disliking the items they buy and what factors contribute to this problem.
            </p>
            <p>
            By uncovering these insights, we hope to find solutions that will make shopping a more enjoyable and satisfying experience for everyone. Your valuable input and participation in this research will help us make a positive impact on the world of fashion retail. Thank you for being a part of this journey!
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
                        </div>
                    </div>
                </div>
            </fieldset> 
            <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
                <Input type="email" placeholder="Your phone or email" />
                <Button type="submit" variant={'blue'}>Submit</Button>
            </div>
            <div className="border-t border-slate-300 mt-6">
                <p className="mt-3 text-sm leading-6 text-gray-600 max-w-3xl mb-4">We will be announcing updates on our research and products in our WhatsApp group.</p>
                <a href="#" className="rounded-md bg-blue-500 px-4 py-1 text-sm text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Join WhatsApp Group</a>
            </div>
        </>
    )
}