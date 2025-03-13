import axios from "axios";
import RouteFilter from "../models/RouteFilter.tsx";
import RouteDto from "../models/RouteDto.tsx";

class RouteService {

    baseUrl:string = "http://localhost:8011/route";

    public findRoutesByCompanyId = async (filter: RouteFilter) => {
        return await axios.post<RouteDto>(this.baseUrl + '/findByCompanyId', filter);
    }

}
const bestRoutes: RouteDto[] = [
    { routeId: 1, routeNo: "1", source: "Colaba", destination: "CST" },
    { routeId: 2, routeNo: "2", source: "Worli", destination: "Dadar" },
    { routeId: 3, routeNo: "3", source: "Andheri", destination: "Bandra" },
    { routeId: 4, routeNo: "4", source: "Goregaon", destination: "Malad" },
    { routeId: 5, routeNo: "5", source: "Kandivali", destination: "Borivali" }
];

const tmtRoutes: RouteDto[] = [
    { routeId: 6, routeNo: "101", source: "Thane", destination: "Mulund" },
    { routeId: 7, routeNo: "102", source: "Thane", destination: "Bhandup" },
    { routeId: 8, routeNo: "103", source: "Thane", destination: "Kanjurmarg" },
    { routeId: 9, routeNo: "104", source: "Thane", destination: "Vikhroli" },
    { routeId: 10, routeNo: "105", source: "Thane", destination: "Ghatkopar" }
];

const nmmtRoutes: RouteDto[] = [
    { routeId: 11, routeNo: "201", source: "Vashi", destination: "Belapur" },
    { routeId: 12, routeNo: "202", source: "Vashi", destination: "Nerul" },
    { routeId: 13, routeNo: "203", source: "Vashi", destination: "Panvel" },
    { routeId: 14, routeNo: "204", source: "Vashi", destination: "Kharghar" },
    { routeId: 15, routeNo: "205", source: "Vashi", destination: "CBD Belapur" }
];

const mbmtRoutes: RouteDto[] = [
    { routeId: 16, routeNo: "301", source: "Mira Road", destination: "Bhayandar" },
    { routeId: 17, routeNo: "302", source: "Mira Road", destination: "Dahisar" },
    { routeId: 18, routeNo: "303", source: "Mira Road", destination: "Borivali" },
    { routeId: 19, routeNo: "304", source: "Mira Road", destination: "Kandivali" },
    { routeId: 20, routeNo: "305", source: "Mira Road", destination: "Malad" }
];
const routeService = new RouteService();
export const getBestRoutes = (): RouteDto[] => bestRoutes;
export const getTmtRoutes = (): RouteDto[] => tmtRoutes;
export const getNmmtRoutes = (): RouteDto[] => nmmtRoutes;
export const getMbmtRoutes = (): RouteDto[] => mbmtRoutes;
export default routeService;