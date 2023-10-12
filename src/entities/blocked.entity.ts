import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from './users.entity';

@Entity({ name: 'Blocked' })
export class BlockedEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  blockedReason: string;

  @Column({ type: 'text' })
  unblockedReason: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;

  // * Foreign Key * /

  @Column({ type: 'int' })
  user_id: number;

  // * Relation * /

  // *  Blocked | 1 : 1 | Users

  @OneToOne(() => UsersEntity, (user) => user.blocked, {})
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UsersEntity;
}
