/* eslint-disable no-duplicate-case */
import { 
  SAVE_USERS_FROM_FIREBASE,
  SAVE_USERS_INFOS,
  SAVE_CURRENT_USER,
  DISPLAY_URL_PROFIL_IMAGE,
  LOGOUT,
} from '../actions/user';

export const initialState = {
  usersList: [],
  usersInfos: [],
  currentUser: [],
  urlProfilImage: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USERS_FROM_FIREBASE:
      return {
        ...state,
        usersList: action.users,
      };
    case SAVE_USERS_INFOS:
      return {
        ...state,
        usersInfos: action.datas,
      };
    case SAVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
      };
    case DISPLAY_URL_PROFIL_IMAGE:
      return {
        ...state,
        urlProfilImage: action.url,
      };
    case LOGOUT:
      return {
        ...state,
        urlProfilImage: initialState.urlProfilImage,
      };
      default:
        return state;
      }
    };
    
export default user;