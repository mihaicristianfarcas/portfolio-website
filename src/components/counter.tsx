'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  const decrement = () => setCount(c => c - 1)

  // TODO check these icons
  return (
    <div className='flex items-center gap-4'>
      <Button size='icon' onClick={decrement}>
        <MinusIcon />
      </Button>
      <p> Current: {count} </p>
      <Button size='icon' onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  )
}
