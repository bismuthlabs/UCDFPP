'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react';
import TextareaForm from '@/components/form';
import Stories from '@/components/stories';
import JoinUs from '@/components/joinUs';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Voting from '../components/voting';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <Dialog>
      <DialogTrigger asChild>
        <Button variant={'link'} className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto underline lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            About this project
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
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            All rights reserved &copy; Bismuthlabs
          </span>
        </div>
      </div>

      <div className='absolute top-28 md:overflow-auto md:absolute p-4 lg:flex lg:justify-center lg:flex-col mb-32'>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <h1 className='text-xl uppercase mb-4 font-bold'>Unlocking Shopping Secrets: Why Didn't You Love Your Recent Fashion Purchase?.</h1>
        </div>
        <p>
          Please upvote 
          <span>
            <svg
              className='inline text-orange-500'
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={'none'}
              stroke={'currentColor'}
            >
              <path fill="currentColor" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12H15z"/></svg>  
          </span> 
           or downvote
           <span>
            <svg
              className='inline text-blue-500'
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={'none'}
              stroke={'currentColor'}
            >
              <path fill="currentColor" d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399L6.081 12H10V4h4v8h3.919L12 19.399z"/></svg>
           </span>
            each of the three reasons below
        </p>

        <div className="mb-24 grid lg:mb-0 lg:text-left">
          <Voting />          
          {/* Form Form Form Form */}
          <div className='my-20'>
            <div>
              <p>
                Have you encountered a situation where you made a clothing or shoe purchase and later felt dissatisfied with your decision? We welcome you to share your personal experiences or insights into the reasons why people face such situations.
              </p>
            </div>
            {/* Form */}
            <TextareaForm />
          </div>
          <div className='flex flex-col mb-20'>
            <h2 className="text-base font-semibold leading-7 text-gray-900 uppercase">Stories</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">People's experience, shared with us.</p>
            <div className='p-3 rounded-md bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
              <Stories />
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className="text-base font-semibold leading-7 text-gray-900 uppercase">Join Us</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 max-w-3xl">We are innovative team solving problems, seeking collaborators, and <span className='text-orange-400'>offering up to 60% discounts on our groundbreaking product for all.</span></p>
            <div className='p-3 mt-4 mb-32 rounded-md bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
            <h2 className="text-base font-medium leading-7 text-gray-900">Ways to join</h2>
            <JoinUs />
            </div>
          </div>
        </div>
        </div>
    </main>
  )
}