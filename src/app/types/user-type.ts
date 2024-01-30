import { RoleType } from "./role.type"

export type UserType = {
    id: number
    lastname: string
    firstname: string
    birthdate: Date
    role: RoleType
}