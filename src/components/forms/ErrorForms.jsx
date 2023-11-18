const ErrorForms = ({ error }) => {
  return (
    <div className='text-sm italic pt-1 text-red-400'>
      {Array.isArray(error)
        ? (
            error.map((e, i) => <p key={i}>*{e.property}: {e.message}</p>)
          )
        : typeof error === 'object'
          ? (
            <p>* {error.property}: {error.message}</p>
            )
          : (
            <p>* {error}</p>
            )}
    </div>
  )
}

export default ErrorForms
