// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn', // Cảnh báo khi dùng any
    // 'vue/multi-word-component-names': 'off', // Cho phép tên component 1 từ
    // 'import/order': ['error', { 'newlines-between': 'always' }] // Yêu cầu import theo thứ tự
    'nuxt/nuxt-config-keys-order': 'off' // Tắt rule trong nuxt.config.ts phải được sắp xếp theo một thứ tự nhất định
  }
})
