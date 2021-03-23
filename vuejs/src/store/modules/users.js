export default  {
    state: {
        users: [],
    },
    actions: {
        // context // { commit, dispatch, state }
        showUserName(context, name) {
            alert(name);
        },
    },
}
