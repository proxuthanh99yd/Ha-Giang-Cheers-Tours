/* eslint-disable no-undef */
export const myTailwindConfig = {
    theme: {
        extend: {
            spacing: {
                1.25: '0.3125rem', // 5px
                1.75: '0.4375rem', // 7px
                2.25: '0.5625rem', // 9px
                2.75: '0.6875rem', // 11px
                3.25: '0.8125rem', // 13px
                3.5: '0.875rem', // 14px
                3.75: '0.9375rem', // 15px
                4.25: '1.0625rem', // 17px
                4.75: '1.1875rem', // 19px
                5.25: '1.3125rem', // 21px
                5.75: '1.4375rem', // 23px
                6.25: '1.5625rem', // 25px
                6.75: '1.6875rem', // 27px
                7.25: '1.8125rem', // 29px
                7.5: '1.875rem', // 30px
                7.75: '1.9375rem', // 31px
                8.25: '2.0625rem', // 33px
                8.75: '2.1875rem', // 35px
                9.25: '2.0625rem', // 37px
                9.75: '2.1875rem', // 39px
                10.25: '2.3125rem', // 41px
                10.75: '2.4375rem', // 43px
                11.25: '2.8125rem', // 45px
                12.5: '3.125rem', // 50px
                17.5: '4.375rem', // 70px
            },
            width: {
                45: '11.25rem', // 180p
                47.5: '11.875rem', // 190px
                50: '12.5rem', // 200px
                52.5: '13.125rem', // 210px
                55: '13.75rem', // 220px
                57.5: '14.375rem', // 230px
                60: '15rem', // 240px
                62.5: '15.625rem', // 250px
                65: '16.25rem', // 260px
                67.5: '16.875rem', // 270px
                'container-size': 'var(--container-size)',
            },
            flexGrow: {
                2: '2',
                3: '3',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
            },
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}