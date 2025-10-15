export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '25rem',
      'md': '33.75rem',
      'lg': '68.75rem',
      'xl': '80rem',
      '2xl': '90rem',
      '3xl': '140rem',
      '4xl': '160rem'
    },
    extend: {
      fontFamily: {
        'JetBrainsMono': ['JetBrainsMono', 'Menlo', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        'Menlo': ['Menlo', 'JetBrainsMono', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        'PPRadioGrotesk': ['PPRadioGrotesk', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'BebasNeue': ['BebasNeue', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'Inter': ['Inter', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'DigitalDisplay': ['DigitalDisplay', 'PPRadioGrotesk', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'GillSansExtraBold': ['GillSansExtraBold', 'BebasNeue', 'PPRadioGrotesk', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'Social': ['Social', 'serif'],
        'DMSerifText': ['DMSerifText', 'NoeDisplay', 'CormorantSC', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'DMSerifDisplay': ['DMSerifDisplay', 'DMSerifText', 'NoeDisplay', 'CormorantSC', 'ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'Nabla': ['Nabla', 'NunitoSans', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        'oklch-intro': 'oklch(23.64% 0.1227 340.3259542969936)',
        'oklch-main': 'oklch(33.86% 0.1038 338.96)',
        'oklch-gray': 'oklch(26.03% 0 0)',
        'oklch-white-intro-relative': 'oklch(97.89% 0.0267 340.3259542969936)',
        'oklch-white-relative': 'oklch(90.79% 0.0363 335.76)',
        'oklch-white': 'oklch(20.29% 0 0)',
        'oklch-yellow': 'oklch(79.12% 0.1932 81.67)',
        'oklch-amber': 'oklch(99.21% 0.0118 81.67)',
      },
    }
  },
  plugins: []
}
