import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        cyan: {
          50: '#eff9ff',
          100: '#dff3ff',
          200: '#b7e9ff',
          300: '#77d9ff',
          400: '#2fc6ff',
          500: '#04adef',
          600: '#008dd0',
          700: '#0070a8',
          800: '#015f8b',
          900: '#084e72',
          950: '#05324c',
        }
      }
    }
  }
}
