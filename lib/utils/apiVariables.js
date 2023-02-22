//______________________ CHOOZE _______________________
const protocol = {
    unsecure: "http",
    secure: "https",
};

const host = {
    // domain: "",
    // localIP: "",
    localhost: "localhost:3000",
};

// Toggle this value to get data from local or prod environment
const CHOOZE_BASE_PATH = protocol.unsecure + "://" + host.localhost + "/api";
// export const CHOOZE_BASE_PATH = protocol.secure + "://" + host.domain + "/api";

//______________________ ENDPOINTS _______________________
export const GET_CHOOZES_URL = CHOOZE_BASE_PATH + "/choozes/get-choozes";
export const ADD_CHOOZE_URL = CHOOZE_BASE_PATH + "/choozes/add-chooze";
export const GET_CHOOZE_URL = CHOOZE_BASE_PATH + "/choozes/get-chooze";
export const EDIT_CHOOZE_URL = CHOOZE_BASE_PATH + "/choozes/edit-chooze";
export const DELETE_CHOOZES_URL = CHOOZE_BASE_PATH + "/choozes/delete-chooze";
