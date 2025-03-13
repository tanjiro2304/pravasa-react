export default class HaltDto {
    id: number;
    position: number;
    stopName: string;
    stopId: number;
    routeId: number;
    routeNo: string;

    constructor(
        id: number,
        position: number,
        stopName: string,
        stopId: number,
        routeId: number,
        routeNo: string
    ) {
        this.id = id;
        this.position = position;
        this.stopName = stopName;
        this.stopId = stopId;
        this.routeId = routeId;
        this.routeNo = routeNo;
    }
}
