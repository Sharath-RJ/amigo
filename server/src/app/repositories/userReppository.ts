import { User } from "../../entities/user"


export interface UserRepository {
    createUser(
        username: string,
        email: string,
        password: string
    ): Promise<boolean>
    authenticateUser(email: string, password: string): Promise<User | null>
}
