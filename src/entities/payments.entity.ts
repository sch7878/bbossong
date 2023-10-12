import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ServicesEntity } from './services.entity';

@Entity({ name: 'Payment' })
export class PaymentsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  card: number;

  @Column({ type: 'int' })
  cash: number;

  @Column({ type: 'int' })
  discount: number;

  @Column({ type: 'int' })
  membership: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt: Date | null;

  // * Foreign Key * /
  @Column({ type: 'int' })
  service_id: number;

  //*   Relation    */

  // *  Payment | 1 : 1 | Service

  @OneToOne(() => ServicesEntity, (service) => service.payment, {})
  @JoinColumn({ name: 'service_id', referencedColumnName: 'id' })
  service: ServicesEntity;
}
