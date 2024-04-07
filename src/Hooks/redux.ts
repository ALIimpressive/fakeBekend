import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, rooState } from "../Storegs/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rooState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
