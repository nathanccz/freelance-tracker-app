export function formatDate(date) {
  const createdAt = new Date(date)
  const month = createdAt.getMonth()
  const day = createdAt.getDate()
  const year = createdAt.getFullYear()

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${months[month]} ${day}, ${year}`
}

export function filterDefaultFields(document) {
  return Object.keys(document).reduce((acc, key) => {
    if (!key.startsWith('$')) {
      acc[key] = document[key]
    }
    return acc
  }, {})
}

export function isValidEmail(email) {
  if (typeof email !== 'string') return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.trim())
}

export function isEmpty(obj) {
  for (let field in obj) {
    if (obj[field].length > 0) {
      return false
    }
  }
  return true
}

export function getBusinessIcon(businessType) {
  const icons = {
    Retail: 'fluent:building-retail-20-filled',
    'E-commerce': 'material-symbols:shopping-cart-outline',
    Manufacturing: 'fluent-mdl2:manufacturing',
    'Hospitality & Tourism': 'mdi:beach',
    'Healthcare & Wellness': 'ix:health',
    'Restaurant Industry': 'ion:restaurant',
    'Real Estate': 'fluent:real-estate-20-filled',
    'Finance & Banking': 'carbon:finance',
    'Entertainment & Media': 'zondicons:film',
    'Web Services': 'ph:code-fill',
    Other: 'eos-icons:miscellaneous',
  }

  return icons[businessType]
}
