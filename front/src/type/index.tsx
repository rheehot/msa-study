export type ExerciseDetail = {
    name: string
    weight: number
    rep: number
    set: number
    volume: number
}

export type DietDetail = {
    name: string
    calorie: number
    C: number
    P: number
    F: number
}

export enum ExercisePart {
    CHEST = "CHEST",
    BACK = "BACK",
    LEG = "LEG",
    SHOULDER = "SHOULDER",
    BICEPS = "BICEPS",
    TRICEPS = "TRICEPS",
    ABDOMEN = "ABDOMEN"
}

export type DietStatistics = {
    date: string
    quantity: number
}

export type ExerciseStatistics = {
    date: string
    volume: number
}

export enum DietStatisticsType {
    CAL = "CAL",
    C = "C",
    P = "P",
    F = "F"
}

export enum ExerciseStatisticsType {
    CHEST = "CHEST",
    BACK = "BACK",
    LEG = "LEG",
    SHOULDER = "SHOULDER",
    BICEPS = "BICEPS",
    TRICEPS = "TRICEPS",
    ABDOMEN = "ABDOMEN",
    ALL = "ALL"
}