'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function ActionTrackDemo() {
  const [url, setUrl] = useState('')
  const [actions, setActions] = useState<string[]>([])
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false)

  useEffect(() => {
    // Check if the extension is installed
    if (window.chrome && chrome.runtime && chrome.runtime.sendMessage) {
      chrome.runtime.sendMessage(
        'extension-id-here', // Replace with your actual extension ID
        { action: 'checkInstalled' },
        (response) => {
          if (response && response.installed) {
            setIsExtensionInstalled(true)
          }
        }
      )
    }

    // Listen for messages from the extension
    window.addEventListener('message', (event) => {
      if (event.data.type === 'ACTION_TRACK') {
        setActions(prev => [...prev, `${new Date().toLocaleTimeString()}: ${event.data.action}`])
      }
    })

    return () => {
      window.removeEventListener('message', () => {})
    }
  }, [])

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url) {
      window.open(url, '_blank')
      setActions(prev => [...prev, `${new Date().toLocaleTimeString()}: Opened URL: ${url}`])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>ActionTrack Demo (Browser Extension)</CardTitle>
        </CardHeader>
        <CardContent>
          {!isExtensionInstalled && (
            <Alert className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Extension Not Detected</AlertTitle>
              <AlertDescription>
                Please install the ActionTrack Chrome extension to enable tracking.
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleUrlSubmit} className="space-y-4">
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">Enter a URL to track</label>
              <Input
                type="url"
                id="url"
                value={url}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className="mt-1"
              />
            </div>
            <Button type="submit" disabled={!isExtensionInstalled}>Open URL in New Tab</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Action Log</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 max-h-[300px] overflow-y-auto">
            {actions.map((action, index) => (
              <li key={index} className="text-sm">{action}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

