import { Booking } from 'src/booking/entities/booking.entity';
import { Column, OneToMany, PrimaryGeneratedColumn, Relation } from 'typeorm';

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
}
