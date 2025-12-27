import React from 'react'

const Loading = () => {
  return (
    <div className="relative min-h-screen overflow-hidden  bg-white shadow-sm">
      {/* SHIMMER OVERLAY */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/60 to-transparent" />

      {/* IMAGE */}
      <div className="h-48 bg-gray-200 rounded-t-2xl" />

      {/* CONTENT */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />

        <div className="flex justify-between mt-4">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-10 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}

export default Loading
