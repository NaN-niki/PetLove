import { IPet } from "./pet"

export interface IUser{
    _id: string
    username : string,
    firstName : string,
    lastName : string,
    email : string,
    adoptedPet: Array<IPet>
}