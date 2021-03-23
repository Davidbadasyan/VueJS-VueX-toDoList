export const forFieldMixin = {
    props: {
        label: {
            type: String,
            default: "",
        },
        value: [String, Number]
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value)
        }
    }
}

