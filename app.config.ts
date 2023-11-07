export default defineAppConfig({
  ui: {
    primary: 'teal',
    gray: 'cool',
    container: {
      constrained: 'max-w-6xl'
    },
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md'
      }
    },
    header: {
      wrapper: 'mx-auto max-w-6xl lg:border lg:rounded-lg lg:top-4 bg-white/50 dark:bg-gray-800/50 mb-4 lg:shadow'
    }
  }
})