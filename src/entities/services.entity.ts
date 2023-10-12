import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { MenuesEntity } from './menues.entity';
import { PaymentsEntity } from './payments.entity';
import { ReservationsEntity } from './reservations.entity';

@Entity({ name: 'Services' })
export class ServicesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  status: string;

  // * Foreign Key * /

  @Column({ type: 'int' })
  menu_id: number;

  @Column({ type: 'int' })
  reservation_id: number;

  // * Relation * /

  // *  Service | 1 : 1 | Menu
  @OneToOne(() => MenuesEntity, (menu) => menu.service)
  @JoinColumn({ name: 'menu_id', referencedColumnName: 'id' })
  menu: MenuesEntity;

  // *  Service | 1 : 1 | Payment
  @OneToOne(() => PaymentsEntity, (payment) => payment.service)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'id' })
  payment: PaymentsEntity;

  //* Service | N : 1 | Reservation
  @ManyToOne(() => ReservationsEntity, (reservation) => reservation.service)
  @JoinColumn({ name: 'reservation_id', referencedColumnName: 'id' })
  reservation: ReservationsEntity;
}
