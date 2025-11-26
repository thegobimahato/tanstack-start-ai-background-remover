import { createServerFn } from '@tanstack/react-start'
import z from 'zod'
import { getSupabaseServerClient } from './supabase'

const getUserId = async () => {
  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    throw new Error('Not Authenticated')
  }
  return data.user.id
}

const fileDataSchema = z.instanceof(Uint8Array)

export const uploadImageFn = createServerFn({ method: 'POST' })
  .inputValidator(z.object({ file: fileDataSchema, contenType: z.string() }))
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const userId = await getUserId()
    const fileName = crypto.randomUUID()
    const filePath = `${userId}/${fileName}`
    const { error } = await supabase.storage
      .from('images')
      .upload(filePath, data.file, { contentType: data.contenType })
    if (error) throw new Error(error.message)
    // return fileName
  })

export const getUploadedImagesFn = createServerFn().handler(async () => {
  const supabase = getSupabaseServerClient()
  const userId = await getUserId()
  const { error, data } = await supabase.storage.from('images').list(userId)
  if (error) throw new Error(error.message)
  return data
})

export const getImageUrlFn = createServerFn()
  .inputValidator(z.object({ name: z.string() }))
  .handler(async ({ data }) => {
    const supabase = getSupabaseServerClient()
    const userId = await getUserId()
    const fileName = data.name
    const filePath = `${userId}/${fileName}`
    const { error, data: result } = await supabase.storage
      .from('images')
      .createSignedUrl(filePath, 60 * 60)
    if (error) throw new Error(error.message)
    return result.signedUrl
  })
