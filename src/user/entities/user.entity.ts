import { Accommodation } from 'src/accommodation/entities/accommodation.entity';
import { Booking } from '../../booking/entities/booking.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Relation<Booking[]>;

  @OneToMany(() => Accommodation, (accommodation) => accommodation.owner)
  properties: Relation<Accommodation[]>;
}
