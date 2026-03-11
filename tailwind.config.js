module.exports = {
  content: [
    './src/**/*.twig',
  ],
  theme: {
    fontFamily: {
      header: ['DMSans Bold', 'sans-serif'],
      tagline: ['DMSans SemiBold', 'sans-serif'],
      subtitle: ['DMSans Regular', 'sans-serif'],
      menu: ['DMSans Bold', 'sans-serif'],
      button: ['DMSans Bold', 'sans-serif'],
      body: ['DMSans Regular', 'sans-serif'],
    },
    screens: {
      'xs': '343px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': '0 45px 65px rgba(0, 0, 0, 0.15)',
    },
    extend: {
      fontSize: {
        sm:  ['14px','28px'],
        base: ['16px','26px'],
        md: ['18px','24px'],
        lg: ['22px','28px'], 
        xl: ['50px','60px'], 
        '2xl': ['60px','65px'], 
        '3xl': ['78px','80px'], 
      },
      colors: {
        'primary': '#ED1F24', //red
        'secondary': '#4E4D4D', //blue
        'yellow': '#FFEF0B',
        'blue': '#0068A7',
        'bluesecondary': '#0066A5',
        'lighblue': '#3C89B9',
        'lightgray': '#F4F4F4',
        'gray': '#242830', 
        'white': '#ffffff',
        'bluetransparent': '#1D204A82',
        'skyblue': '#4D94FE',
        'darkblue' : '#0A1833',
        'dark' : '#333333',
        'red': '#EE4035'
      },
      padding: {
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      margin: {
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '30': '1.875rem',
        '38': '2.375rem',
      },
      height: {
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px',
        '550': '550px',
        '600': '600px',
        '650': '650px',
        '700': '700px',
        '750': '750px',
        '800': '800px',
        '850': '850px',
        '900': '900px',
        '950': '950px',
        '1000': '1000px',
      },
      zIndex: {
        '5': '5',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}