import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entitys/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {

}

export { ComplimentsRepositories };