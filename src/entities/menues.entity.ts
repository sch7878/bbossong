import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ServicesEntity } from './services.entity';

@Entity({ name: 'Menues' })
export class MenuesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  serviceName: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'text' })
  explanation: 'string';

  @Column({ type: 'int' })
  duration: number;

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

  // *  Menu | 1 : 1 | Service

  @OneToOne(() => ServicesEntity, (service) => service.menu, {})
  @JoinColumn({ name: 'service_id', referencedColumnName: 'id' })
  service: ServicesEntity;
}
