import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// json-server db.json --port 5000 --watch
// json-server db.json  --watch
const initialState = {
    loading: true,
    modalActive: false,
    channels: [],
    films: [],
    showDescription: false,
    filmsComments: [],
    login: '',
    password: '',
    search: '',
    auth: false
}


export const fetchData = createAsyncThunk("fetchData",
    async (url, {dispatch}) => {
        const {data} = await axios(`http://localhost:5000/${url}`)
        url === 'channels' ? dispatch(toolkitSlice.actions.setChannels(data))
            : dispatch(toolkitSlice.actions.setFilms(data))
    }
);
export const fetchComments = createAsyncThunk("getComments",
    async (url, {dispatch}) => {
        const {data} = await axios(`http://localhost:5000/comments`)
        dispatch(toolkitSlice.actions.setComments(data))
    }
);

export const fetchDeletedComment = createAsyncThunk("fetchDeletedComment",
    async (id, {dispatch}) => {
        await axios.delete(`http://localhost:5000/comments/${id}`)
        dispatch(toolkitSlice.actions.deleteComments(id))
    }
);

export const addComment = createAsyncThunk("addComment",
    async (comment, {dispatch}) => {
        await axios.post(`http://localhost:5000/comments`, comment)
        dispatch(toolkitSlice.actions.addComments(comment))
    }
);


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
        },
        deleteComments(state, {payload}) {
            state.filmsComments = state.filmsComments.flat().filter(el => el.id !== payload)
        },
        setComments(state, {payload}) {
            state.filmsComments.unshift(payload)
        },
        setLogin(state, action) {
            state.login = action.payload
        },
        setSearch(state, action) {
            state.search = action.payload
        },
        setPassword(state, {payload}) {
            state.password = payload
        },
        setLoading(state, {payload}) {
            state.loading = payload
        },
        setAuth(state, {payload}) {
            state.auth = payload
        }
    }
})

export default toolkitSlice.reducer
export const {setAuth,setSearch, setLoading, setmodalActive, setLogin, setPassword, addComments, toggleDescription} = toolkitSlice.actions
