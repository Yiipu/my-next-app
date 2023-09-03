"use client"
import React, { useState } from 'react'

export function Counter({
  className,
}: {
  className?: string,
}) {

  const [count, setCount] = useState(0)

  return (
    <button
      className={className}
      onClick={() => setCount(count + 1)}
    >
      {count}
    </button>
  )
}
