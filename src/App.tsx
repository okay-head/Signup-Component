import Form from './Form'

export default function App() {
  return (
    // Main is the 'container' itself, therefore no separate component for adjusting margins is introduced

    <main className='main-bg min-h-screen bg-primary-red px-6 pb-14 pt-5 text-center font-poppins text-white lg:px-12 lg:pb-10'>
      <div className='content-container mx-auto min-h-[calc(100vh-4.5rem)] max-w-screen-xl items-center gap-8 lg:flex xl:justify-evenly xl:gap-0'>
        <section className='main-text lg:text-left'>
          {/* convert to fluid heading [ IMPROVEMENT ] */}
          <h1 className='mx-auto mb-6 mt-10 max-w-64 text-3xl font-bold xs:max-w-lg sm:text-4xl lg:mb-7 lg:text-[3.25rem] lg:!leading-none'>
            Learn to code by watching others
          </h1>
          <p className='mx-auto max-w-xs text-[--white-200] xs:max-w-md lg:mx-[unset] lg:font-semibold'>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <section className='form-component mx-auto w-full max-w-xl lg:max-w-xl xl:mx-[unset]'>
          <div
            className='pricing shadow-custom 
          mx-auto mb-6 mt-12 max-w-80 rounded-xl bg-accent-blue p-4 sm:max-w-[unset]'
          >
            <div className='text-container mx-auto max-w-52 tracking-wide xs:max-w-none'>
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
