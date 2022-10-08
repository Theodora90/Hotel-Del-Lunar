import httpService from "./httpService";

const api = "Rooms";

function getRoomDetails() {
  return httpService.get(api);
}

export default getRoomDetails;
