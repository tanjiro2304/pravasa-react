import axios from "axios";
import RouteFilter from "../models/RouteFilter.tsx";
import RouteDto from "../models/RouteDto.tsx";

class RouteService {

    baseUrl:string = "http://localhost:8011/route";

    public findRoutesByCompanyId = async (filter: RouteFilter) => {
        return await axios.post<RouteDto>(this.baseUrl + '/findByCompanyId', filter);
    }
}

const routeService = new RouteService();
export default routeService;