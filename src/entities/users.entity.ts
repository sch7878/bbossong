import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BlockedEntity } from './blocked.entity';
import { MembershipsEntity } from './memberships.entity';
import { InformationsEntity } from './informations.entity';
import { ReservationsEntity } from './reservations.entity';

@Entity({ name: 'Users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'varchar', length: '13', nullable: true })
  phone: string;

  @Column({ type: 'text' })
  reasonForVisit: string;

  @Column({ type: 'date' })
  firstVisitDay: Date;

  @Column({ type: 'date' })
  birthday: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;

  //*   Relation    */

  //* User | 1 : 1 | Blocked
  @OneToOne(() => BlockedEntity, (blocked) => blocked.user, {
    cascade: true,
  })
  @JoinColumn({ name: 'blocked', referencedColumnName: 'id' })
  blocked: BlockedEntity;

  //* User | 1 : N | Membership
  @OneToMany(() => MembershipsEntity, (membership) => membership.user, {
    cascade: true,
  })
  membership: MembershipsEntity[];

  //* User | 1 : N | Information
  @OneToMany(() => InformationsEntity, (information) => information.user, {
    cascade: true,
  })
  information: InformationsEntity[];

  //* User | 1 : N | Reservation
  @OneToMany(() => ReservationsEntity, (reservation) => reservation.user)
  reservation: ReservationsEntity[];
}
