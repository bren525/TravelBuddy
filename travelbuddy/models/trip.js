module.exports = function Trip(user, transportation, school, start_location, end_location, datetime) {
    this.user = user;
    this.transportation = transportation;
    this.school = school;
    this.start_location = start_location;
    this.end_location = end_location;
    this.datetime = datetime;
}
