export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'zinc',
    variables: {
      light: {
        background: 'var(--color-primary-DEFAULT)'
      }
    },
    badge: {
      rounded: 'rounded-full'
    },
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
      wrapper: 'mx-auto max-w-7xl lg:rounded-full lg:top-4 lg:mb-4 bg-white dark:bg-gray-800/50 lg:shadow'
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
    },
    landing: {
      hero: {
        title: 'text-white selection:bg-primary-600',
        description: 'text-primary-100 selection:bg-primary-600'
      },
      cta: {
        wrapper: 'bg-primary-500',
        title: 'text-white selection:bg-primary-600',
        description: 'text-primary-100 selection:bg-primary-600'
      }
    }
  }
})