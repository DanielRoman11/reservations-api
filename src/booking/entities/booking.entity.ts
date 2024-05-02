import { Accommodation } from '../../accommodation/entities/accommodation.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  checkInDate: Date;

  @Column('date')
  checkOutDate: Date;

  @Column('decimal')
  totalPrice: number;

  @ManyToOne(() => Accommodation, (accommodation) => accommodation.booking)
  accommodation: Relation<Accommodation>;
}
