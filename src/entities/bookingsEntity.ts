import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Event  from "./eventEntity";

@Entity()
export default class Bookings{
    @PrimaryGeneratedColumn("increment")
    id!: number
    @ManyToOne(() => Event, (event) => event.id)
    event_id!: Event[]
    @Column({type: "varchar", nullable: false})
    user_id!: string
    @Column({type: "timestamp", nullable: false, default: () => Date.now()})
    created_at!: Date
}