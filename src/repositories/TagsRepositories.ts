import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entitys/Tag";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {

}

export { TagsRepositories };