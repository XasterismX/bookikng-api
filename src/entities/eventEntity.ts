import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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


}