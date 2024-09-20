import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5396662c8e704bf491c36b32c32b2867",
  },
});
