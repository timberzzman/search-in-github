import { PrismaClient } from '@prisma/client';

export default class DbWorker {
  instance: PrismaClient;

  constructor() {
    this.instance = new PrismaClient();
  }

  public async getUser(login: string) {
    return this.instance.user.findUnique({
      where: { login },
    });
  }

  public async createUser(userData: any) {
    return this.instance.user.create({
      data: userData,
    });
  }
}
