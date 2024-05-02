import { Booking } from 'src/booking/entities/booking.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accommodation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Booking, (booking) => booking.accommodation)
  booking: Booking;
}
