export const getEnv = (key) => {
  const value = Cypress.env(key)

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }

  return value
}