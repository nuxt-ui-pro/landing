export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'zinc',
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md',
        color: 'black'
      }
    },
    input: {
      rounded: 'rounded-full'
    },
    header: {
      wrapper: 'lg:border-b-0 lg:top-4 lg:mb-8 backdrop-blur-none bg-transparent lg:mx-4',
      container: 'lg:rounded-full bg-white lg:shadow'
    },
    footer: {
      wrapper: 'bg-black dark',
      top: {
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'lg:py-8'
      }
    }
  }
})