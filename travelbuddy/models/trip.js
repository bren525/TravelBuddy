module.exports = function Trip(user, start_location, end_location, start_time) {
    this.user = user,
    this.start_location = start_location;
    this.end_location = end_location;
    this.start_time = start_time;
}
