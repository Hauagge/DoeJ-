import { EntityRepository, Repository } from 'typeorm';
import Tag from '../entities/Tag';

interface ArrayTag {
  arrayTag: Array<Tag>;
}

@EntityRepository(Tag)
class TransactionsRepository extends Repository<Tag> {
  public async createTag(tag: Tag): Promise<void> {
    await this.create(tag);
  }

  public async deleteTag(tag: Tag): Promise<void> {
    await this.delete(tag);
  }

  public async updateTag(tag: Tag, newTag: Tag): Promise<void> {
    if (newTag.descricao != null) tag.descricao = newTag.descricao;
    if (newTag.foto != null) tag.foto = newTag.foto;

    await this.save(tag);
  }

  public async getTag(): Promise<ArrayTag> {
    const list: ArrayTag = { arrayTag: new Array<Tag>() };
    list.arrayTag = await this.find();
    return list;
  }
}

export default TransactionsRepository;
