import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { signUpFn } from '@/lib/auth'
import { cn } from '@/lib/utils'
import { useRouter } from '@tanstack/react-router'

type SignUpFormProps = {
  switchToLogIn: () => void
}
export function SignUpForm({ switchToLogIn }: SignUpFormProps) {
  const router = useRouter()
  return (
    <div className={cn('flex flex-col gap-6 max-w-xl mx-auto p-12')}>
      <Card>
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
          <CardDescription>
            Enter your email below to create your new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const formData = new FormData(e.target as HTMLFormElement)
              await signUpFn({
                data: {
                  email: formData.get('email') as string,
                  password: formData.get('password') as string,
                },
              })
              router.invalidate()
            }}
          >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input id="password" name="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>

                <FieldDescription className="text-center">
                  Already have an account?{' '}
                  <button onClick={switchToLogIn} className="underline">
                    Log In
                  </button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
