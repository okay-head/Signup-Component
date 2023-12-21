import Form from './Form'

export default function App() {
  return (
    // Main is the 'container' itself, therefore no separate component for adjusting margins is introduced

    <main className='main-bg min-h-screen bg-primary-red px-6 pb-10 pt-5 text-center text-white lg:px-12'>
      <div className='content-container items-center gap-8 lg:flex max-w-screen-xl mx-auto xl:gap-0 xl:justify-around'>
        <section className='main-text lg:text-left'>
          <h1 className='xs:max-w-lg mx-auto mb-6 mt-10 max-w-64 text-3xl font-bold sm:text-4xl lg:text-5xl'>
            Learn to code by watching others
          </h1>
          <p className='xs:max-w-md mx-auto max-w-xs lg:mx-[unset] font-semibold text-[--white-200]'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className='form-component mx-auto w-full max-w-xl lg:max-w-xl xl:mx-[unset]'>
          <div className='pricing shadow-custom mb-6 mt-12 rounded-xl bg-accent-blue p-4'>
            <div className='text-container xs:max-w-none mx-auto max-w-52 tracking-wide'>
              <b className='font-bold'>Try it free 7 days</b> then $20/mo.
              thereafter
            </div>
          </div>
          <Form />
        </section>
      </div>
    </main>
  )
}
