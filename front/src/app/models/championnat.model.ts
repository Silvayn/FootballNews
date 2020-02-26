export class Championnat {

    id : Number;
    area: {
        id: Number;
        name: String;
    };
    name: String;
    code: String;
    emblemUrl: String;
    plan: String;
    currentSeason: {
        id: Number;
        startDate: String;
        endDate: String;
        currentMatchday: Number;
        winner: Number;
    };
    lastUpdate: String;
    url: string;

    constructor(id: Number, name: String, code: string, emblemUrl: String, plan: string, lastUpdate: String) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.emblemUrl = emblemUrl;
        this.plan = plan;
        this.lastUpdate = lastUpdate;
      }

}
