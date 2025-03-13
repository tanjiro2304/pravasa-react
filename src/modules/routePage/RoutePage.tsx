import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import routeService, {getBestRoutes, getMbmtRoutes, getNmmtRoutes, getTmtRoutes} from "../../service/RouteService.tsx";
import RouteFilter from "../../models/RouteFilter.tsx";
import RouteDto from "../../models/RouteDto.tsx";
import '../routePage/routePage.css';
import HaltDto from "../../models/HaltDto.tsx";
import axios from "axios";
import DataTable from "../../components/tables/DataTable.tsx";
import {useLocation} from "react-router-dom";


export default function RoutePage  (){

    const [routes, setRoutes] = useState<RouteDto[]>([]);
    const [selectedRoute, setSelectedRoute] = useState<string>();

    const [halts, setHalts] = useState<HaltDto[]>([]);
    const baseUrl:string = "http://localhost:8011/stop";
    const location = useLocation();
    const companyId: number = location.state?.message || 1;
    console.log(companyId);
    useEffect(() =>{
        const fetchRoutes = async () =>{
            // const filter = new RouteFilter();
            // filter.companyId = companyId;
            //
            // const response =  routeService.findRoutesByCompanyId(filter);
            // response.then((response) => {
            //     console.log('Data For Best :', response.data);
            //     if (Array.isArray(response.data)) {
            //         setRoutes(response.data);
            //     } else {
            //         setRoutes([response.data]);
            //     }
            // });
            if(companyId == 1){
                setRoutes(getBestRoutes())
            }else if(companyId == 2){
                setRoutes(getTmtRoutes());
            }else if(companyId == 3){
                setRoutes(getNmmtRoutes());
            }else if(companyId == 4){
                setRoutes(getMbmtRoutes);
            }
        }

        fetchRoutes();

    },[])

    const onSubmit = () => {
        const filter = new RouteFilter();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        filter.routeId = parseInt(selectedRoute, 10);
        const findHaltByRouteId = async (filter: RouteFilter) => {
            return await axios.post<HaltDto>(baseUrl + '/findByRouteId', filter);
        }

        findHaltByRouteId(filter).then((response) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return setHalts(response.data);
        })

        console.log(halts)
    }

    return (
        <div className='main-layout'>
            <div className='route-select-container'></div>

            <Form.Select onChange={(e) => setSelectedRoute(e.target.value)} aria-label="Default select example" style={{width:'15rem'}}>
                <option>Select a Route</option>
                {routes.map((route, index) =>(
                    <option key={index} value={route.routeId}>{route.routeNo}</option>
                ))}
            </Form.Select>
            <Button className='submit-btn' size='sm' onClick={onSubmit} variant="primary">Submit</Button>
            <DataTable halts={halts}/>
        </div>
    )
}