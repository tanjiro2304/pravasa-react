import axios from "axios";
import RouteFilter from "../models/RouteFilter.tsx";

import HaltDto from "../models/HaltDto.tsx";

export function HaltService() {

    const baseUrl:string = "http://localhost:8011/halt";

    const findHaltByRouteId = async (filter: RouteFilter) => {
        return await axios.post<HaltDto>(baseUrl + '/findByRouteId', filter);
    }

}
