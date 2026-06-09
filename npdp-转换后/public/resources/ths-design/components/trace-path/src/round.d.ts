interface RoundItem {
    x: number;
    y: number;
    r: number;
    position: number;
}
declare class Round {
    circles: RoundItem[];
    initX: number;
    initY: number;
    initPosition: number;
    x: number;
    y: number;
    r: number;
    circlePosition: number;
    direction: number;
    speed: number;
    basicSpeed: number;
    jiaSpeed: number;
    path: any;
    t: any;
    static MINIMUM_SPEED: number;
    static ACCELERATED_SPEED: number;
    static REAL_SPEED: number;
    static CONSTANT_SPEED: number;
    constructor(x: any, y: any, r: any, circlePosition: any, direction: any, lineWidth: any, basicSpeed: any, jiaSpeed: any, path: any);
    initDraw(): void;
    updateInitParam(): void;
    moveCirclesPosition(motionTrail: any): void;
    moveCirclesPositionReverse(motionTrail: any): void;
    setCirclePosition(): void;
    realMove(): void;
    realPosition(position: any): any[];
}
export default Round;
