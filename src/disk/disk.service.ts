import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
@Injectable()
export class DiskService {

    constructor(private porwerService: PowerService) {

    }

    getData() {
        console.log('Drawing 20 watts of power from powerService');
        this.porwerService.supplyPower(20);
        return 'data';
    }
}
