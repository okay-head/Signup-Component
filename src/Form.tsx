import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorSvg from './components/ErrorSvg'
import ErrorMsg from './components/ErrorMsg'

export default function Form() {
  /*   type TForm = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
  } */

  /* An input field returns an empty string even when no input is provided. The required_error property in Zod triggers only if the field is not registered, not when it’s an empty string. */
  const formSchema = z.object({
    firstname: z.string().min(1, 'First name is required'),
    lastname: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email(),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be min 8 chars long'),
    checkbox: z.boolean(),
  })

  //single source of truth
  type TForm = z.infer<typeof formSchema>

  //initialising react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<TForm>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      checkbox: false,
    },
    resolver: zodResolver(formSchema),
  })

  //SumbitHandler is an imported 'type'
  const onSubmitHandler: SubmitHandler<TForm> = (data) => {
    console.log(data)
    alert('Form submitted successfully')
    reset() // reset the form
  }
  const onErrorHandler: SubmitErrorHandler<TForm> = (err) => console.error(err)

  const isChecked = watch('checkbox')
  console.log(isChecked)

  return (
    <form
      id='form'
      name='form'
      onSubmit={handleSubmit(onSubmitHandler, onErrorHandler)}
    >
      <div className='form-container shadow-custom flex flex-col gap-6 rounded-lg bg-white p-6 lg:p-10 lg:py-12'>
        {/* -- firstname -- */}
        <div className='relative'>
          {errors?.firstname && <ErrorSvg />}
          <input
            {...register('firstname')}
            className='form-formatting'
            type='text'
            name='firstname'
            id='firstname'
            placeholder='First name'
          />
          <ErrorMsg>{errors?.firstname?.message}</ErrorMsg>
        </div>

        {/* -- Lastname -- */}
        <div className='relative'>
          {errors?.lastname && <ErrorSvg />}
          <input
            {...register('lastname')}
            className='form-formatting'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Last name'
          />
          <ErrorMsg>{errors?.lastname?.message}</ErrorMsg>
        </div>

        {/* email */}
        <div className='relative'>
          {errors?.email && <ErrorSvg />}
          <input
            {...register('email')}
            className='form-formatting'
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
          />
          <ErrorMsg>{errors?.email?.message}</ErrorMsg>
        </div>

        {/* password */}
        <div className='relative'>
          {errors?.password && <ErrorSvg />}
          <input
            {...register('password')}
            className='form-formatting'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <ErrorMsg>{errors?.password?.message}</ErrorMsg>
        </div>

        <div>
          <button
            disabled={!isChecked}
            form='form'
            id='submit'
            className={`mx-auto w-full max-w-72 cursor-not-allowed rounded-md bg-gray-300 py-4 font-semibold uppercase outline-offset-2 focus-visible:shadow-none focus-visible:outline-2 lg:max-w-[unset] ${
              isChecked
                ? 'shadow-custom-2 !focus-visible:outline-accent-blue !cursor-pointer !bg-primary-green-600 hover:!bg-primary-green-300'
                : ''
            }`}
          >
            <span className='text-container mx-auto max-w-max'>
              Claim your free trial
            </span>
          </button>
        </div>
        <div className='mx-auto flex max-w-64 items-center text-sm font-medium text-neutral-grayBlue lg:max-w-[unset]'>
          <input
            {...register('checkbox')}
            type='checkbox'
            name='checkbox'
            id='checkbox'
            className='me-2 rounded-sm border-gray-300 text-accent-blue focus:ring-1 focus:ring-accent-blue'
          />
          <div>
            You agree to our{' '}
            <a
              href='https://www.termsfeed.com/public/uploads/2021/12/sample-privacy-policy-template.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer font-semibold text-primary-red outline-offset-2 outline-neutral-grayBlue hover:underline'
            >
              Terms and Services
            </a>
          </div>
        </div>
      </div>
    </form>
  )
}
