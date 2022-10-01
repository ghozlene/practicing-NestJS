import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, BeforeRemove, } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log('inserted User with id', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('updated user with id ', this.id);
    }

    @BeforeRemove()
    logRemove() {
        console.log('removing user with id ', this.id);
    }

}