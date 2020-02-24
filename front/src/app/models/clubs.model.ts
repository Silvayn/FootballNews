export class Clubs {

    _id: Number;
    id: Number;
    area: {
        id: Number;
        name: String;
    };
    name: String;
    shortName: String;
    tla: String;
    crestUrl: String;
    address: String;
    phone: String;
    website: String;
    email: String;
    founded: Number;
    clubColors: String;
    venue: String;
    squad: {
        id: Number;
        name: String;
        position: String;
        dateOfBirth: String;
        countryOfBirth: String;
        nationality: String;
        shirtNumber: Number;
        role: String;
    };
    lastUpdate: String;

}
