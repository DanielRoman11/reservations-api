import { Booking } from '../../booking/entities/booking.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';

@Entity()
export class Accommodation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Booking, (booking) => booking.accommodation)
  booking: Relation<Booking>;
}
