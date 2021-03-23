export const alertAction = {
    data() {
        return {
            sets: [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
            ],
        };
    },
    methods: {
        alertAction(text) {
            alert(text);
        },
    },
};


