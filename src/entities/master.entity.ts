import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Master' })
export class MasterEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  nickname: string;

  @Column({ type: 'text' })
  password: string;
}
