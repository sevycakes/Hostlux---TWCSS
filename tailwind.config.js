/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hlBlue: "#0d6efd",
        hlIndigo: "#6610f2",
        hlPurple: "#6f42c1",
        hlPink: "#d63384",
        hlRed: "#dc3545",
        hlOrange: "#fd7e14",
        hlYellow: "#ffc107",
        hlGreen: "#198754",
        hlTeal: "#20c997",
        hlCyan: "#0dcaf0",
        hlWhite: "#fff",
        hlGray: "#6c757d",
        hlGrayDark: "#343a40",
        hlPrimary: "#0d6efd",
        hlSecondary: "#6c757d",
        hlSuccess: "#198754",
        hlInfo: "#0dcaf0",
        hlWarning: "#ffc107",
        hlDanger: "#dc3545",
        hlLight: "#f8f9fa",
        hlDark: "#212529",
      },
      fontFamily: {
        'mulish': ["Mulish", "sans-serif"],
        'urbanist': ["Urbanist", "sans-serif"]
      },
      backgroundImage: {
        'banner': "url(../dist/img/banner.jpg)",
        'pricing': "url(../dist/img/pricing-bg.jpg)",
      }
    },
  },
  plugins: [],
}

