export const SAVE_USERS_FROM_FIREBASE = 'SAVE_USERS_FROM_FIREBASE';
export const SAVE_USERS_INFOS = 'SAVE_USERS_INFOS';
export const SAVE_CURRENT_USER = 'SAVE_CURRENT_USER';
export const DISPLAY_URL_PROFIL_IMAGE = 'DISPLAY_URL_PROFIL_IMAGE';
export const LOGOUT = 'LOGOUT';


export const saveUsersFromFirebase = (users) => ({
  type: SAVE_USERS_FROM_FIREBASE,
  users,
});

export const saveUsersInfos = (datas) => ({
  type: SAVE_USERS_INFOS,
  datas,
});

export const saveCurrentUser = (user) => ({
  type: SAVE_CURRENT_USER,
  user,
});

export const displayUrlProfilImage = (url) => ({
  type: DISPLAY_URL_PROFIL_IMAGE,
  url,
});

export const logOut = () => ({
  type: LOGOUT,
});

