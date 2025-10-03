import {Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Bookings from "./bookingsEntity";

@Entity()
export default class Event {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({
        type: "varchar",
        nullable: false,
    })
    name!: string;
    @Column({nullable: false, type: "integer"})
    total_seats!: number;
    @OneToMany(() => Bookings, (bookings)=> bookings.id)
    bookings!: Bookings[];


}