import { PrismaClient } from '@prisma/client';

export default class DbWorker {
  instance: PrismaClient;

  constructor() {
    this.instance = new PrismaClient();
  }

  public async getUser(login: string) {
    const result = await this.instance.user.findMany({
      where: {
        login: {
          contains: login,
          mode: 'insensitive',
        },
      },
    });
    if (result.length === 0) {
      return null;
    }
    return result[0];
  }

  public async createUser(userData: any) {
    return this.instance.user.create({
      data: userData,
    });
  }
}
