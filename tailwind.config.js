/** @type {import('tailwindcss').Config} */

const shapeShifting = {
	shapeShifting: {
		"0%": {
			borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
		},
		"25%": {
			borderRadius: "61% 39% 70% 30% / 69% 30% 70% 31% ",
		},
		"50%": {
			borderRadius: "54% 46% 88% 12% / 50% 40% 60% 50% ",
		},
		"75%": {
			borderRadius: "17% 83% 16% 84% / 82% 40% 60% 18% ",
		},
		"100%": {
			borderRadius: "70% 30% 87% 13% / 82% 24% 76% 18% ",
		},
	},
};

const enterFromLeft = {
	enterFromLeft: {
		"0%": {
			transform: "translateX(-50%)",
      opacity: 0,
		},
		"90%": {
			transform: "translateX(18px)",
      opacity: 1
		},
		"100%": {
			transform: "translateX(0)",
      opacity: 1
		},
	},
};

const enterFromRight = {
	enterFromRight: {
		"0%": {
			transform: "translateX(50%)",
      opacity: 0,
		},
		"90%": {
			transform: "translateX(-18px)",
      opacity: 1

		},
		"100%": {
			transform: "translateX(0)",
      opacity: 1

		},
	},
};

const enterFade = {
  enterFade: {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    }
  }
}

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				...shapeShifting,
				...enterFromLeft,
				...enterFromRight,
        ...enterFade,
			},
		},
	},
	plugins: [],
};
