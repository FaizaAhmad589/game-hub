import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params : {
        key : "c531288bac084b758de057b0fbedacaa"
    }
})