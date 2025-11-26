import { useMutation, useQuery } from '@tanstack/react-query'
import { getImageUrlFn, getUploadedImagesFn, uploadImageFn } from './bg-remover'

export const useUploadImage = () => useMutation({ mutationFn: uploadImageFn })

export const useUploads = () =>
  useQuery({
    queryKey: ['uploads'],
    queryFn: getUploadedImagesFn,
  })

export const useImageUrl = (name: string) =>
  useQuery({
    queryKey: ['image-url', name],
    queryFn: () => getImageUrlFn({ data: { name } }),
  })
