export const config: CodeceptJS.MainConfig = {
  tests: './Express_Calculator_App',
  output: './outputs',
  helpers: {
    WebDriver: {
      url: 'https://localhost:4000',
      browser: 'Edge'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'Express_calculator_app'
}