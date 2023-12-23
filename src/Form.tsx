export default function Form() {
  return (
    <form>
      <div className='form-container shadow-custom flex flex-col gap-6 rounded-lg bg-white p-6 lg:p-10 lg:py-12'>
        <div>
          <input
            className='form-formatting'
            type='text'
            name='firstname'
            id='firstname'
            placeholder='First name'
          />
        </div>
        <div>
          <input
            className='form-formatting'
            type='text'
            name='lastname'
            id='lastname'
            placeholder='Last Name'
          />
        </div>
        <div>
          <input
            className='form-formatting'
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
          />{' '}
        </div>
        <div>
          <input
            className='form-formatting'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
        </div>

        <div>
          <button
            id='submit'
            className='shadow-custom-2 mx-auto w-full max-w-72 rounded-md bg-primary-green py-4 font-semibold uppercase outline-offset-2 focus-visible:shadow-none focus-visible:outline-2 focus-visible:outline-accent-blue lg:max-w-[unset]'
          >
            <span className='text-container mx-auto max-w-max'>
              Claim your free trial
            </span>
          </button>
        </div>
        <div className='mx-auto max-w-64 text-sm font-medium text-neutral-grayBlue lg:max-w-[unset]'>
          By clicking the button, you are agreeing to our{' '}
          <a
            href=''
            className='cursor-pointer font-semibold text-primary-red outline-offset-2 outline-neutral-grayBlue hover:underline'
          >
            Terms and Services
          </a>
        </div>
      </div>
    </form>
  )
}
