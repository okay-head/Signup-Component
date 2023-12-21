export default function Form() {
  return (
    <form>
      <div className='form-container shadow-custom flex flex-col gap-6 rounded-lg bg-white p-6'>
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
            className='shadow-custom-2 w-full rounded-md bg-primary-green py-4 font-semibold uppercase'
          >
            <span className='text-container mx-auto max-w-max'>
              Claim your free trial
            </span>
          </button>
        </div>
        <div className='mx-auto max-w-64 text-sm font-medium text-neutral-grayBlue'>
          By clicking the button, you are agreeing to our{' '}
          <span className='cursor-pointer font-semibold text-primary-red hover:underline'>
            Terms and Services
          </span>
        </div>
      </div>
    </form>
  )
}
