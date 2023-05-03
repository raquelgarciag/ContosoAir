const avoidEmptyCity = function(a) {
    return Object.assign({}, a, { city: a.city || '-'});
}

//First change
class AirportsService {
    constructor(airports){
        this._airports = airports;
    }

    getAll(){
        return this._airports.filter(a => a.code).map(avoidEmptyCity);
    }

    getByCode(code) {
        return avoidEmptyCity(this._airports.find(a => a.code == code));
    }
}

module.exports = AirportsService;