module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      maxWidth: {
        '250': '250px',
      },
      colors: {
        lightGray: '#f8fafc',
      },
    }
  },
  variants: {},
  plugins: [],
}
