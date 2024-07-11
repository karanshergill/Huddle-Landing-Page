tailwind.config = {
    theme: {
        extend: {
            colors: {
                'Voilet': 'hsl(257, 40%, 49%)',
                'Soft-Magenta': 'hsl(300, 69%, 71%)',
            },
            fontFamily: {
                'Poppins': ['Poppins', 'sans-serif'],
                'OpenSans': ['Open Sans', 'sans-serif'],

            },
            backgroundImage: {
                'bg-desktop': 'url(/images/bg-desktop.svg)',
                'bg-mobile': 'url(/images/bg-mobile.svg)',
            }
        },
    },
}
