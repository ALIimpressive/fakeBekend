import axios from "axios";
import { AppDispatch } from "../../Storegs/store";
import {
  photosFetching,
  photosFetchingError,
  photosFetchingSuccsess,
} from "../slices";
import { Iphotos } from "../../types/typest";

export const fetchingAllCards = (limit: number, page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(photosFetching());
      const response = await axios<Iphotos[]>(
        `https://jsonplaceholder.typicode.com/albums`,
        {
          params: { _limit: limit, _page: page },
        }
      );
      dispatch(photosFetchingSuccsess(response.data));
    } catch (e: any) {
      dispatch(photosFetchingError(e.message));
    }
  };
};
