import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans', 'Noto Sans fallback', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
