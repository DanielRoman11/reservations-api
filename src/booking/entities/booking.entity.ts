import { User } from 'src/user/entities/user.entity';
import { Accommodation } from '../../accommodation/entities/accommodation.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  arrivalDate: Date;

  @Column({ type: 'timestamp' })
  departureDate: Date;

  @Column('integer')
  totalPrice: number;

  @ManyToOne(() => User, (user) => user.bookings)
  @JoinColumn()
  user: Relation<User>;

  @ManyToOne(() => Accommodation, (accommodation) => accommodation.booking)
  @JoinColumn()
  accommodation: Relation<Accommodation>;
}
