import { User } from 'src/user/entities/user.entity';
import { Booking } from '../../booking/entities/booking.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column()
  rooms: number;

  @Column()
  beds: number;

  @Column()
  bathrooms: number;

  @Column()
  price: number;

  @Column({ default: true })
  wifi: boolean;

  @Column({ default: true })
  pets: boolean;

  @Column({ default: 1 })
  guests: number;

  @Column()
  lat: string;

  @Column()
  lng: string;

  @OneToMany(() => Booking, (booking) => booking.accommodation, {
    nullable: true,
  })
  booking: Relation<Booking>;

  @ManyToOne(() => User, (user) => user.properties, {
    cascade: true,
  })
  @JoinColumn()
  owner: Relation<User>;
}
