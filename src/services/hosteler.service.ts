import getHostelerRepository from "../repositories/hosteler.repository";
import { responseSanitizer } from "../middlewares/responseSanitizer";
import { Hosteler } from "../entities/hostelers.entity";

const hostelerRepo = getHostelerRepository();

export class HostelerService {
  async getAllHostelers() {
    const hostelers = await hostelerRepo.find();
    return hostelers.map(h => responseSanitizer(h));
  }

  async getHostelerById(id: string) {
    const hosteler = await hostelerRepo.findOneBy({ id: Number(id) });
    if (!hosteler) throw new Error('Hosteler not found');
    return responseSanitizer(hosteler);
  }

  async createHosteler(hostelerData: Partial<Hosteler>) {
    const existing = await hostelerRepo.findOne({
      where: [
        {id : hostelerData.id },
        {roomNo : hostelerData.roomNo }
      ]
    });

    if (existing) throw new Error('Hosteler already exists');

    const hosteler = hostelerRepo.create(hostelerData);
    const savedHosteler = await hostelerRepo.save(hosteler);
    return responseSanitizer(savedHosteler);
  }

  async updateHosteler(id: string, hostelerData: Partial<Hosteler>) {
    const hosteler = await hostelerRepo.findOneBy({ id: Number(id) });
    if (!hosteler) return null;

    Object.assign(hosteler, hostelerData);
    const updatedHosteler = await hostelerRepo.save(hosteler);
    return responseSanitizer(updatedHosteler);
  }

  async deleteHosteler(id: string) {
    const hosteler = await hostelerRepo.findOneBy({ id: Number(id) });
    if (!hosteler) return false;

    await hostelerRepo.remove(hosteler);
    return true;
  }
}
