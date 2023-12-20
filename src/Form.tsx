export default function Form() {
  return (
    <form>
      <div className='form-container flex flex-col gap-6'>
        <div>
          <input
            type='text'
            name='firstname'
            id='firstname'
            placeholder='firstname'
          />{' '}
        </div>
        <div>
          <input
            type='text'
            name='lastname'
            id='lastname'
            placeholder='lastname'
          />{' '}
        </div>
        <div>
          <input type='email' name='email' id='email' placeholder='email' />{' '}
        </div>
        <div>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='password'
          />{' '}
        </div>
      </div>
    </form>
  )
}
