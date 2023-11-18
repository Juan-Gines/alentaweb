const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const passwordRegex = /^(?=.+\d)(?=.*[a-z])(?=.*[A-Z]).*$/

export const nameValidation = {
  type: 'text',
  id: 'name',
  placeholder: 'Nombre',
  validation: {
    required: {
      value: true,
      message: 'Requerido'
    },
    minLength: {
      value: 4,
      message: 'Mínimo 4 caracteres'
    },
    maxLength: {
      value: 25,
      message: 'Máximo 25 caracteres'
    }
  }
}
export const emailValidation = {
  type: 'email',
  id: 'email',
  placeholder: 'Correo electrónico',
  validation: {
    required: {
      value: true,
      message: 'Requerido'
    },
    pattern: {
      value: emailRegex,
      message: 'Correo electrónico no válido'
    }
  }
}
export const passwordValidation = {
  type: 'password',
  id: 'password',
  placeholder: 'Contraseña',
  validation: {
    required: {
      value: true,
      message: 'Requerido'
    },
    minLength: {
      value: 8,
      message: 'Mínimo 8 caracteres'
    },
    maxLength: {
      value: 20,
      message: 'Máximo 20 caracteres'
    },
    pattern: {
      value: passwordRegex,
      message: 'Al menos 1 número, 1 minúscula y 1 mayúscula'
    }
  }
}
