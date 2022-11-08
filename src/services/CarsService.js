import { axiosInstance } from "./AxiosService";


class CarsSerivce {

    async getAll() {
        const response = await axiosInstance.get("/api/cars");
        return response.data
    }

}
export default new CarsSerivce();