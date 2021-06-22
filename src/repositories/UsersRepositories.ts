import { EntityRepository, Repository } from "typeorm";
import { User } from "../entitys/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {

}

export { UsersRepositories };