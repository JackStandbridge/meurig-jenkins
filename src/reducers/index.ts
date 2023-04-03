import { combineReducers } from "@reduxjs/toolkit";
import { reducer as preferences } from "./preferences";

export const reducer = combineReducers({ preferences });
