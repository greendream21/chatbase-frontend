import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { getSetting, require_login } from "../actions/settingActions";
import { Dispatch } from "redux";
import { create } from "lodash";
import { createSetting, retrain } from "../actions/settingActions";
import { error } from "console";

export const botSetting = createSlice({
  name: "botSetting",
  initialState: {
    botSetting: {},
    error: "This is the Admin getOne Error",
    create_bot: false,
    embedding_loading: false,
    chatbot_id: "",
    required_login: false,
  },
  reducers: {
    get_setting: (state, action) => {
      state.botSetting = action.payload;
    },
    update_setting: (state, action) => {
      state.botSetting = action.payload;
    },
    create_setting: (state, action) => {
      // state.botSetting = action.payload;
      state.create_bot = action.payload;
    },
    embedding_loading: (state, action) => {
      state.embedding_loading = action.payload;
    },
    getErrors: (state, action) => {
      state.error = action.payload;
    },
    set_chatbot_id: (state, action) => {
      state.chatbot_id = action.payload;
    },
    set_required_login: (state, action) => {
      state.required_login = action.payload;
    },
  },
});

export default botSetting.reducer;

export const {
  get_setting,
  update_setting,
  create_setting,
  set_chatbot_id,
  set_required_login,
} = botSetting.actions;

export const get_botSetting = (data: any) => (dispatch: any) => {
  getSetting(data)
    .then((res: any) => {
      dispatch(get_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(get_setting(error));
    });
};

export const update_botSetting = (data: any) => (dispatch: any) => {
  getSetting(data)
    .then((res: any) => {
      dispatch(update_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(update_setting(error));
    });
};

export const create_botSetting = (data: any) => (dispatch: any) => {
  createSetting(data)
    .then((res: any) => {
      dispatch(create_setting(true));
      //dispatch(create_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(create_setting(error));
    });
};

export const retrain_bot = (data: any) => {
  retrain(data)
    .then((res: any) => {
      console.log("LOG");
      //dispatch(create_setting(res.data));
    })
    .catch((error: any) => {
      dispatch(create_setting(error));
    });
};

export const set_chatbotId = (chatbotID: any) => (dispatch: any) => {
  dispatch(set_chatbot_id(chatbotID));
};
