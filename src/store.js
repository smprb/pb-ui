const createStore = () => {
    let state = data;
    let subscriber = () => {}

    return {
        getState() {
            return state;
        },

        subscribe(observer) {
            this.subscribe = observer;
        }
    }
}

const data = {
    userData: {
        userName: "Murat Slavich",
        userRegion: "Tomsk, Tomsk Oblast, Russian Federation"
    }

}

export default createStore;