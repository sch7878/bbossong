import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersEntity } from './users.entity';
import { ServicesEntity } from './services.entity';

@Entity({ name: 'Reservations' })
export class ReservationsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'date' })
  reservationDate: Date;

  @Column({ type: 'text' })
  note: string;

  @Column({ type: 'text' })
  deletedReason: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;

  // * Foreign Key * /

  @Column({ type: 'int' })
  user_id: number;

  //*   Relation    */

  // *  Reservation | N : 1 | Users
  @ManyToOne(() => UsersEntity, (user) => user.reservation)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UsersEntity;

  //* Reservation | 1 : N | Service
  @OneToMany(() => ServicesEntity, (service) => service.reservation)
  service: ServicesEntity[];
}
