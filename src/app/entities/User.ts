import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  getRepository
} from 'typeorm'

import bcrypt from 'bcrypt'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string

  @Column({ unique: true })
  email!: string

  @Column({ select: false })
  password!: string

  @Column()
  @CreateDateColumn()
  createdAt!: Date

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date

  @BeforeInsert()
  @BeforeUpdate()
  async passwordHash() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 8)
    }
  }

  async checkPassword(password: string) {
    // query needed because of the password "select: false"
    const user = await getRepository(User)
      .createQueryBuilder('user')
      .where('user.id = :id', {
        id: this.id
      })
      // addSelect() makes the password selectable in that query
      .addSelect('user.password')
      .getOne()
    const pass = user!.password

    return await bcrypt.compare(password, pass)
  }
}
