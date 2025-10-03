import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import Event  from "./eventEntity";

console.log(Date.now());
@Entity()
export default class Bookings{
    @PrimaryGeneratedColumn("increment")
    id!: number
    @ManyToOne(() => Event, (event) => event.id)
    @JoinColumn()
    event_id!: Event
    @Column({type: "varchar", nullable: false})
    user_id!: string
    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at!: Date
}