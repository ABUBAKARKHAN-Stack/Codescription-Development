'use client'

import { AlertTriangleIcon, RefreshCwIcon, BookOpenIcon } from 'lucide-react'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function BlogError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Blog error:', error)
  }, [error])

  const getErrorMessage = (error: Error) => {
    if (error.message.includes('fetch')) {
      return 'Failed to load blog posts. Please check your internet connection.'
    }
    if (error.message.includes('404') || error.message.includes('not found')) {
      return 'The blog posts could not be found. They may have been moved or deleted.'
    }
    if (error.message.includes('timeout')) {
      return 'The request timed out while loading blog posts. Please try again.'
    }
    if (error.message.includes('network') || error.message.includes('ECONNREFUSED')) {
      return 'Network error occurred while fetching blog posts.'
    }
    if (error.message.includes('parse') || error.message.includes('JSON')) {
      return 'Error processing blog data. The content may be corrupted.'
    }
    
    return error.message || 'An unexpected error occurred while loading the blog.'
  }

  const getErrorSuggestions = (error: Error) => {
    if (error.message.includes('fetch') || error.message.includes('network')) {
      return [
        'Check your internet connection',
        'Try refreshing the page',
        'Wait a moment and try again'
      ]
    }
    if (error.message.includes('404')) {
      return [
        'Go back to the homepage',
        'Check if the URL is correct',
        'Browse other sections of the site'
      ]
    }
    
    return [
      'Try refreshing the page',
      'Clear your browser cache',
      'Contact support if the issue persists'
    ]
  }

  return (
    <main className="flex flex-col items-center justify-center py-20 text-center relative h-full min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 py-20">
      <div className="max-w-lg mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <AlertTriangleIcon className="size-20 text-red-400/80 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Failed to Load Blog Posts
          </h2>
          
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            {getErrorMessage(error)}
          </p>
          
       
          
          {/* Suggestions */}
          <div className="bg-white/5 rounded-lg p-4 mb-6 border border-white/10 text-left">
            <h3 className="text-sm font-medium text-white/80 mb-3">Try these solutions:</h3>
            <ul className="text-sm text-white/70 space-y-2">
              {getErrorSuggestions(error).map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-300 mr-2">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
            >
              <RefreshCwIcon className="size-4 mr-2" />
              Try Again
            </button>
            
            <button
              onClick={() => window.location.href = '/'}
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-500/80 hover:bg-purple-500 text-white font-medium rounded-lg transition-all duration-200"
            >
              <BookOpenIcon className="size-4 mr-2" />
              Browse Other Content
            </button>
          </div>
          
          <div className="inline-flex items-center text-sm text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10 mt-6">
            <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
            Blog Loading Error
          </div>
        </div>
      </div>
    </main>
  )
}