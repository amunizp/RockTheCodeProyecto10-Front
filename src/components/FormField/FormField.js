import './FormField.css'

export const FormField = ({
  labelText,
  titleText,
  type = 'text',
  required = true,
  textContent
}) => {
  return `
  <label for="${labelText}" >
    ${titleText}
  </label>
  <input class="form-field" type="${type}" id="${
    labelText //.replace(/ /g, ''  )
  }" name="${labelText}" autocomplete="${
    type === 'password' ? 'current-password' : 'name'
  }" ${required ? 'required' : ''} placeholder='${type}' ${
    type === 'password' ? 'pattern = ".*.{8,}"' : 'pattern = ".*"'
  } "  title= "${
    type === 'password'
      ? 'It must be at least 8 characters'
      : 'Please complete this field.'
  }" value="${textContent}"/>
  `
}

// <label for="userPassword">Password: </label>
// <input id="userPassword" type="password" required   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" autocomplete="current-password" placeholder="************"/>
