class RouteFilter {
    depotIds: number[];  // List of Long values
    companyIds: number[]; // List of Long values
    companyId: number | null; // Single Long value
    depotId: number | null; // Single Long value
    routeId: number | null; // Single Long value
    typeId: number | null; // Single Long value

    constructor(
        depotIds: number[] = [],
        companyIds: number[] = [],
        companyId: number | null = null,
        depotId: number | null = null,
        routeId: number | null = null,
        typeId: number | null = null
    ) {
        this.depotIds = depotIds;
        this.companyIds = companyIds;
        this.companyId = companyId;
        this.depotId = depotId;
        this.routeId = routeId;
        this.typeId = typeId;
    }
}

export default RouteFilter;
