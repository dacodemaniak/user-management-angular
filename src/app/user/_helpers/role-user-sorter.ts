import { UserType } from "../../types/user-type";
import { UserSorter } from "./user-sorter";

export class RoleUserSorter extends UserSorter {
    constructor() {
        super()
    }

    getSorter(): (a: UserType, b: UserType) => number {
        const sorter = (a: UserType, b:UserType) => {
            const order =  a.role.label.localeCompare(b.role.label) * this._ascDescOrder
            return order
        }
        this._ascDescOrder = this._ascDescOrder * -1
        return sorter          
    }
}