import { useMutation } from '@tanstack/react-query'
import { uploadImageFn } from './bg-remover'

export const useUploadImage = () => useMutation({ mutationFn: uploadImageFn })
