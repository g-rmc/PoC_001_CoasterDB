export type CoasterEntity = {
    id: number,
    rcdbLink: string,
    coasterName: string,
    parkName: string,
    length: number,
    drop: number,
    speed: number,
    openingYear: string
}

export type NewCoaster = {
    rcdbLink: string,
    coasterName: string,
    parkName?: string,
    length?: number,
    drop?: number,
    speed?: number,
    openingYear?: string
}

export type Coaster = Partial<CoasterEntity>