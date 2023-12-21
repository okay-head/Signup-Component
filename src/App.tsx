import Form from './Form'

export default function App() {
  return (
    // Main is the 'container' itself, therefore no separate component for adjusting margins is introduced

    <main className='main-bg min-h-screen bg-primary-red px-6 py-5 text-center text-white'>
      <section className='main-text'>
        <h1 className='mx-auto mb-6 mt-10 max-w-64 text-3xl font-bold'>
          Learn to code by watching others
        </h1>
        <p className='mx-auto max-w-xs font-semibold'>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className='form-component'>
        <div className='pricing shadow-custom mb-6 mt-12 rounded-xl bg-accent-blue py-4'>
          <div className='text-container mx-auto max-w-52 tracking-wide'>
            <b className='font-bold'>Try it free 7 days</b> then $20/mo.
            thereafter
          </div>
        </div>
        <Form />
      </section>
    </main>
  )
}
