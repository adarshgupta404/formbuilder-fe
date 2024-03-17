"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Errorpage = ({error}:{error:Error}) => {
    useEffect(()=>{
        console.log(error)
    }, [error])
  return (
    <div className='flex w-full h-full flex-col justify-center items-center'>
      <div className=" text-destructive text-4xl font-bold mb-2">Something went wrong!</div>
      <Button asChild>
        <Link href={"/"}>Go Back to home</Link>
      </Button>
    </div>
  )
}

export default Errorpage
