var login = require("facebook-chat-api");
var auth = require("./config");
var math = require('mathjs');
var fb_email = auth.fb_email
var fb_password = auth.fb_password
login({ email: fb_email, password: fb_password }, function callback(err, api) {
    if (err) return console.error(err);
    var stopListening = api.listen((err, event) => {
        api.listen(function callback(err, message) {

            var rex_evel = /^(.*?)$/                                // Evel
            var res_evel = message.body.match(rex_evel);
            if (res_evel) {
                try {
                    var value = res_evel[0];
                    var cal = math.eval(value);
                    var msg = { body: cal };
                    api.sendMessage(msg, message.threadID);
                } catch (err) {
                }
            }

            var rex_round = /^round(.*?)$/                          // Round
            var res_round = message.body.match(rex_round);
            if (res_round) {
                try {
                    var value = res_round[1];
                    var cal = math.round(math.e, value);
                    var msg = { body: cal };
                    api.sendMessage(msg, message.threadID);
                }
                catch (err) {
                }
            }

            var rex_atan2 = /^atantwo(.*?)$/                       // Atan2
            var res_atan2 = message.body.match(rex_atan2);
            if (res_atan2) {
                try {
                    var value = res_atan2[1];
                    var value_filter = value.replace(/\s|\(|\)/g, "");
                    var arr = value_filter.split(",").map(function (val) {
                        return Number(val);
                    });
                    var value1 = arr[0];
                    var value2 = arr[1];
                    var cal = math.atan2(value1, value2) / math.pi;
                    var msg = { body: cal };
                    api.sendMessage(msg, message.threadID);
                }
                catch (err) {
                }
            }

            var rex_log = /^log(.*?)$/                          //Log
            var res_log = message.body.match(rex_log);
            if (res_log) {
                try {
                    var value = res_log[1];
                    var value_filter = value.replace(/\s|\(|\)/g, "");
                    var arr = value_filter.split(",").map(function (val) {
                        return Number(val);
                    });
                    var value1 = arr[0];
                    var value2 = arr[1];
                    var cal = math.log(value1, value2);
                    var msg = { body: cal };
                    api.sendMessage(msg, message.threadID);
                }
                catch (err) {
                }
            }

            var rex_sqrt = /^sqrt(.*?)$/                          // sqrt
            var res_sqrt = message.body.match(rex_sqrt);
            if (res_sqrt) {
                try {
                    var value = res_sqrt[1];
                    var value_filter = value.replace(/\s|\(|\)/g, "");
                    var cal = math.sqrt(value_filter);
                    var msg = { body: cal[1] };
                    api.sendMessage(msg, message.threadID);
                }
                catch (err) {
                }
            }


            var rex = /^(.*?)+stop/
            var res = message.body.match(rex);
            if (res) {
                try {
                    var value = res;
                    var msg = { body: "Goodbye!" };
                    api.sendMessage(msg, message.threadID);
                    return stopListening();
                }
                catch (err) {
                    console.log("error");
                    return;
                }
            }
        });
    });
});





