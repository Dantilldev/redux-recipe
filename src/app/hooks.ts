import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "./store";

// Custom hooks för att använda dispatch och selector med typer, slipper skriva typerna i Home-komponenten.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
