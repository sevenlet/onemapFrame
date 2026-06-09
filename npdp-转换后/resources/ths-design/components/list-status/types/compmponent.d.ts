export interface ListStatusDataItem {
    pointName: string;
    statusType: string;
    pollutant: string;
    time: string;
}
export interface StatusSettings {
    color: string;
    bgColor: string;
    name: string;
    status: string;
}
export interface PointLocationEventParams {
    index: number;
    item: ListStatusDataItem;
}
