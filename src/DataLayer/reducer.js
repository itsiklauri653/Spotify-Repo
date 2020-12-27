export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    // token:
    //     "BQAI1gNmdJfrKbfk6Ly5CnY9XzK2xfqaU-4znaDvB43vtg3KqVkPgYokcJhNEoD_w1wXG813xgYDkrj1co49U4BFT-qqF5H1REZmK_YxEuKvg31eOIwnRk0xg5vEDlG77SnRfm440uhoMF9LghietuHJU1yK49D1o2ZCjAyQ8N59n64v"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly : action.discover_weekly
            }
        default: 
            return state;
    }
}

export default reducer;