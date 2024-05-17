import { Booking } from '../../booking/entities/booking.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class Accommodation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ default: 1 })
  rooms: number;

  @Column({ default: 1 })
  beds: number;

  @Column({ default: 1 })
  bathrooms: number;

  @Column({ default: 1 })
  price: number;

  @Column({ default: true })
  wifi: boolean;

  @Column({ type: 'timestamp' })
  arrivalDate: Date;

  @Column({ type: 'timestamp' })
  departureDate: Date;

  @Column({ default: 1 })
  guests: number;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @OneToMany(() => Booking, (booking) => booking.accommodation)
  booking: Relation<Booking>;
}
