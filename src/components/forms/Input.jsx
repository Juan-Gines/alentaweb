import { useFormContext } from 'react-hook-form'
import { findInputError } from '../../utils/findInputError'
import { isFormInvalid } from '../../utils/isFormInvalid'
import { AnimatePresence, motion } from 'framer-motion'
import cn from 'classnames'

export const Input = ({
  icon,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  const inputError = findInputError(errors, id)
  const isInvalid = isFormInvalid(inputError)

  const inputClasses = `block w-full px-10 py-3 text-gray-700 placeholder-gray-400 bg-white border rounded-lg dark:bg-slate-800 dark:border-slate-600 dark:placeholder-gray-400 focus:outline-none ${isInvalid ? 'ring-red-300 ring ring-opacity-40 border-red-400 focus:border-red-400' : 'focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40  focus:ring focus:ring-blue-300'}`

  return (
    <>
      <AnimatePresence mode='wait' initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
      {multiline
        ? (
          <textarea
            id={id}
            type={type}
            className={cn(inputClasses, 'min-h-[10rem] max-h-[20rem] resize-y', className)}
            placeholder={placeholder}
            {...register(id, validation)}
          />
          )
        : (

          <div className='relative flex items-center my-4'>
            {icon && icon}

            <input
              className={cn(inputClasses, className)}
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              aria-label={placeholder}
              {...register(id, validation)}
            />
          </div>
          )}
    </>
  )
}

const InputError = ({ message }) => {
  return (
    <div className='flex w-full justify-end'>
      <motion.div
        className=' gap-1 px-2 text-sm font-semibold text-red-500 bg-red-100 rounded-md'
        {...framerError}
      >
        {message}
      </motion.div>
    </div>
  )
}

const framerError = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 }
}
