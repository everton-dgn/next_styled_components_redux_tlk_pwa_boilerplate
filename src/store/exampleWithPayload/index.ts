import { createSlice } from '@reduxjs/toolkit'
import { SetAddTextPayloadType } from './types'

const initialState = {
  text: ''
}

const changeExampleWithPayloadReducer = createSlice({
  name: 'exampleWithPayload',
  initialState,
  reducers: {
    setAddText(state, { payload }: SetAddTextPayloadType) {
      state.text = payload.exemploText
    },
    setRemoveText(state) {
      state.text = ''
    }
  }
})

export const { setAddText, setRemoveText } =
  changeExampleWithPayloadReducer.actions

export const exampleWithPayload = changeExampleWithPayloadReducer.reducer
