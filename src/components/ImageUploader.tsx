'use client'

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from '@/components/ui/shadcn-io/dropzone'
import { useUploadImage } from '@/lib/query'
import { Card } from './ui/card'
import { Spinner } from './ui/spinner'
import { FileCheck, FileWarning } from 'lucide-react'
import { Button } from './ui/button'

const ImageUploader = () => {
  const { mutate, status, error, reset } = useUploadImage()

  const handleDrop = async (files: File[]) => {
    const file = files[0]
    const arrayBuffer = await file.arrayBuffer()
    const unit8Array = new Uint8Array(arrayBuffer)
    mutate({
      data: {
        file: unit8Array,
        contenType: file.type,
      },
    })
  }

  return (
    <div className="max-w-xl mx-auto">
      {status === 'idle' && (
        <Dropzone
          className="aspect-video"
          accept={{ 'image/*': [] }}
          onDrop={handleDrop}
          onError={console.error}
        >
          <DropzoneEmptyState />
          <DropzoneContent />
        </Dropzone>
      )}
      {status === 'pending' && (
        <Card className="flex items-center justify-center aspect-video">
          <Spinner className="size-12" />
          Uploading...
        </Card>
      )}
      {status === 'success' && (
        <Card className="flex items-center justify-center aspect-video">
          <FileCheck className="size-12" />
          Successfully uploaded image.
        </Card>
      )}
      {status === 'error' && (
        <Card className="flex items-center justify-center aspect-video">
          <FileWarning className="size-12" />
          Error while uploading the image.
          <pre className="whitespace-pre-wrap mx-4 bg-muted p-2 rounded">
            {error?.message}
          </pre>
          <Button onClick={reset}>Retry</Button>
        </Card>
      )}
    </div>
  )
}
export default ImageUploader
