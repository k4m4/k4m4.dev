module.exports = {
	theme: {
		spacing: {
			px: '1px',
			0: '0',
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			10: '2.5rem',
			12: '3rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			32: '8rem',
			40: '10rem',
			48: '12rem',
			56: '14rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			'1em': '1em',
			'2em': '2em',
			'3em': '3em',
			'4em': '4em',
			'5em': '5em',
			'6em': '6em',
		},
		extend: {
			screens: {
				dark: { raw: '(prefers-color-scheme: dark)' },
			},
			fontSize: {
				'1vw': '1vw',
				'2vw': '2vw',
				'3vw': '3vw',
				'4vw': '4vw',
				'5vw': '5vw',
				'6vw': '6vw',
				'7vw': '7vw',
				'8vw': '8vw',
				'9vw': '9vw',
				'10vw': '10vw',
				'15vw': '15vw',
				'20vw': '20vw',
				'1em': '1em',
				'2em': '2em',
				'3em': '3em',
				'4em': '4em',
				'5em': '5em',
				'6em': '6em',
			},
			fontFamily: {
				'space-mono': ['Space Mono', 'monospace'],
			},
		},
	},
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
};
