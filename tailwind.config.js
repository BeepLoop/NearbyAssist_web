/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primary: {
                DEFAULT: '#4ECB71',
                pale: '#DCFFB7'
            },
            red:{
                 DEFAULT: '#FF0000',
                 lightred: '#FF5D5D'
            },
            gray:{
                DEFAULT: '#606C5D',
                darkgray: '#1D1D1D'    
            },
            blue:{
                DEFAULT: '#1D24CA',
                lightblue: '#1679AB'
            },
            white:{
                 DEFAULT: '#FFFFFF',
            },
            black:{
                DEFAULT: '#000000',
            },
            orange:{
                DEFAULT:'#FF8A08'
            },
            yellow:{
                DEFAULT:'#FFC100'
            },
             indigo:{
                DEFAULT:'#1C1678',
                darkindigo: '#0A1D56'
            },
        }
    },
    plugins: [],
};
