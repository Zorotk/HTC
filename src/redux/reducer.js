import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
// json-server db.json --port 5000 --watch
// json-server db.json  --watch
const initialState = {
    channels: [],
    films: [],
    login: '',
    password: +'',
    auth: {'login': 'test', 'password': 12345, 'indefinite': true}
}


export const fetchData = createAsyncThunk("fetchData",
    async (url, {dispatch}) => {

        const {data} = await axios(`http://localhost:5000/${url}`)
        url === 'channels' ? dispatch(toolkitSlice.actions.setChannels(data))
            : dispatch(toolkitSlice.actions.setFilms(data))
    }
);


const toolkitSlice = createSlice({
    name: 'film', initialState
    , reducers: {
        setChannels(state, action) {
            state.channels = action.payload
        },
        setFilms(state, action) {
            state.films = action.payload
        },
        progres(state, action) {
            state.progressValue = action.payload
        },
        setlogin(state, action) {
            state.login = action.payload
        },
        setpassword(state, {payload}) {
            state.password = payload
        },
        setauth(state, {payload}) {
            state.auth.indefinite = payload
        }
    }
})

export default toolkitSlice.reducer
export const {progres, setlogin, setpassword, setauth} = toolkitSlice.actions
