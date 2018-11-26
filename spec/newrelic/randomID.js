module.exports = {randomID};
function randomID(userContext, events, done) {
 userContext.vars.id = id = Math.floor(Math.random() * 5000000);
 return done();
} 