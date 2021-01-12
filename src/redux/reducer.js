import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// json-server db.json --port 5000 --watch
// json-server db.json  --watch
const initialState = {
    modalActive:false,
    channels: [],
    films: [],
    showDescription: false,
    filmsComments: [],
    login: '',
    password: '',
    auth: {'login': 'test', 'password': 12345, 'indefinite': true}
}


export const fetchData = createAsyncThunk("fetchData",
    async (url, {dispatch}) => {

        const {data} = await axios(`http://localhost:5000/${url}`)
        url === 'channels' ? dispatch(toolkitSlice.actions.setChannels(data))
            : dispatch(toolkitSlice.actions.setFilms(data))
    }
);
//  const addComment = createAsyncThunk("createComments",
//      (url, {dispatch}) => {
//         // console.log(getState)
//         console.log('hh')
//           axios.post(`http://localhost:5000/comments`,'testssssssssss')
//         // url === 'channels' ? dispatch(toolkitSlice.actions.setChannels(data))
//         //     : dispatch(toolkitSlice.actions.setFilms(data))
//     }
// );
const addComment=(comment)=>{
axios.post(`http://localhost:5000/comments`,{'comment':comment})
    console.log('ggd')
}

const toolkitSlice = createSlice({
    name: 'film', initialState
    , reducers: {
        setmodalActive(state, {payload}) {
            state.modalActive = payload
        },
        setChannels(state, action) {
            state.channels = action.payload
        },
        setFilms(state, action) {
            state.films = action.payload
        },
        toggleDescription(state, {payload}) {
            state.showDescription = payload
        },
        addComments(state, {payload}) {
            state.filmsComments.unshift(payload)
           addComment(payload)
        },
        setLogin(state, action) {
            state.login = action.payload
        },
        setPassword(state, {payload}) {
            state.password = payload
        },
        // setauth(state, {payload}) {
        //     state.auth.indefinite = payload
        // }
    }
})

export default toolkitSlice.reducer
export const {setmodalActive, setLogin, setPassword, setauth, addComments, toggleDescription} = toolkitSlice.actions
