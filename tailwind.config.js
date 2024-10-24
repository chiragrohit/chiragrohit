/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "--tw-prose-bullets": "#000",
                        "--tw-prose-counters": "#000",
                        "--tw-prose-quote-borders": "#FBBF24",

                        p: {
                            padding: "0px",
                            "margin-top": "1em",
                            "margin-bottom": "1em",
                        },

                        table: {
                            border: "1px solid #1E293B",
                        },

                        th: {
                            border: "1px solid #1E293B",
                        },

                        td: {
                            border: "1px solid #1E293B",
                            "&:hover": {
                                background: "#ffffff80",
                            },

                            padding: "10px",
                            "text-align": "center",
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};
